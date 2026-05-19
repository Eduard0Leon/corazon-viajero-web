import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from './supabase';
import type { User, Session } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  profile: any | null;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  profile: null,
  signInWithGoogle: async () => {},
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        upsertProfile(session.user);
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        upsertProfile(session.user);
      } else {
        setProfile(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const upsertProfile = async (user: User) => {
    const metadata = user.user_metadata;
    const profileData = {
      id: user.id,
      email: user.email || '',
      nombre: metadata?.full_name || metadata?.name || '',
      avatar_url: metadata?.avatar_url || metadata?.picture || '',
      ultima_visita: new Date().toISOString(),
    };

    // Try to get existing profile
    const { data: existing } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (existing) {
      // Update visit count and last visit
      const { data } = await supabase
        .from('user_profiles')
        .update({
          ultima_visita: new Date().toISOString(),
          num_visitas: (existing.num_visitas || 0) + 1,
          nombre: profileData.nombre || existing.nombre,
          avatar_url: profileData.avatar_url || existing.avatar_url,
        })
        .eq('id', user.id)
        .select()
        .single();
      setProfile(data);
    } else {
      // Create new profile
      const { data } = await supabase
        .from('user_profiles')
        .insert({ ...profileData, num_visitas: 1 })
        .select()
        .single();
      setProfile(data);
    }
  };

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + window.location.pathname
      }
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setProfile(null);
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, profile, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

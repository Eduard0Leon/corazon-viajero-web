import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface Stats {
  totalContacts: number;
  totalSubscribers: number;
  totalBlogPosts: number;
  recentContacts: any[];
}

const AdminDashboard: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<Stats>({ totalContacts: 0, totalSubscribers: 0, totalBlogPosts: 0, recentContacts: [] });
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/login');
      return;
    }
    setUser(session.user);
    await loadStats();
    setLoading(false);
  };

  const loadStats = async () => {
    const [contacts, subscribers, posts, recentContacts] = await Promise.all([
      supabase.from('contacts').select('id', { count: 'exact', head: true }),
      supabase.from('newsletter_subscribers').select('id', { count: 'exact', head: true }),
      supabase.from('blog_posts').select('id', { count: 'exact', head: true }),
      supabase.from('contacts').select('*').order('created_at', { ascending: false }).limit(10)
    ]);

    setStats({
      totalContacts: contacts.count || 0,
      totalSubscribers: subscribers.count || 0,
      totalBlogPosts: posts.count || 0,
      recentContacts: recentContacts.data || []
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="inline-block w-8 h-8 border-4 border-teal/30 border-t-teal rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Top Bar */}
      <div className="bg-navy text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/logo_oficial_corazon_viajero.png" alt="Logo" className="h-8" />
          <h1 className="text-lg font-bold">Panel de Administración</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/60 text-sm">{user?.email}</span>
          <button onClick={handleLogout} className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm transition-colors">
            Cerrar sesión
          </button>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-teal">
            <p className="text-gray-500 text-sm">Total Leads / Contactos</p>
            <p className="text-3xl font-bold text-navy mt-1">{stats.totalContacts}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-gold">
            <p className="text-gray-500 text-sm">Suscriptores Newsletter</p>
            <p className="text-3xl font-bold text-navy mt-1">{stats.totalSubscribers}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-light">
            <p className="text-gray-500 text-sm">Artículos del Blog</p>
            <p className="text-3xl font-bold text-navy mt-1">{stats.totalBlogPosts}</p>
          </div>
        </div>

        {/* Recent Contacts */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-navy mb-4">Últimos Contactos / Leads</h2>
          {stats.recentContacts.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Aún no hay contactos registrados.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 text-gray-500 font-medium">Fecha</th>
                    <th className="text-left py-3 px-2 text-gray-500 font-medium">Nombre</th>
                    <th className="text-left py-3 px-2 text-gray-500 font-medium">Email</th>
                    <th className="text-left py-3 px-2 text-gray-500 font-medium">Teléfono</th>
                    <th className="text-left py-3 px-2 text-gray-500 font-medium">Origen</th>
                    <th className="text-left py-3 px-2 text-gray-500 font-medium">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recentContacts.map((contact) => (
                    <tr key={contact.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-2 text-gray-600">{new Date(contact.created_at).toLocaleDateString('es-MX')}</td>
                      <td className="py-3 px-2 font-medium text-navy">{contact.nombre}</td>
                      <td className="py-3 px-2 text-gray-600">{contact.email}</td>
                      <td className="py-3 px-2 text-gray-600">{contact.telefono || '-'}</td>
                      <td className="py-3 px-2">
                        <span className="px-2 py-1 bg-teal/10 text-teal text-xs rounded-full">{contact.origen}</span>
                      </td>
                      <td className="py-3 px-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${contact.estado === 'nuevo' ? 'bg-gold/10 text-gold' : 'bg-green-100 text-green-700'}`}>
                          {contact.estado}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface Stats {
  totalContacts: number;
  totalSubscribers: number;
  totalBlogPosts: number;
  totalUsers: number;
  recentContacts: any[];
}

interface Aliado {
  id: string;
  nombre: string;
  logo_url: string;
  website_url: string;
  activo: boolean;
  orden: number;
}

const AdminDashboard: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'aliados'>('dashboard');
  const [stats, setStats] = useState<Stats>({ totalContacts: 0, totalSubscribers: 0, totalBlogPosts: 0, totalUsers: 0, recentContacts: [] });
  const [aliados, setAliados] = useState<Aliado[]>([]);
  const [showAliadoForm, setShowAliadoForm] = useState(false);
  const [editingAliado, setEditingAliado] = useState<Aliado | null>(null);
  const [aliadoForm, setAliadoForm] = useState({ nombre: '', logo_url: '', website_url: '', orden: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const ADMIN_EMAIL = 'ayuda.corazonviajero@gmail.com';

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/login');
      return;
    }
    if (session.user.email !== ADMIN_EMAIL) {
      await supabase.auth.signOut();
      navigate('/login');
      return;
    }
    setUser(session.user);
    await loadStats();
    await loadAliados();
    setLoading(false);
  };

  const loadStats = async () => {
    const [contacts, subscribers, posts, users, recentContacts] = await Promise.all([
      supabase.from('contacts').select('id', { count: 'exact', head: true }),
      supabase.from('newsletter_subscribers').select('id', { count: 'exact', head: true }),
      supabase.from('blog_posts').select('id', { count: 'exact', head: true }),
      supabase.from('user_profiles').select('id', { count: 'exact', head: true }),
      supabase.from('contacts').select('*').order('created_at', { ascending: false }).limit(10)
    ]);

    setStats({
      totalContacts: contacts.count || 0,
      totalSubscribers: subscribers.count || 0,
      totalBlogPosts: posts.count || 0,
      totalUsers: users.count || 0,
      recentContacts: recentContacts.data || []
    });
  };

  const loadAliados = async () => {
    const { data } = await supabase.from('aliados').select('*').order('orden', { ascending: true });
    if (data) setAliados(data);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const handleSaveAliado = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingAliado) {
      await supabase.from('aliados').update({
        nombre: aliadoForm.nombre,
        logo_url: aliadoForm.logo_url,
        website_url: aliadoForm.website_url,
        orden: aliadoForm.orden
      }).eq('id', editingAliado.id);
    } else {
      await supabase.from('aliados').insert({
        nombre: aliadoForm.nombre,
        logo_url: aliadoForm.logo_url,
        website_url: aliadoForm.website_url,
        orden: aliadoForm.orden,
        activo: true
      });
    }
    setShowAliadoForm(false);
    setEditingAliado(null);
    setAliadoForm({ nombre: '', logo_url: '', website_url: '', orden: 0 });
    await loadAliados();
  };

  const handleEditAliado = (aliado: Aliado) => {
    setEditingAliado(aliado);
    setAliadoForm({
      nombre: aliado.nombre,
      logo_url: aliado.logo_url,
      website_url: aliado.website_url || '',
      orden: aliado.orden
    });
    setShowAliadoForm(true);
  };

  const handleToggleAliado = async (aliado: Aliado) => {
    await supabase.from('aliados').update({ activo: !aliado.activo }).eq('id', aliado.id);
    await loadAliados();
  };

  const handleDeleteAliado = async (id: string) => {
    if (confirm('¿Seguro que quieres eliminar este aliado?')) {
      await supabase.from('aliados').delete().eq('id', id);
      await loadAliados();
    }
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

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex gap-1">
            <button 
              onClick={() => setActiveTab('dashboard')} 
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'dashboard' ? 'border-teal text-teal' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('aliados')} 
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'aliados' ? 'border-teal text-teal' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              Aliados
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-8">
        {activeTab === 'dashboard' && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-teal">
                <p className="text-gray-500 text-sm">Total Leads</p>
                <p className="text-3xl font-bold text-navy mt-1">{stats.totalContacts}</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-gold">
                <p className="text-gray-500 text-sm">Suscriptores</p>
                <p className="text-3xl font-bold text-navy mt-1">{stats.totalSubscribers}</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-light">
                <p className="text-gray-500 text-sm">Artículos</p>
                <p className="text-3xl font-bold text-navy mt-1">{stats.totalBlogPosts}</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-navy">
                <p className="text-gray-500 text-sm">Usuarios Registrados</p>
                <p className="text-3xl font-bold text-navy mt-1">{stats.totalUsers}</p>
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
          </>
        )}

        {activeTab === 'aliados' && (
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-navy">Gestión de Aliados</h2>
              <button 
                onClick={() => { setShowAliadoForm(true); setEditingAliado(null); setAliadoForm({ nombre: '', logo_url: '', website_url: '', orden: 0 }); }}
                className="bg-teal text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-dark transition-colors"
              >
                + Agregar Aliado
              </button>
            </div>

            {showAliadoForm && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
                <h3 className="font-medium text-navy mb-4">{editingAliado ? 'Editar Aliado' : 'Nuevo Aliado'}</h3>
                <form onSubmit={handleSaveAliado} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Nombre</label>
                    <input type="text" value={aliadoForm.nombre} onChange={(e) => setAliadoForm({ ...aliadoForm, nombre: e.target.value })} required className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-teal focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">URL del Logo (imagen)</label>
                    <input type="url" value={aliadoForm.logo_url} onChange={(e) => setAliadoForm({ ...aliadoForm, logo_url: e.target.value })} required placeholder="https://..." className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-teal focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Sitio Web (opcional)</label>
                    <input type="url" value={aliadoForm.website_url} onChange={(e) => setAliadoForm({ ...aliadoForm, website_url: e.target.value })} placeholder="https://..." className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-teal focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Orden (menor = primero)</label>
                    <input type="number" value={aliadoForm.orden} onChange={(e) => setAliadoForm({ ...aliadoForm, orden: parseInt(e.target.value) || 0 })} className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-teal focus:outline-none" />
                  </div>
                  <div className="md:col-span-2 flex gap-2">
                    <button type="submit" className="bg-teal text-white px-4 py-2 rounded-md hover:bg-teal-dark transition-colors">Guardar</button>
                    <button type="button" onClick={() => setShowAliadoForm(false)} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors">Cancelar</button>
                  </div>
                </form>
              </div>
            )}

            {aliados.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No hay aliados registrados. Agrega el primero.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {aliados.map((aliado) => (
                  <div key={aliado.id} className={`border rounded-lg p-4 ${aliado.activo ? 'bg-white' : 'bg-gray-100 opacity-60'}`}>
                    <div className="h-16 flex items-center justify-center mb-3">
                      <img src={aliado.logo_url} alt={aliado.nombre} className="max-h-14 max-w-full object-contain" />
                    </div>
                    <p className="font-medium text-navy text-center mb-1">{aliado.nombre}</p>
                    <p className="text-xs text-gray-500 text-center mb-3">Orden: {aliado.orden}</p>
                    <div className="flex justify-center gap-2">
                      <button onClick={() => handleEditAliado(aliado)} className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded transition-colors">Editar</button>
                      <button onClick={() => handleToggleAliado(aliado)} className={`text-xs px-2 py-1 rounded transition-colors ${aliado.activo ? 'bg-gold/10 text-gold hover:bg-gold/20' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}>
                        {aliado.activo ? 'Desactivar' : 'Activar'}
                      </button>
                      <button onClick={() => handleDeleteAliado(aliado.id)} className="text-xs px-2 py-1 bg-red-50 text-red-600 hover:bg-red-100 rounded transition-colors">Eliminar</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

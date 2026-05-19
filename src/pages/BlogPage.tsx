import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  titulo: string;
  slug: string;
  contenido: string;
  extracto: string;
  imagen_url: string;
  categoria: string;
  tags: string[];
  published_at: string;
  publicado: boolean;
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('publicado', true)
      .order('published_at', { ascending: false });

    if (!error && data) {
      setPosts(data);
    }
    setLoading(false);
  };

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const { error } = await supabase.from('newsletter_subscribers').insert({ email });
    if (!error) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-cream">
        <section className="relative bg-cover bg-center h-[300px]" style={{ backgroundImage: `url('${selectedPost.imagen_url || '/images/blog-hero.jpg'}')` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy-light/80"></div>
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-3xl text-white">
              <button onClick={() => setSelectedPost(null)} className="text-teal-light hover:text-white mb-4 flex items-center gap-2 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                Volver al blog
              </button>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{selectedPost.titulo}</h1>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                {selectedPost.categoria && <span className="bg-teal/20 text-teal-light px-3 py-1 rounded-full">{selectedPost.categoria}</span>}
                <span>{new Date(selectedPost.published_at).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: selectedPost.contenido.replace(/\n/g, '<br/>') }} />
            </div>
            {selectedPost.tags && selectedPost.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {selectedPost.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-teal/10 text-teal text-sm rounded-full">{tag}</span>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <section className="relative bg-cover bg-center h-[300px]" style={{ backgroundImage: "url('/images/blog-hero.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy-light/80"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog de Viajes</h1>
            <p className="text-xl md:text-2xl text-white/70">Descubre consejos, destinos y experiencias para inspirar tu próxima aventura.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {loading ? (
                <div className="text-center py-12">
                  <div className="inline-block w-8 h-8 border-4 border-teal/30 border-t-teal rounded-full animate-spin"></div>
                  <p className="mt-4 text-gray-600">Cargando artículos...</p>
                </div>
              ) : posts.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-12 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Próximamente</h3>
                  <p className="text-gray-600 max-w-md mx-auto">Estamos preparando contenido increíble sobre destinos, tips de viaje y ofertas exclusivas. ¡Suscríbete para ser el primero en enterarte!</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {posts[0] && (
                    <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedPost(posts[0])}>
                      {posts[0].imagen_url && <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${posts[0].imagen_url}')` }}></div>}
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          {posts[0].categoria && <span className="text-teal font-medium mr-3">{posts[0].categoria}</span>}
                          <span>{new Date(posts[0].published_at).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">{posts[0].titulo}</h2>
                        <p className="text-gray-600 mb-4">{posts[0].extracto}</p>
                        <span className="inline-flex items-center text-teal hover:text-teal-dark transition-colors font-medium">Leer más <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
                      </div>
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {posts.slice(1).map(post => (
                      <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedPost(post)}>
                        {post.imagen_url && <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${post.imagen_url}')` }}></div>}
                        <div className="p-5">
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            {post.categoria && <span className="text-teal font-medium mr-2">{post.categoria}</span>}
                            <span>{new Date(post.published_at).toLocaleDateString('es-MX', { month: 'short', day: 'numeric' })}</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 mb-2">{post.titulo}</h3>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-3">{post.extracto}</p>
                          <span className="text-teal hover:text-teal-dark text-sm font-medium">Leer más →</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="bg-teal/5 rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Suscríbete a nuestro boletín</h3>
                <p className="text-gray-600 text-sm mb-4">Recibe las últimas ofertas y consejos de viaje directamente en tu bandeja de entrada.</p>
                <form onSubmit={handleNewsletter}>
                  <input type="email" placeholder="Tu correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal mb-3" required />
                  <button type="submit" className="w-full bg-teal text-white py-2 px-4 rounded-md hover:bg-teal-dark transition-colors">{subscribed ? '¡Suscrito!' : 'Suscribirse'}</button>
                </form>
                {subscribed && <p className="text-teal text-sm mt-2 text-center">¡Gracias por suscribirte!</p>}
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Categorías</h3>
                <ul className="space-y-2">
                  {['Destinos', 'Consejos', 'Ofertas', 'Visas', 'Experiencias'].map(cat => (
                    <li key={cat}><span className="text-gray-600 hover:text-teal transition-colors cursor-pointer">{cat}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-navy rounded-lg shadow-md p-6 text-center">
                <h3 className="text-lg font-bold text-white mb-2">¿Listo para viajar?</h3>
                <p className="text-white/60 text-sm mb-4">Contáctanos y te ayudamos a planear tu próxima aventura.</p>
                <a href="https://wa.me/524424530648" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal text-white px-5 py-2.5 rounded-md hover:bg-teal-dark transition-colors text-sm font-medium">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

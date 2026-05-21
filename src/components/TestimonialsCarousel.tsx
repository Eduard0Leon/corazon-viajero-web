import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Review {
  id: string;
  nombre: string;
  avatar_url: string;
  calificacion: number;
  comentario: string;
}

const FALLBACK_REVIEWS: Review[] = [
  { id: '1', nombre: 'María R.', avatar_url: '', calificacion: 5, comentario: 'Sentí que me estaban recomendando algo pensado para mí, no vendiéndome lo mismo de siempre. ¡Increíble experiencia en Orlando!' },
  { id: '2', nombre: 'Carlos M.', avatar_url: '', calificacion: 5, comentario: 'La experiencia fue cercana, clara y elegante. Justo lo que buscaba para viajar sin complicarme.' },
  { id: '3', nombre: 'Ana S.', avatar_url: '', calificacion: 5, comentario: 'Aquí encontré precios inteligentes y acompañamiento de verdad. Eso cambia todo.' },
  { id: '4', nombre: 'Roberto G.', avatar_url: '', calificacion: 5, comentario: 'Me ayudaron a obtener mi visa sin estrés. Muy profesionales y siempre disponibles.' },
  { id: '5', nombre: 'Laura P.', avatar_url: '', calificacion: 5, comentario: 'Ahorré más de $15,000 MXN en mi viaje a Cancún. El hotel era exactamente como en las fotos.' },
  { id: '6', nombre: 'Javier F.', avatar_url: '', calificacion: 5, comentario: 'Disfruté unas vacaciones en Miami pagando muy poco. Lo repetiré sin dudarlo.' },
  { id: '7', nombre: 'Patricia L.', avatar_url: '', calificacion: 5, comentario: 'Una forma fantástica de viajar con calidad sin pagar de más. Todo muy transparente.' },
  { id: '8', nombre: 'Fernando M.', avatar_url: '', calificacion: 5, comentario: 'La calidad de los productos hacen que sea fácil confiar en Corazón Viajero.' },
];

interface Props {
  darkMode?: boolean;
  title?: string;
  subtitle?: string;
}

const TestimonialsCarousel: React.FC<Props> = ({
  darkMode = false,
  title,
  subtitle,
}) => {
  const [reviews, setReviews] = useState<Review[]>(FALLBACK_REVIEWS);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = await supabase
        .from('reviews')
        .select('*')
        .eq('aprobada', true)
        .order('created_at', { ascending: false });
      if (data && data.length >= 3) setReviews(data);
    };
    fetchReviews();
  }, []);

  const doubled = [...reviews, ...reviews];

  const cardClass = darkMode
    ? 'border border-white/10 bg-white/[0.04] backdrop-blur-sm'
    : 'bg-white border border-[#d8ece8] shadow-[0_18px_40px_rgba(8,51,58,0.06)]';

  const textClass = darkMode ? 'text-white' : 'text-[#0d2a31]';
  const mutedClass = darkMode ? 'text-white/48' : 'text-[#0d2a31]/48';
  const borderClass = darkMode ? 'border-white/10' : 'border-[#e6f2f0]';

  return (
    <div>
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && (
            <h2 className={`font-serif text-4xl md:text-5xl mb-4 ${textClass}`}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className={`text-lg ${mutedClass}`}>{subtitle}</p>
          )}
        </div>
      )}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-6 items-stretch"
          style={{
            animation: 'testimonial-scroll 50s linear infinite',
            width: 'max-content',
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLDivElement).style.animationPlayState =
              'paused')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLDivElement).style.animationPlayState =
              'running')
          }
        >
          {doubled.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className={`flex-shrink-0 w-[300px] md:w-[340px] rounded-[24px] p-8 ${cardClass}`}
            >
              <p
                className={`font-serif text-xl leading-9 ${textClass} mb-6`}
              >
                &ldquo;{review.comentario}&rdquo;
              </p>
              <div
                className={`border-t ${borderClass} pt-5 flex items-center gap-3`}
              >
                {review.avatar_url ? (
                  <img
                    src={review.avatar_url}
                    alt={review.nombre}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#79d9cf] flex items-center justify-center text-[#0b3840] font-bold text-sm flex-shrink-0">
                    {review.nombre.charAt(0)}
                  </div>
                )}
                <div>
                  <p className={`font-medium ${textClass}`}>{review.nombre}</p>
                  <p className="text-[#79d9cf] text-sm">
                    {'★'.repeat(review.calificacion)}
                    {'☆'.repeat(5 - review.calificacion)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes testimonial-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function PGGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((i) => (i + 1) % images.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px' }}>
      <img 
        src={images[currentIndex]} 
        alt="PG"
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
      />
      <button 
        onClick={prev}
        style={{ 
          position: 'absolute', 
          left: '1rem', 
          top: '50%', 
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255,255,255,0.9)',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={next}
        style={{ 
          position: 'absolute', 
          right: '1rem', 
          top: '50%', 
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255,255,255,0.9)',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

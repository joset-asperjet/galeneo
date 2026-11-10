'use client';

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export function LottieFirma() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Instanciar directamente con lottie-web usando renderizador svg estándar
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: '/galeneo/galeneo-lootie.json',
    });

    // Repetir la animación cada 8 segundos
    const interval = setInterval(() => {
      anim.goToAndPlay(0, true);
    }, 8000);

    return () => {
      clearInterval(interval);
      anim.destroy();
    };
  }, []);

  return (
    <div className="relative w-32 sm:w-40 flex-shrink-0 flex items-center justify-start">
      <div
        ref={containerRef}
        style={{ aspectRatio: '3112 / 546' }}
        className="w-full flex items-center justify-start [&>svg]:w-full [&>svg]:h-full [&>svg]:max-h-full filter invert"
      />
    </div>
  );
}

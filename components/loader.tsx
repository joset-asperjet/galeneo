'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import lottie from 'lottie-web';

const ANIMATION_DURATION_MS = 4000;
const FADE_OUT_DURATION_MS = 500;

export function Loader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hasDismissedRef = useRef(false);

  const handleDismiss = useCallback(() => {
    if (hasDismissedRef.current) return;
    hasDismissedRef.current = true;
    setFading(true);
    setTimeout(() => {
      setVisible(false);
    }, FADE_OUT_DURATION_MS);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    let anim: any = null;
    try {
      anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: '/galeneo/galeneo-lootie.json',
      });

      anim.addEventListener('complete', () => {
        handleDismiss();
      });
    } catch {
      handleDismiss();
    }

    const safetyTimer = setTimeout(() => {
      handleDismiss();
    }, ANIMATION_DURATION_MS + 200);

    return () => {
      clearTimeout(safetyTimer);
      if (anim) anim.destroy();
    };
  }, [handleDismiss]);

  if (!visible) return null;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleDismiss}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ease-out select-none cursor-pointer ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Cargando Galeneo"
    >
      <div
        className={`w-full max-w-md mx-auto px-4 transition-all duration-500 ease-out transform ${
          fading ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <div
          ref={containerRef}
          style={{ aspectRatio: '3112 / 546' }}
          className="w-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:max-h-full filter invert"
        />
      </div>
    </div>
  );
}

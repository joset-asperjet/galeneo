'use client';

import Image from 'next/image';

export function Booking() {
  return (
    <section className="border-t border-border px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
          Booking & Management
        </h2>
        <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
          Global Representation & Direct Inquiries
        </p>
      </div>

      {/* Booking CTA Card with Holographic Liquid Foil Animation */}
      <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-black/75 px-6 py-7 text-center backdrop-blur-md transition-all duration-500 hover:border-cyan-300/40 hover:shadow-[0_0_40px_rgba(56,189,248,0.22)]">
        {/* Holographic liquid foil background texture */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Image
            src="/galeneo/holographic-foil.jpg"
            alt="Holographic Texture"
            fill
            className="animate-holo-drift object-cover opacity-45 mix-blend-screen scale-110"
            priority
          />
        </div>

        {/* Animated Chromatic Ambient Glows (Cyan, Purple, Pink) */}
        <div className="animate-glow-sweep pointer-events-none absolute top-1/2 left-1/2 h-32 w-72 -translate-y-1/2 rounded-full bg-cyan-400/25 blur-3xl mix-blend-screen" />
        <div className="animate-glow-sweep pointer-events-none absolute top-1/2 left-1/2 h-28 w-60 -translate-y-1/2 rounded-full bg-purple-500/25 blur-2xl mix-blend-screen [animation-delay:-2.5s]" />
        <div className="animate-glow-sweep pointer-events-none absolute top-1/2 left-1/2 h-24 w-52 -translate-y-1/2 rounded-full bg-pink-400/20 blur-2xl mix-blend-screen [animation-delay:-4.5s]" />

        {/* Holographic diagonal shimmer reflection */}
        <div className="animate-holo-shimmer pointer-events-none absolute inset-y-0 w-2/3 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md" />

        {/* Protective dark vignette for text readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 backdrop-blur-[1px]" />

        {/* Content Container (elevated above background layers) */}
        <div className="relative z-10 space-y-1.5">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-200/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            Direct Contact & Dates
          </p>
          <a
            href="mailto:info@criticalsounds.com?subject=Booking%20Inquiry%20-%20Galeneo"
            className="inline-block text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-pink-200 to-purple-200 hover:from-white hover:to-cyan-200 underline decoration-cyan-400/70 underline-offset-4 transition-all drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
          >
            info@criticalsounds.com
          </a>
        </div>

        {/* Critical Sounds Academy Logo */}
        <div className="relative z-10 mt-5 flex items-center justify-center">
          <Image
            src="/galeneo/brand-foto/logos-and-branding/critical-sounds-logo.png"
            alt="Critical Sounds Academy"
            width={160}
            height={48}
            className="h-9 w-auto object-contain opacity-95 transition-all duration-300 hover:opacity-100 hover:scale-105 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
          />
        </div>
      </div>
    </section>
  );
}

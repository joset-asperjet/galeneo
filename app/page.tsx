import { Hero } from '@/components/hero';
import { Biography } from '@/components/biography';
import { SocialLinks } from '@/components/social-links';
import { Presentations } from '@/components/presentations';
import { DJSets } from '@/components/dj-sets';
import { LatestNews } from '@/components/latest-news';
import { PhotographyBranding } from '@/components/photography-branding';
import { TechnicalRider } from '@/components/technical-rider';
import { Booking } from '@/components/booking';

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background">
      <Hero />

      <div className="mx-auto w-full max-w-md px-4">
        <Biography />
        <Presentations />
        <DJSets />
        <PhotographyBranding />
        <LatestNews />
        <TechnicalRider />
        <Booking />
        <SocialLinks />
      </div>

      <footer className="mt-12 border-t border-white/10 bg-black/20 pt-8 pb-8 text-center backdrop-blur-sm">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-muted-foreground/60">
          © 2026 CRITICAL SOUNDS — ARTIST AGENCY · ALL RIGHTS RESERVED
        </p>
        <p className="mt-2 text-[10px] font-light text-muted-foreground/40">
          Developed with <span className="text-accent/60">love</span> and <span className="text-accent/60">JavaScript</span> by{' '}
          <a
            href="https://josetportfolio-delta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/70 underline underline-offset-2 transition-colors hover:text-white"
          >
            Joset
          </a>
        </p>
      </footer>
    </main>
  );
}

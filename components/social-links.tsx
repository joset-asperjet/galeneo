'use client';

import Link from 'next/link';
import Image from 'next/image';

const socials = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/galeneo_dj/',
    logo: '/images/social-media-logos/joset-presskit-2026-icon-instagram.png',
  },
  {
    name: 'SoundCloud',
    url: 'https://soundcloud.com/galeneo',
    logo: '/images/social-media-logos/joset-presskit-2026-icon-soundcloud.png',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/felipe.galeano.777/',
    logo: '/images/social-media-logos/joset-presskit-2026-icon-facebook.svg',
  },
];

export function SocialLinks() {
  return (
    <section className="border-t border-border px-4 py-12">
      <div className="mb-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
          Connect & Follow
        </h2>
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
          Official Links & Social Channels
        </p>
      </div>

      <div className="flex justify-center items-center gap-8 md:gap-12 max-w-md mx-auto">
        {socials.map((social) => {
          return (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
              className="transition-all duration-200 hover:scale-110 group p-2"
            >
              <div className="relative h-8 w-8 flex items-center justify-center">
                <Image
                  src={social.logo}
                  alt={social.name}
                  width={32}
                  height={32}
                  className="h-7 w-7 object-contain brightness-0 invert opacity-50 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

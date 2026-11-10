import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle, Youtube } from 'lucide-react';

interface DJSet {
  title: string;
  description: string;
  duration: string;
  date: string;
  image: string;
  videoUrl?: string;
  url: string;
  mixcloudUrl?: string;
  youtubeUrl?: string;
  isYoutubeOnly?: boolean;
}

const djSets: DJSet[] = [
  {
    title: 'Galeneo @ La Sala Audio Wave',
    description: 'Exclusive live performance session recorded at La Sala Audio Wave.',
    duration: 'Live Set',
    date: '2026',
    image: '/galeneo/dj-sets/galeneo-evoorg-sessions.png',
    videoUrl: '/galeneo/video-preview.mp4',
    url: '/galeneo/video-preview.mp4',
  },
  {
    title: 'Para Mi Levanah',
    description: 'Deep melodic & underground journey curated by Galeneo.',
    duration: 'DJ Set',
    date: '2026',
    image: '/galeneo/dj-sets/galeneo-para-mi-levanah.png',
    url: 'https://soundcloud.com/galeneo/para-mi-levana',
  },
  {
    title: 'Sunrise Espectacular',
    description: 'Atmospheric morning session with progressive and driving energy.',
    duration: 'DJ Set',
    date: '2026',
    image: '/galeneo/dj-sets/galeneo-sonrise-espectacular.png',
    url: 'https://soundcloud.com/galeneo/sunriseespectacular',
  },
  {
    title: 'EVOORG Sessions',
    description: 'Live studio session performance for EVOORG.',
    duration: 'DJ Set',
    date: '2026',
    image: '/galeneo/dj-sets/galeneo-evoorg-sessions.png',
    url: 'https://soundcloud.com/galeneo',
  },
];

export function DJSets() {
  return (
    <section className="border-t border-border px-4 py-12">
      <div className="mb-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
          Latest DJ Sets
        </h2>
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
          Live Recordings & Curated Sessions
        </p>
      </div>

      <div className="space-y-4">
        {djSets.map((set, idx) => {
          const isVideo = Boolean(set.videoUrl);

          return (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded border border-white/10 bg-white/5 transition-all duration-200 hover:border-accent/50 hover:bg-white/10 p-4 ${
                isVideo
                  ? 'flex flex-col gap-4'
                  : 'flex flex-col sm:flex-row gap-4 items-center'
              }`}
            >
              {/* Media Container: Horizontal widescreen 16:9 si tiene video, o aspecto cuadrado para los demás */}
              {isVideo ? (
                <div className="relative aspect-video w-full overflow-hidden rounded border border-white/10 bg-black/60">
                  <video
                    src={set.videoUrl}
                    poster={set.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <Link
                    href={set.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-all duration-200 group-hover:opacity-100 hover:bg-black/50"
                    title={set.youtubeUrl ? "Watch full set on YouTube" : "Watch video"}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 transition-transform duration-200 group-hover:scale-110">
                      {set.youtubeUrl ? (
                        <Youtube className="h-6 w-6 text-white drop-shadow-md" fill="white" />
                      ) : (
                        <PlayCircle className="h-6 w-6 text-white drop-shadow-md" />
                      )}
                    </div>
                  </Link>
                  <span className="absolute bottom-2 left-2 text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-black/75 text-accent border border-white/10 pointer-events-none">
                    Live Video Set
                  </span>
                </div>
              ) : (
                <div className="relative aspect-square w-24 sm:w-28 flex-shrink-0 overflow-hidden rounded border border-white/10">
                  <Image
                    src={set.image || "/placeholder.svg"}
                    alt={set.title}
                    width={112}
                    height={112}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Link
                    href={set.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/40 transition-all duration-200 group-hover:bg-black/60"
                  >
                    <PlayCircle className="h-8 w-8 text-white transition-transform duration-200 group-hover:scale-110" />
                  </Link>
                </div>
              )}

              {/* Contenido e Información */}
              <div className="flex flex-1 flex-col justify-between w-full min-w-0">
                <div>
                  <h3 className="text-sm font-semibold text-foreground truncate">
                    {set.title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground/80 line-clamp-2">
                    {set.description}
                  </p>
                </div>

                {/* Pie con duración, íconos de plataformas y fecha */}
                <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2">
                  <div className="flex items-center gap-3">
                    <p className="text-[10px] font-medium text-accent">{set.duration}</p>
                    <div className="flex items-center gap-2 border-l border-white/10 pl-3">
                      {/* Si es sólo YouTube */}
                      {set.youtubeUrl && (
                        <Link
                          href={set.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="opacity-60 hover:opacity-100 transition-opacity text-red-500 hover:scale-110"
                          title="Watch on YouTube"
                        >
                          <Youtube className="h-4 w-4" />
                        </Link>
                      )}

                      {/* Si tiene SoundCloud */}
                      {!set.isYoutubeOnly && set.url && set.url.includes('soundcloud.com') && (
                        <Link
                          href={set.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="opacity-40 hover:opacity-100 transition-opacity"
                          title="Listen on SoundCloud"
                        >
                          <Image
                            src="/images/social-media-logos/joset-presskit-2026-icon-soundcloud.png"
                            alt="SoundCloud"
                            width={14}
                            height={14}
                            className="brightness-0 invert h-3.5 w-auto object-contain"
                          />
                        </Link>
                      )}

                      {/* Si tiene Mixcloud */}
                      {set.mixcloudUrl && (
                        <Link
                          href={set.mixcloudUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="opacity-40 hover:opacity-100 transition-opacity"
                          title="Listen on Mixcloud"
                        >
                          <Image
                            src="/images/social-media-logos/joset-presskit-2026-icon-mixcloud.png"
                            alt="Mixcloud"
                            width={14}
                            height={14}
                            className="brightness-0 invert h-3.5 w-auto object-contain"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground/60">{set.date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

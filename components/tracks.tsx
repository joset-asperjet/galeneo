'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, Pause } from 'lucide-react';
import { useAudioPlayer } from '@/context/audio-player-context';

interface TrackItem {
  title: string;
  artist: string;
  label: string;
  date: string;
  image: string;
  audioUrl: string;
  links?: {
    spotify?: string;
    apple?: string;
    beatport?: string;
    deezer?: string;
    bandcamp?: string;
    soundcloud?: string;
  };
}

const tracks: TrackItem[] = [
  {
    title: "Enciendelo",
    artist: "Erick Cz, Karther",
    label: "Arawak Records",
    date: "2026-10-02",
    image: "/multimedia-karther/music/tracks-covers/enciendelo.webp",
    audioUrl: "/multimedia-karther/music/Erick Cz, Karther - Enciendelo (Original Mix) [Arawak Records] - Music & Downloads on Beatport.mp3",
    links: {
      spotify: "https://open.spotify.com/intl-es/album/6Rpblef9yGf0wn98EhnVPS",
      apple: "https://music.apple.com/es/album/enciendelo-single/1891303104",
      beatport: "https://www.beatport.com/es/artist/karther/1005477",
    },
  },
  {
    title: "Dexter",
    artist: "Karther",
    label: "Nebulozza Records",
    date: "2026-09-18",
    image: "/multimedia-karther/music/tracks-covers/dexter.webp",
    audioUrl: "/multimedia-karther/music/Karther - Dexter (Original Mix) [Nebulozza Records] - Music & Downloads on Beatport.mp3",
    links: {
      spotify: "https://open.spotify.com/intl-es/track/49lOlpA0FCXKt6xJMedZ8u",
      beatport: "https://www.beatport.com/es/track/dexter/30287628",
    },
  },
  {
    title: "No Body",
    artist: "Cleyn, Karther",
    label: "Supersonica Music",
    date: "2026-08-15",
    image: "/multimedia-karther/music/tracks-covers/no-body.webp",
    audioUrl: "/multimedia-karther/music/Cleyn, Karther - No Body EP [Supersonica Music] - Music & Downloads on Beatport.mp3",
    links: {
      spotify: "https://open.spotify.com/intl-es/track/1lEHBGGFB1YFAcdMtwlJdv",
      apple: "https://music.apple.com/es/album/no-body-ep-single/6793633085",
      beatport: "https://www.beatport.com/es/artist/karther/1005477",
    },
  },
  {
    title: "Scooby Doo",
    artist: "Cleyn, Karther",
    label: "Harvibal",
    date: "2026-06-06",
    image: "/multimedia-karther/music/tracks-covers/scooby doo.webp",
    audioUrl: "/multimedia-karther/music/Cleyn, Karther - Scooby Doo (Original Mix) [Harvibal] - Music & Downloads on Beatport.mp3",
    links: {
      beatport: "https://www.beatport.com/es/artist/karther/1005477",
    },
  },
  {
    title: "Extacy",
    artist: "Victor Vergara, Karther",
    label: "Magic Beatz",
    date: "2026-03-09",
    image: "/multimedia-karther/music/tracks-covers/extacy.webp",
    audioUrl: "/multimedia-karther/music/Victor Vergara, Karther - Extacy [Magic Beatz] - Music & Downloads on Beatport.mp3",
    links: {
      beatport: "https://www.beatport.com/es/artist/karther/1005477",
    },
  },
  {
    title: "Mamacita",
    artist: "Karther",
    label: "BOOTH",
    date: "2025-08-11",
    image: "/multimedia-karther/music/tracks-covers/mamacita.webp",
    audioUrl: "/multimedia-karther/music/Karther - Mamacita (Original Mix) [BOOTH] - Music & Downloads on Beatport.mp3",
    links: {
      beatport: "https://www.beatport.com/es/artist/karther/1005477",
    },
  },
];

export function Tracks() {
  const [showAll, setShowAll] = useState(false);
  const { currentTrack, isPlaying, togglePlayPause } = useAudioPlayer();

  const displayedTracks = showAll ? tracks : tracks.slice(0, 4);

  return (
    <section className="border-t border-border px-4 py-12">
      <div className="mb-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
          Featured Tracks
        </h2>
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
          Signature Sound & Highlighted Releases
        </p>
      </div>

      <div className="space-y-4">
        {displayedTracks.map((track, idx) => {
          const isThisPlaying = currentTrack?.audioUrl === track.audioUrl && isPlaying;

          return (
            <div
              key={idx}
              className="group/item relative flex gap-4 rounded border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:border-accent/50 hover:bg-white/10"
            >
              <div className="relative aspect-square h-16 w-16 flex-shrink-0 overflow-hidden rounded group">
                <Image
                  src={track.image || "/placeholder.svg"}
                  alt={track.title}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
                {track.audioUrl && (
                  <button
                    onClick={() =>
                      togglePlayPause({
                        id: `track-${idx}`,
                        title: track.title,
                        artist: track.artist,
                        image: track.image || "/placeholder.svg",
                        audioUrl: track.audioUrl,
                      })
                    }
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-all duration-200 group-hover:opacity-100"
                    title={isThisPlaying ? "Pausar track" : "Reproducir track"}
                  >
                    {isThisPlaying ? (
                      <Pause className="h-6 w-6 text-white" fill="currentColor" />
                    ) : (
                      <Play className="h-6 w-6 text-white ml-0.5" fill="currentColor" />
                    )}
                  </button>
                )}
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {track.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{track.artist}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-medium text-accent">{track.label}</p>
                    <p className="text-xs text-muted-foreground">{track.date}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {track.links?.spotify && (
                      <a
                        href={track.links.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-200 hover:scale-110"
                        title="Listen on Spotify"
                      >
                        <Image
                          src="/images/music-streaming/joset-digital-presskit-spotify-logo.png"
                          alt="Spotify"
                          width={18}
                          height={18}
                          className="object-contain"
                        />
                      </a>
                    )}
                    {track.links?.apple && (
                      <a
                        href={track.links.apple}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-200 hover:scale-110"
                        title="Listen on Apple Music"
                      >
                        <Image
                          src="/images/music-streaming/joset-digital-presskit-apple-music-logo.png"
                          alt="Apple Music"
                          width={18}
                          height={18}
                          className="object-contain"
                        />
                      </a>
                    )}
                    {track.links?.beatport && (
                      <a
                        href={track.links.beatport}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-200 hover:scale-110"
                        title="Buy on Beatport"
                      >
                        <Image
                          src="/images/social-media-logos/joset-presskit-2026-icon-beatport.png"
                          alt="Beatport"
                          width={18}
                          height={18}
                          className="object-contain"
                        />
                      </a>
                    )}
                    {track.links?.deezer && (
                      <a
                        href={track.links.deezer}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-200 hover:scale-110"
                        title="Listen on Deezer"
                      >
                        <Image
                          src="/images/music-streaming/joset-digital-presskit-deezer-logo.png"
                          alt="Deezer"
                          width={18}
                          height={18}
                          className="object-contain"
                        />
                      </a>
                    )}
                    {track.links?.bandcamp && (
                      <a
                        href={track.links.bandcamp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-200 hover:scale-110"
                        title="Listen on Bandcamp"
                      >
                        <Image
                          src="/images/social-media-logos/joset-presskit-2026-icon-bandcamp.png"
                          alt="Bandcamp"
                          width={18}
                          height={18}
                          className="object-contain"
                        />
                      </a>
                    )}
                    {track.links?.soundcloud && (
                      <a
                        href={track.links.soundcloud}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-200 hover:scale-110"
                        title="Listen on SoundCloud"
                      >
                        <Image
                          src="/images/social-media-logos/joset-presskit-2026-icon-soundcloud.png"
                          alt="SoundCloud"
                          width={18}
                          height={18}
                          className="object-contain"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {!showAll && tracks.length > 4 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="rounded-full border border-border px-6 py-2 text-xs font-medium uppercase tracking-widest text-foreground transition-all duration-200 hover:bg-muted hover:border-accent"
          >
            View More Tracks
          </button>
        </div>
      )}
    </section>
  );
}

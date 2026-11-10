'use client';

import { useState } from 'react';
import Image from 'next/image';
import { LayoutGrid, Rows, MapPin, Calendar, Clock } from 'lucide-react';

interface PresentationItem {
  city: string;
  place: string;
  venue: string;
  date: string;
  image: string;
  isUpcoming?: boolean;
  isCancelled?: boolean;
  time?: string;
}

const presentations: PresentationItem[] = [
  {
    city: 'Medellín, Colombia',
    place: 'Frequency · Raw Energy',
    venue: 'Xero Club',
    date: 'November 06',
    image: '/galeneo/dates/frequency-raw-energy-noviembre-06.webp',
  },
  {
    city: 'Medellín, Colombia',
    place: 'Groovers',
    venue: 'Mijitō Rooftop & Coffee',
    date: 'October 16',
    image: '/galeneo/dates/groovers-mijito-rooftop&coffee-16-octubre.webp',
  },
  {
    city: 'Oriente, Antioquia',
    place: 'Village Festival',
    venue: 'Synergy Stage',
    date: 'September 30',
    image: '/galeneo/dates/village-festival-30-septimebre.webp',
  },
  {
    city: 'Medellín, Colombia',
    place: 'Deep Presenta · Indie Dance',
    venue: 'Deep Club',
    date: 'September 13',
    image: '/galeneo/dates/deep-club-septiembre-13.webp',
  },
  {
    city: 'Medellín, Colombia',
    place: 'Critical Sounds Showcase',
    venue: 'Mijitō Rooftop (Academy Studios)',
    date: 'July 31',
    image: '/galeneo/dates/critical-sounds-academy-studios-show-case-31-julio.webp',
  },
];

export function Presentations() {
  const [viewMode, setViewMode] = useState<'scroll' | 'cascade'>('scroll');

  return (
    <section className="border-t border-border px-4 py-12">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Key Dates
          </h2>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
            Milestone Performances & Shows
          </p>
        </div>

        <div className="flex gap-2 mb-1">
          <button
            onClick={() => setViewMode('scroll')}
            className={`rounded p-2 transition-all duration-200 ${viewMode === 'scroll'
              ? 'bg-accent text-background'
              : 'text-foreground hover:bg-muted'
              }`}
            title="Horizontal scroll"
          >
            <Rows className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode('cascade')}
            className={`rounded p-2 transition-all duration-200 ${viewMode === 'cascade'
              ? 'bg-accent text-background'
              : 'text-foreground hover:bg-muted'
              }`}
            title="Cascade view"
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
        </div>
      </div>

      {viewMode === 'scroll' && (
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {presentations.map((presentation, idx) => (
            <div
              key={idx}
              className="group/item relative flex-shrink-0 w-52 flex flex-col gap-3 rounded border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:border-accent/50 hover:bg-white/10"
            >
              {presentation.isUpcoming && (
                <div className="absolute top-0 right-0 overflow-hidden rounded-tr rounded-bl z-10">
                  <div className="bg-accent px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-background">
                    Upcoming
                  </div>
                </div>
              )}
              {presentation.isCancelled && (
                <div className="absolute top-0 right-0 overflow-hidden rounded-tr rounded-bl z-10">
                  <div className="bg-red-600 px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-white">
                    Rescheduled
                  </div>
                </div>
              )}
              <div className="aspect-[4/5] w-full overflow-hidden rounded">
                <Image
                  src={presentation.image || '/placeholder.svg'}
                  alt={`${presentation.place}, ${presentation.city}`}
                  width={216}
                  height={270}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {presentation.place}
                </h3>
                <div className="flex flex-col gap-1 mt-1">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{presentation.venue || presentation.city}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{presentation.date}</span>
                  </div>
                  {presentation.time && (
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{presentation.time}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {viewMode === 'cascade' && (
        <div className="space-y-4">
          {presentations.map((presentation, idx) => (
            <div
              key={idx}
              className="group/item relative flex gap-4 rounded border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:border-accent/50 hover:bg-white/10"
            >
              {presentation.isUpcoming && (
                <div className="absolute top-0 right-0 overflow-hidden rounded-tr rounded-bl z-10">
                  <div className="bg-accent px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-background">
                    Upcoming
                  </div>
                </div>
              )}
              {presentation.isCancelled && (
                <div className="absolute top-0 right-0 overflow-hidden rounded-tr rounded-bl z-10">
                  <div className="bg-red-400 px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-white">
                    Rescheduled
                  </div>
                </div>
              )}
              <div className="aspect-[4/5] h-24 w-auto flex-shrink-0 overflow-hidden rounded">
                <Image
                  src={presentation.image || '/placeholder.svg'}
                  alt={`${presentation.place}, ${presentation.city}`}
                  width={96}
                  height={120}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center gap-1">
                <h3 className="text-sm font-semibold text-foreground">
                  {presentation.place}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{presentation.venue || presentation.city}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{presentation.date}</span>
                  </div>
                  {presentation.time && (
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{presentation.time}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

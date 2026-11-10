'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Mail } from 'lucide-react';

const visualGear = [
  {
    title: 'CDJ-3000',
    subtitle: 'Pioneer CDJ-3000 professional player',
    image: '/multimedia-karther/technical-rider/12.png',
    alt: 'Pioneer CDJ-3000 Deck 1',
  },
  {
    title: 'CDJ-3000',
    subtitle: 'Pioneer CDJ-3000 professional player',
    image: '/multimedia-karther/technical-rider/12.png',
    alt: 'Pioneer CDJ-3000 Deck 2',
  },
  {
    title: 'CDJ-3000',
    subtitle: 'Pioneer CDJ-3000 professional player',
    image: '/multimedia-karther/technical-rider/12.png',
    alt: 'Pioneer CDJ-3000 Deck 3',
  },
  {
    title: 'DJM-V10',
    subtitle: 'Pioneer DJ flagship 6-channel mixer',
    image: '/multimedia-karther/technical-rider/11.png',
    alt: 'Pioneer DJM-V10 Mixer',
  },
];

const equipmentSpecs: { label: string; value: string; note?: string }[] = [
  {
    label: 'Monitor',
    value: 'Dedicated Booth Monitoring',
    note: 'Independent stereo booth monitor system with direct volume control',
  },
];

const hospitalityItems = [
  {
    category: 'Backstage',
    subtitle: 'Private Area',
    description: 'Reserved and strictly private space for the artist and management.',
  },
  {
    category: 'Refreshments',
    subtitle: 'Beverages & Snacks',
    description: 'Hydration, one bottle of premium liquor (preferably Tequila), plus continuous basic hospitality during time at the venue.',
  },
  {
    category: 'Access',
    subtitle: 'Staff Flow',
    description: 'Full team access credentials, security alignment, and synchronized arrival and departure schedule coordination.',
  },
  {
    category: 'Transport',
    subtitle: 'Local Logistics',
    description: 'Ground transfers, hotel accommodation, or custom travel arrangements depending on event format and distance.',
  },
];

export function TechnicalRider() {
  const [isEquipOpen, setIsEquipOpen] = useState(true);
  const [isHospOpen, setIsHospOpen] = useState(true);

  return (
    <section className="border-t border-border px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
          Technical Rider & Hospitality
        </h2>
        <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
          Production Standards & Touring Requirements
        </p>
      </div>

      <div className="space-y-6">
        {/* Section 1: DJ Technical Equipment */}
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <button
            onClick={() => setIsEquipOpen(!isEquipOpen)}
            className="flex w-full items-center justify-between px-4 py-3.5 transition-colors duration-200 hover:bg-muted/60"
          >
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              DJ Booth & Technical Setup
            </h3>
            <ChevronDown
              className={`h-4 w-4 text-accent transition-transform duration-200 ${isEquipOpen ? 'rotate-180' : ''
                }`}
            />
          </button>

          {isEquipOpen && (
            <div className="space-y-4 border-t border-border bg-muted/20 p-4">
              {/* Visual Gear Cards */}
              <div>
                <div
                  className="flex gap-2.5 overflow-x-auto pb-2 pt-1 scrollbar-hide snap-x snap-mandatory"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {visualGear.map((gear, idx) => (
                    <div
                      key={idx}
                      className="group/gear relative flex w-[140px] sm:w-[155px] shrink-0 snap-start flex-col justify-between rounded-xl border border-white/10 bg-background/80 p-3 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-background"
                    >
                      <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-black/40 p-2">
                        <Image
                          src={gear.image}
                          alt={gear.alt}
                          width={140}
                          height={140}
                          className="h-full w-full object-contain drop-shadow-md transition-transform duration-500 group-hover/gear:scale-105"
                        />
                      </div>
                      <div className="mt-3">
                        <h4 className="font-mono text-xs font-bold uppercase tracking-tight text-foreground">
                          {gear.title}
                        </h4>
                        <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground/80">
                          {gear.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Minimum Gear Requirement Note */}
                <p className="mt-2.5 text-[11px] leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">Requirement: </span>
                  Minimum setup requires 3× Pioneer CDJ-3000 multiplayer units & 1× DJM-V10 mixer.
                </p>
              </div>

              {/* Separator */}
              <div className="border-t border-white/10" />

              {/* Technical Spec Cards in Cascade */}
              <div className="flex flex-col gap-2.5">
                {equipmentSpecs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-white/5 bg-background/60 p-3.5 backdrop-blur-sm transition-colors hover:border-white/10"
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                        {spec.label}
                      </span>
                      <span className="font-mono text-xs font-bold text-foreground">
                        {spec.value}
                      </span>
                    </div>
                    {spec.note && (
                      <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
                        {spec.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Section 2: Hospitality & Experience */}
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <button
            onClick={() => setIsHospOpen(!isHospOpen)}
            className="flex w-full items-center justify-between px-4 py-3.5 transition-colors duration-200 hover:bg-muted/60"
          >
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Hospitality & Touring Logistics
            </h3>
            <ChevronDown
              className={`h-4 w-4 text-accent transition-transform duration-200 ${isHospOpen ? 'rotate-180' : ''
                }`}
            />
          </button>

          {isHospOpen && (
            <div className="space-y-4 border-t border-border bg-muted/20 p-4">
              {/* Philosophy & Statement */}
              <div className="rounded border border-accent/20 bg-accent/5 p-3.5">
                <p className="text-xs font-medium italic text-foreground/90">
                  “Hospitality must be part of the experience. Not just a checklist.”
                </p>
                <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                  Requirements designed to ensure a professional and comfortable experience throughout the entire date. A private area, hydration, basic care for the artist and crew, access coordination, schedule compliance, and local logistical support are required according to the venue and event format.
                </p>
              </div>

              {/* Hospitality Cards */}
              <div className="grid grid-cols-1 gap-2.5">
                {hospitalityItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded border border-white/5 bg-background/60 p-3"
                  >
                    <div className="flex items-baseline gap-2">
                      <h4 className="text-xs font-semibold text-foreground">
                        {item.category}
                      </h4>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        — {item.subtitle}
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

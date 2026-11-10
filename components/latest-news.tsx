'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import Image from 'next/image';

interface NewsItem {
    title: string;
    date: string;
    description: string;
    tag: string;
    detailedContent: string;
    image?: string;
    ctaUrl?: string;
    ctaText?: string;
}

const newsItems: NewsItem[] = [
    {
        title: "Galeneo Joins the DJ Faculty at Critical Sounds Academy",
        date: "Current · 2026",
        description: "Galeneo officially joins the instructor team at Critical Sounds Academy, mentoring upcoming DJs in mixing techniques for the Social DJ and Club DJ programs.",
        tag: "Academy",
        detailedContent: "Committed to cultivating the next generation of electronic music artists, Galeneo has officially joined the faculty at Critical Sounds Academy. Bringing over a decade of stage experience across Colombia, Spain, Argentina, and Aruba, Galeneo leads specialized mixing modules focused on track programming, crowd psychology, and technical performance for both the Social DJ and Club DJ training courses.",
        image: "/galeneo/brand-foto/logos-and-branding/critical-sounds-logo.png",
    },
];

export function LatestNews() {
    const [expandedItem, setExpandedItem] = useState<number | null>(null);

    return (
        <section className="border-t border-border px-4 py-12">
            <div className="mb-8 flex items-end justify-between">
                <div>
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                        Latest News
                    </h2>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
                        Global Updates & Projects
                    </p>
                </div>
            </div>

            <div className="relative space-y-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-border/50 pl-6">
                {newsItems.map((item, idx) => (
                    <div key={idx} className="relative group">
                        {/* Timeline Dot */}
                        <div className={`absolute -left-[27px] top-6 h-2 w-2 rounded-full border-2 border-background ring-4 ring-background transition-all duration-500 ${expandedItem === idx ? 'bg-white scale-150 shadow-[0_0_15px_rgba(255,255,255,0.8)]' : 'bg-accent group-hover:scale-125'}`} />

                        <div className="flex flex-col gap-3 p-4 rounded-xl transition-all duration-300 hover:bg-white/[0.03] group-hover:shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="rounded-full bg-accent/20 px-2 py-1 text-[8px] font-black uppercase tracking-[0.15em] text-accent border border-accent/30 shadow-[0_0_10px_rgba(var(--accent),0.1)]">
                                        {item.tag}
                                    </span>
                                    <span className="flex items-center gap-1 text-[9px] font-medium text-muted-foreground/60 uppercase tracking-tight">
                                        <Calendar className="h-2.5 w-2.5" />
                                        {item.date}
                                    </span>
                                </div>
                            </div>

                            <h3 className="text-[15px] font-bold text-foreground leading-tight group-hover:text-accent transition-colors tracking-tight">
                                {item.title}
                            </h3>

                            {item.image && (
                                <div className="group/img relative my-2 aspect-video w-full overflow-hidden rounded-lg border border-white/5 bg-white/[0.03] p-6 shadow-inner transition-all duration-500 flex items-center justify-center">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={500}
                                        height={280}
                                        className="h-full w-full object-contain transition-transform duration-700 group-hover/img:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 pointer-events-none" />
                                </div>
                            )}

                            <p className="text-[11px] leading-relaxed text-muted-foreground/90 text-justify">
                                {item.description}
                            </p>

                            <button
                                onClick={() => setExpandedItem(expandedItem === idx ? null : idx)}
                                className={`mt-1 flex w-fit items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${expandedItem === idx ? 'text-foreground' : 'text-accent hover:gap-2.5'}`}
                            >
                                {expandedItem === idx ? (
                                    <>
                                        Close Details
                                        <ChevronUp className="h-3 w-3" />
                                    </>
                                ) : (
                                    <>
                                        Explore Story
                                        <ChevronDown className="h-3 w-3" />
                                    </>
                                )}
                            </button>

                            {/* Expanded Content Section */}
                            {expandedItem === idx && (
                                <div className="mt-4 animate-in fade-in slide-in-from-top-4 duration-500 ease-out">
                                    <div className="overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-1 shadow-2xl backdrop-blur-md">
                                        <div className="rounded-lg bg-background/40 p-5">
                                            <p className="text-[12px] leading-relaxed text-foreground/80 text-justify italic font-light border-l-2 border-accent/30 pl-4 py-1">
                                                &ldquo;{item.detailedContent}&rdquo;
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="mt-4 h-[1px] w-12 bg-gradient-to-r from-border to-transparent group-hover:w-full transition-all duration-700" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

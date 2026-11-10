'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, AlertCircle, X, Download, ChevronDown, ArrowUpRight } from 'lucide-react';

interface GalleryItem {
    src: string;
    downloadUrl?: string;
    label: string;
}

const GOOGLE_DRIVE_PHOTOS_URL = "https://drive.google.com/drive/folders/1S9yY2jmZyMlnx0PgYtrb75Q_jsA8-Zab";
const GOOGLE_DRIVE_LOGOS_URL = "https://drive.google.com/drive/folders/1nEb7pihQ4JPhh95XtOj2msGMbX5x_Ic9";
const GOOGLE_DRIVE_BRAND_MANUAL_URL = "https://drive.google.com/drive/folders/1ZHULriGsPIEHsfIZr8gJ7Zz602WCCRrz";
const GOOGLE_DRIVE_FONTS_URL = "https://drive.google.com/drive/folders/1B0wMiMV3E5fAOTKS-vIpSNEoAwtz_F0a";

const mainPressGallery: GalleryItem[] = [
    {
        src: "/galeneo/brand-foto/galeneo1.webp",
        downloadUrl: GOOGLE_DRIVE_PHOTOS_URL,
        label: "Editorial Photo 01",
    },
    {
        src: "/galeneo/brand-foto/galeneo2.webp",
        downloadUrl: GOOGLE_DRIVE_PHOTOS_URL,
        label: "Editorial Photo 02",
    },
    {
        src: "/galeneo/brand-foto/galeneo3.webp",
        downloadUrl: GOOGLE_DRIVE_PHOTOS_URL,
        label: "Editorial Photo 03",
    },
    {
        src: "/galeneo/brand-foto/galeneo4.webp",
        downloadUrl: GOOGLE_DRIVE_PHOTOS_URL,
        label: "Editorial Photo 04",
    },
];

const brandingGallery: GalleryItem[] = [
    {
        src: "/galeneo/brand-foto/logos-and-branding/galeneo-logo.png",
        downloadUrl: GOOGLE_DRIVE_LOGOS_URL,
        label: "Galeneo Logo White",
    },
    {
        src: "/galeneo/brand-foto/logos-and-branding/galeneo-logo-black.png",
        downloadUrl: GOOGLE_DRIVE_LOGOS_URL,
        label: "Galeneo Logo Black",
    },
    {
        src: "/galeneo/brand-foto/logos-and-branding/galeneo-logo-animated.gif",
        downloadUrl: GOOGLE_DRIVE_LOGOS_URL,
        label: "Galeneo Animated Logo",
    },
    {
        src: "/galeneo/brand-foto/logos-and-branding/critical-sounds-logo.png",
        downloadUrl: GOOGLE_DRIVE_LOGOS_URL,
        label: "Critical Sounds Logo",
    },
];

const assets = [
    {
        src: mainPressGallery[0].src,
        alt: "Artist Portrait (Default)",
        label: "Editorial Photos",
        isGallery: true,
        galleryType: 'main' as const,
        isLogo: false,
    },
    {
        src: brandingGallery[0].src,
        alt: "Galeneo & Agency Logos",
        label: "Logos & Branding",
        isGallery: true,
        galleryType: 'branding' as const,
        isLogo: true,
    },
];

export function PhotographyBranding() {
    const [activeGallery, setActiveGallery] = useState<'main' | 'branding' | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const galleries = {
        main: mainPressGallery,
        branding: brandingGallery,
    };

    const currentGallery = activeGallery ? galleries[activeGallery] : [];

    const nextImage = () => {
        if (!activeGallery) return;
        setCurrentIndex((prev) => (prev + 1) % currentGallery.length);
    };

    const prevImage = () => {
        if (!activeGallery) return;
        setCurrentIndex((prev) => (prev - 1 + currentGallery.length) % currentGallery.length);
    };

    return (
        <section className="border-t border-border px-4 py-12">
            <div className="mb-8">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    Photography & Branding
                </h2>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
                    Media Assets & Visual Identity
                </p>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                {assets.map((asset, idx) => (
                    <div key={idx} className="group relative flex flex-col gap-2">
                        {asset.isGallery ? (
                            <div
                                onClick={() => {
                                    setActiveGallery(asset.galleryType || null);
                                    setCurrentIndex(0);
                                }}
                                className="relative aspect-[4/5] cursor-pointer"
                            >
                                {galleries[asset.galleryType as keyof typeof galleries].length > 2 && (
                                    <div className={`absolute inset-0 translate-x-3 -translate-y-3 overflow-hidden rounded border border-border bg-card transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4 ${asset.isLogo ? 'bg-white/5' : ''}`}>
                                        <Image
                                            src={galleries[asset.galleryType as keyof typeof galleries][2].src}
                                            alt="Stack Background"
                                            fill
                                            className={`opacity-40 ${asset.isLogo ? 'object-contain p-4' : 'object-cover'}`}
                                        />
                                    </div>
                                )}
                                {galleries[asset.galleryType as keyof typeof galleries].length > 1 && (
                                    <div className={`absolute inset-0 translate-x-1.5 -translate-y-1.5 overflow-hidden rounded border border-border bg-card transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 ${asset.isLogo ? 'bg-white/5' : ''}`}>
                                        <Image
                                            src={galleries[asset.galleryType as keyof typeof galleries][1].src}
                                            alt="Stack Background"
                                            fill
                                            className={`opacity-60 ${asset.isLogo ? 'object-contain p-4' : 'object-cover'}`}
                                        />
                                    </div>
                                )}

                                <div className={`relative h-full w-full overflow-hidden rounded border border-border bg-card transition-all duration-300 group-hover:border-accent shadow-xl ${asset.isLogo ? 'bg-white/5' : ''}`}>
                                    <Image
                                        src={asset.src}
                                        alt={asset.alt}
                                        fill
                                        className={`${asset.isLogo ? 'object-contain p-4' : 'object-cover'}`}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <div className="flex flex-col items-center gap-2">
                                            <Camera className="h-6 w-6 text-white" />
                                            <span className="text-[8px] font-bold uppercase tracking-tighter text-white">
                                                {asset.isLogo ? 'View Logos' : 'View Gallery'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <a
                                href={`${asset.src}`}
                                download
                                className={`group/asset relative aspect-[4/5] overflow-hidden rounded border border-border bg-card transition-all duration-300 hover:border-accent ${asset.isLogo ? 'bg-white/5' : ''}`}
                            >
                                <Image
                                    src={asset.src}
                                    alt={asset.alt}
                                    fill
                                    className={`${asset.isLogo ? 'object-contain p-4' : 'object-cover'}`}
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-all duration-300 group-hover/asset:opacity-100">
                                    <div className="flex translate-y-2 flex-col items-center gap-1.5 transition-transform duration-300 group-hover/asset:translate-y-0">
                                        <div className="rounded-full bg-accent p-2 shadow-lg">
                                            <Download className="h-4 w-4 text-background" />
                                        </div>
                                        <span className="text-[8px] font-bold uppercase tracking-tighter text-white">Download</span>
                                    </div>
                                </div>
                            </a>
                        )}
                        <div className="flex items-center justify-between">
                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-accent">
                                {asset.label}
                            </p>
                            {asset.galleryType === 'branding' && (
                                <a
                                    href={GOOGLE_DRIVE_LOGOS_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    title="Open Logos Drive"
                                    className="text-[9px] uppercase tracking-wider text-muted-foreground/80 hover:text-accent flex items-center gap-1 transition-colors"
                                >
                                    <span>Drive</span>
                                    <ArrowUpRight className="h-3 w-3" />
                                </a>
                            )}
                        </div>
                    </div>
                ))}

                {/* Horizontal CTAs for Brand Manual & Fonts */}
                <div className="col-span-2 grid grid-cols-2 gap-3 pt-2">
                    <a
                        href={GOOGLE_DRIVE_BRAND_MANUAL_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-lg border border-border bg-card/60 p-3.5 backdrop-blur-sm transition-all duration-300 hover:border-accent hover:bg-accent/10 active:scale-[0.98]"
                    >
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-foreground transition-colors group-hover:text-accent">
                                View Brand Manual
                            </span>
                            <span className="text-[8px] uppercase tracking-widest text-muted-foreground">
                                Google Drive
                            </span>
                        </div>
                        <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                    </a>

                    <a
                        href={GOOGLE_DRIVE_FONTS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-lg border border-border bg-card/60 p-3.5 backdrop-blur-sm transition-all duration-300 hover:border-accent hover:bg-accent/10 active:scale-[0.98]"
                    >
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-foreground transition-colors group-hover:text-accent">
                                View Fonts
                            </span>
                            <span className="text-[8px] uppercase tracking-widest text-muted-foreground">
                                Google Drive
                            </span>
                        </div>
                        <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                    </a>
                </div>
            </div>

            {/* Gallery Lightbox Slider */}
            {activeGallery && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 backdrop-blur-md animate-in fade-in duration-300">
                    <div className="relative flex h-full w-full max-w-6xl flex-col items-center justify-between p-4 md:p-8">
                        {/* Close Button */}
                        <button
                            onClick={() => setActiveGallery(null)}
                            className="absolute right-4 top-4 z-20 rounded-full bg-white/5 p-3 backdrop-blur-md transition-all hover:bg-white/10 hover:rotate-90"
                        >
                            <X className="h-6 w-6 text-foreground" />
                        </button>

                        {/* Title & Download for active image */}
                        <div className="z-10 flex w-full items-center justify-between md:mb-4">
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">
                                    {activeGallery === 'branding' ? 'BRANDING ' : 'EDITORIAL '}
                                    {currentGallery[currentIndex]?.label}
                                </h3>
                                <p className="text-[10px] text-muted-foreground uppercase mt-1 tracking-tighter">
                                    {activeGallery === 'branding'
                                        ? 'Logo & Brand Assets 2026'
                                        : 'Photography Collection 2026'}
                                </p>
                            </div>
                            {currentGallery[currentIndex]?.downloadUrl?.startsWith('http') ? (
                                <a
                                    href={currentGallery[currentIndex].downloadUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-background transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
                                >
                                    <Download className="h-3 w-3" />
                                    Download HQ (Drive)
                                </a>
                            ) : (
                                <a
                                    href={`${currentGallery[currentIndex]?.downloadUrl || currentGallery[currentIndex]?.src}`}
                                    download
                                    className="flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-background transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
                                >
                                    <Download className="h-3 w-3" />
                                    Download HI-RES
                                </a>
                            )}
                        </div>

                        {/* Main Viewer Area */}
                        <div className="group/viewer relative flex h-full w-full flex-1 items-center justify-center overflow-hidden py-4 md:py-8">
                            {/* Navigation Arrows */}
                            <button
                                onClick={prevImage}
                                className="absolute left-0 z-20 -translate-x-full rounded-full bg-white/5 p-4 backdrop-blur-sm transition-all group-hover/viewer:translate-x-4 hover:bg-white/10"
                            >
                                <ChevronDown className="h-6 w-6 rotate-90 text-foreground" />
                            </button>

                            <button
                                onClick={nextImage}
                                className="absolute right-0 z-20 translate-x-full rounded-full bg-white/5 p-4 backdrop-blur-sm transition-all group-hover/viewer:-translate-x-4 hover:bg-white/10"
                            >
                                <ChevronDown className="h-6 w-6 -rotate-90 text-foreground" />
                            </button>

                            {/* Main Asset (Image) */}
                            <div className="relative h-full w-full max-w-3xl flex items-center justify-center animate-in zoom-in-95 duration-500">
                                {currentGallery[currentIndex]?.downloadUrl ? (
                                    <a
                                        href={currentGallery[currentIndex].downloadUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Open in Google Drive"
                                        className="relative h-full w-full flex items-center justify-center cursor-pointer group/zoom"
                                    >
                                        <Image
                                            src={currentGallery[currentIndex].src}
                                            alt={currentGallery[currentIndex].label}
                                            fill
                                            className={`${activeGallery === 'branding' ? 'object-contain p-12' : 'object-contain'} select-none transition-transform duration-300 group-hover/zoom:scale-105`}
                                            priority
                                        />
                                    </a>
                                ) : (
                                    <Image
                                        src={currentGallery[currentIndex]?.src}
                                        alt={currentGallery[currentIndex]?.label}
                                        fill
                                        className={`${activeGallery === 'branding' ? 'object-contain p-12' : 'object-contain'} select-none`}
                                        priority
                                    />
                                )}
                            </div>
                        </div>

                        {/* Thumbnail Strip */}
                        <div className="mt-4 flex w-full justify-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
                            {currentGallery.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded border-2 transition-all duration-300 ${currentIndex === idx ? 'border-accent scale-110 shadow-lg shadow-accent/20' : 'border-white/10 opacity-50 hover:opacity-100'}`}
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.label}
                                        fill
                                        className={`${activeGallery === 'branding' ? 'object-contain p-2' : 'object-cover'}`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-8 rounded border border-accent/20 bg-accent/5 p-4 flex gap-4 items-start">
                <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                    <p className="text-xs leading-relaxed text-muted-foreground italic">
                        Before publishing any event flyer, specific graphic requirements must be met and approved by me or my creative team.
                    </p>
                    <div className="mt-2 flex flex-col gap-1 border-t border-accent/10 pt-2">
                        <p className="text-[9px] uppercase tracking-widest text-muted-foreground/60 flex items-center gap-1.5">
                            <span className="text-[10px]">©</span> Galeneo Logotype & Brand Identity
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';

export function Biography() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [lang, setLang] = useState<'es' | 'en'>('es');

  return (
    <section className="border-t border-border px-4 py-12 max-w-5xl mx-auto">
      {/* Header con botón para alternar entre ES / EN */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            {lang === 'es' ? 'Biografía' : 'Biography'}
          </h2>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
            {lang === 'es' ? 'Trayectoria y Visión Artística' : 'The Journey & Artistic Vision'}
          </p>
        </div>

        {/* Botón de alternancia de idioma */}
        <button
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 hover:border-white/30 cursor-pointer"
          title="Cambiar idioma / Switch language"
        >
          <span className={lang === 'es' ? 'text-white' : 'text-white/40'}>ES</span>
          <span className="text-white/30">/</span>
          <span className={lang === 'en' ? 'text-white' : 'text-white/40'}>EN</span>
        </button>
      </div>

      <div className="relative">
        {/* Editorial Swiss/Brutalist Typography Style */}
        <div className="mb-6 select-none flex flex-col gap-6">
          {/* Bloque superior izquierdo */}
          <div className="max-w-[85%] text-left">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-foreground leading-[0.98]">
              {lang === 'es'
                ? 'DJ y productor colombiano. Marcando tendencia Techno desde 2014.'
                : 'Colombian DJ & Producer. Shaping Techno since 2014.'}
            </h3>
          </div>

          {/* Bloque medio derecho */}
          <div className="w-full flex justify-end">
            <div className="max-w-[85%] text-right">
              <p className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white/90 leading-[1.05]">
                {lang === 'es'
                  ? 'Sonidos contundentes con armonías progresivas en tarimas de Aruba, Argentina y España.'
                  : 'Driving beats with progressive harmonies across stages in Aruba, Argentina, and Spain.'}
              </p>
            </div>
          </div>
        </div>

        {/* Expanded content with full bio details */}
        {isExpanded ? (
          <div className="mt-8 animate-in fade-in duration-500 space-y-5">
            {/* Foto editorial alineada al texto */}
            <div className="float-right ml-4 mb-3 mt-1.5 w-[120px] sm:w-[160px] md:w-[190px]">
              <div className="relative aspect-[3/4] overflow-hidden shadow-2xl">
                <Image
                  src="/galeneo/fotos-hero/galeneo-hero1.webp"
                  alt="Galeneo Editorial"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Texto en blanco (text-white/90) al lado IZQUIERDO */}
            {lang === 'es' ? (
              <>
                <p className="text-sm leading-relaxed text-white/90 text-justify">
                  DJ y productor colombiano. Nacido en la ciudad de Medellín, tuvo sus inicios en el año 2014, marcando una tendencia alrededor del Techno, la cual ha evolucionado a través de los años, llevándolo a estar en tarimas a nivel internacional como Aruba, Argentina y España.
                </p>

                <p className="text-sm leading-relaxed text-white/90 text-justify">
                  Se caracteriza por sonidos contundentes, con armonías progresivas que hacen de un ambiente especial para los amantes de la buena música. A nivel nacional ha visitado diversos clubes en las ciudades de Bogotá, Cartagena y Cali, marcando una experiencia sin igual.
                </p>

                <p className="text-sm leading-relaxed text-white/90 text-justify">
                  Director del programa de música electrónica Feeling 1 y actualmente uno de los presentadores del programa Drop TV, conectado desde España. Ha tenido interacción con DJs internacionales por medio de programas como Drop TV y Feeling, y en ocasiones con artistas como Fernanda Martins, Lexlay, Anna Tur, The YellowHeads, Cristian Varela, entre otros.
                </p>

                <p className="text-sm leading-relaxed text-white/90 text-justify">
                  Actualmente se desempeña como profesor de la Academia enfocándose en el área mezcla para los cursos Social DJ y Club DJ.
                </p>
              </>
            ) : (
              <>
                <p className="text-sm leading-relaxed text-white/90 text-justify">
                  Colombian DJ and producer. Born in Medellín, he began his musical journey in 2014, shaping a distinct trend within Techno that has evolved over the years, leading him to international stages in Aruba, Argentina, and Spain.
                </p>

                <p className="text-sm leading-relaxed text-white/90 text-justify">
                  Characterized by driving, powerful beats with progressive harmonies, his sound creates a captivating atmosphere for electronic music aficionados. Nationally, he has performed across premier clubs in Bogotá, Cartagena, and Cali, delivering unforgettable dancefloor experiences.
                </p>

                <p className="text-sm leading-relaxed text-white/90 text-justify">
                  Director of the electronic music show Feeling 1 and currently one of the hosts of Drop TV, broadcasting from Spain. Through these platforms, he has engaged with renowned international DJs and shared moments with artists such as Fernanda Martins, Lexlay, Anna Tur, The YellowHeads, Cristian Varela, among others.
                </p>

                <p className="text-sm leading-relaxed text-white/90 text-justify">
                  He currently serves as an academy instructor, specializing in music mixing for both Social DJ and Club DJ courses.
                </p>
              </>
            )}

            <div className="pt-2 clear-both">
              <button
                onClick={() => setIsExpanded(false)}
                className="text-[10px] font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                — {lang === 'es' ? 'Ver Menos' : 'Show Less'}
              </button>
            </div>
          </div>
        ) : (
          /* Read More Button centrado */
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setIsExpanded(true)}
              className="rounded-full border border-border px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-foreground transition-all duration-200 hover:bg-muted hover:border-accent whitespace-nowrap cursor-pointer"
            >
              {lang === 'es' ? 'Ver Más' : 'Read Full Bio'}
            </button>
          </div>
        )}
        <div className="clear-both" />
      </div>
    </section>
  );
}

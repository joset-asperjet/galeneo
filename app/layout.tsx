import './globals.css'
import { Geist, Geist_Mono } from 'next/font/google'
import { Loader } from '@/components/loader'
import { AudioPlayerProvider } from '@/context/audio-player-context'
import { GlobalAudioPlayer } from '@/components/global-audio-player'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GALENEO | Digital Presskit 2026",
  description: "DJ y productor colombiano nacido en Medellín. Marcando tendencia en el Techno desde 2014 con sonidos contundentes y armonías progresivas que lo han llevado a escenarios internacionales en Aruba, Argentina y España.",
  openGraph: {
    type: "website",
    title: "GALENEO | Digital Presskit 2026",
    description: "DJ y productor colombiano nacido en Medellín. Marcando tendencia en el Techno desde 2014 con sonidos contundentes y armonías progresivas que lo han llevado a escenarios internacionales en Aruba, Argentina y España.",
    images: [
      {
        url: "/galeneo/open-graph-galeneo.jpg",
        width: 1200,
        height: 630,
        alt: "GALENEO - Digital Presskit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GALENEO | Digital Presskit 2026",
    description: "DJ y productor colombiano nacido en Medellín. Marcando tendencia en el Techno desde 2014 con sonidos contundentes y armonías progresivas que lo han llevado a escenarios internacionales en Aruba, Argentina y España.",
    images: ["/galeneo/open-graph-galeneo.jpg"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <AudioPlayerProvider>
          <Loader />
          {children}
          <GlobalAudioPlayer />
        </AudioPlayerProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleTagManager } from './components/GoogleTagManager'
import { JsonLd } from './components/JsonLd'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CookieBanner from './components/CookieBanner'
import ConsentInitializer from './components/ConsentInitializer'
import { ConsentProvider } from './hooks/useConsent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Formation IA pour Dirigeants - Jacques-Henri Marin | Lenouvion Consulting',
    template: '%s | Lenouvion Consulting'
  },
  description: 'Jacques-Henri Marin aide les dirigeants de PME à faire de l\'IA un levier de leadership, pas un projet IT. 30% de gains dès le premier mois. Formation certifiée Qualiopi.',
  keywords: [
    'formation IA dirigeants',
    'intelligence artificielle PME',
    'Jacques-Henri Marin',
    'Lenouvion Consulting',
    'formation IA leadership',
    'automatisation PME',
    'transformation digitale dirigeants',
    'Méthode VAI',
    'formation en ligne',
    'formation présentielle',
    'formation salariés',
    'formation indépendants',
    'formation dirigeants'
  ],
  authors: [{ name: 'Lenouvion Consulting' }],
  creator: 'Lenouvion Consulting',
  publisher: 'Lenouvion Consulting',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.lenouvion-consulting.fr/'),
  alternates: {
    canonical: 'https://www.lenouvion-consulting.fr/',
  },
  openGraph: {
    title: 'Lenouvion Consulting - Formations CPF pour professionnels',
    description: 'Organisme certifié Qualiopi, Lenouvion Consulting propose des formations finançables via le CPF : IA, communication, langues, community management.',
    url: 'https://www.lenouvion-consulting.fr/',
    siteName: 'Lenouvion Consulting',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/logos/formapro-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Lenouvion Consulting - Formations professionnelles CPF',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lenouvion Consulting - Formations CPF pour tous les professionnels',
    description: 'Découvrez nos formations professionnelles éligibles au CPF. Lenouvion Consulting est un organisme certifié Qualiopi spécialisé en IA, communication, langues et digital.',
    images: ['/images/logos/formapro-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/iceberg.png" type="image/png" />
        <link rel="apple-touch-icon" href="/iceberg.png" />
        <meta name="theme-color" content="#eb5e2d" />
        <meta name="description" content="Lenouvion Consulting est un organisme de formation certifié Qualiopi. Nos formations professionnelles, éligibles au CPF, couvrent l'IA, la communication, les langues et le digital." />
        <meta name="author" content="Lenouvion Consulting" />
        <meta name="keywords" content="organisme certifié Qualiopi, formation CPF, formation intelligence artificielle, formation communication, community management, langues professionnelles, CPF digital, formation pour salariés et dirigeants" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.lenouvion-consulting.fr/" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta property="og:title" content="Lenouvion Consulting - Formations CPF pour professionnels" />
        <meta property="og:description" content="Organisme de formation certifié Qualiopi, Lenouvion Consulting propose des formations éligibles CPF dans l'IA, la communication, les langues et les compétences digitales." />
        <meta property="og:url" content="https://www.lenouvion-consulting.fr/" />
        <meta property="og:image" content="/images/logos/formapro-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Lenouvion Consulting - Formations professionnelles CPF" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lenouvion Consulting - Organisme certifié Qualiopi" />
        <meta name="twitter:description" content="Lenouvion Consulting, organisme certifié Qualiopi, propose des formations 100 % CPF en IA, communication, digital et langues. Pour salariés, indépendants, dirigeants." />
        <meta name="twitter:image" content="/images/logos/formapro-og.jpg" />
        <JsonLd />
      </head>
      <body className={inter.className}>
        <ConsentProvider>
          <ConsentInitializer />
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <CookieBanner />
          <GoogleTagManager />
        </ConsentProvider>
      </body>
    </html>
  )
}

// Configuration SEO centralisée pour Lenouvion Consulting

export const SEO_CONFIG = {
  // Informations de base
  siteName: 'Lenouvion Consulting',
  siteUrl: 'https://test-accertif.lenouvion-consulting.fr',
  siteDescription: 'Formation IA pour Dirigeants - Jacques-Henri Marin aide les dirigeants de PME à faire de l\'IA un levier de leadership, pas un projet IT. 30% de gains dès le premier mois.',
  
  // Contact
  contactEmail: 'jacqueshenri.marin@lenouvion-consulting.fr',
  contactPhone: '07 78 25 10 94',
  address: '12 rue Chaigneau, 94210 Saint-Maur-des-Fossés',
  
  // Réseaux sociaux
  socialMedia: {
    linkedin: 'https://www.linkedin.com/company/lenouvion-consulting',
    facebook: 'https://www.facebook.com/lenouvionconsulting',
    twitter: 'https://twitter.com/lenouvionconsulting'
  },
  
  // Certification
  certification: {
    name: 'Certification Qualiopi',
    organization: 'France Compétences',
    url: 'https://irp.cdn-website.com/e0ab763a/files/uploaded/Certificat_Qualiopi_Sign%C3%A9_HD.pdf'
  },
  
  // Images par défaut
  defaultImages: {
    logo: '/logo.png',
    ogImage: '/logo.png',
    favicon: '/iceberg.png'
  },
  
  // Mots-clés principaux
  mainKeywords: [
    'formation IA dirigeants',
    'intelligence artificielle PME',
    'Jacques-Henri Marin',
    'Lenouvion Consulting',
    'formation IA leadership',
    'automatisation PME',
    'transformation digitale dirigeants'
  ],
  
  // Horaires d'ouverture
  businessHours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00'
  },
  
  // Évaluations (à mettre à jour avec de vraies données)
  ratings: {
    average: 4.8,
    count: 150,
    bestRating: 5,
    worstRating: 1
  }
}

// Fonction pour générer l'URL canonique
export function getCanonicalUrl(path: string = ''): string {
  return `${SEO_CONFIG.siteUrl}${path}`
}

// Fonction pour générer les métadonnées Open Graph
export function generateOpenGraphData(title: string, description: string, path: string = '', image?: string) {
  return {
    title,
    description,
    url: getCanonicalUrl(path),
    siteName: SEO_CONFIG.siteName,
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: image || SEO_CONFIG.defaultImages.ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  }
}

// Fonction pour générer les métadonnées Twitter
export function generateTwitterData(title: string, description: string, image?: string) {
  return {
    card: 'summary_large_image',
    title,
    description,
    images: [image || SEO_CONFIG.defaultImages.ogImage],
  }
} 
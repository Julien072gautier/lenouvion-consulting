import type { Metadata } from 'next'

interface SEOData {
  title: string
  description: string
  keywords: string[]
  canonical?: string
  ogImage?: string
  type?: 'website' | 'article'
  structuredData?: any
}

// Données des formations pour le SEO
export const formationData = {
  'acculturation-flash-ia': {
    name: 'Acculturation Flash: Comprendre l\'IA et ses impacts',
    shortDescription: 'Démystifier l\'IA (générative, agentique, automatisation) et montrer son potentiel concret pour les PME.',
    fullDescription: 'Formation d\'acculturation rapide de 3 heures pour démystifier l\'IA et comprendre son potentiel concret pour les PME. Décryptage des opportunités et menaces, témoignages concrets et atelier interactif pour identifier votre premier cas d\'usage IA. Prix : 900€ individuel, 180€ collectif.',
    keywords: ['acculturation IA', 'formation IA PME', 'démystifier IA', 'comprendre IA', 'cas d\'usage IA', 'formation courte IA'],
    duration: '3 heures',
    price: '900€',
    skills: ['Panorama des technologies IA', 'Décryptage opportunités/menaces', 'Témoignages PME & ETI', 'Atelier interactif'],
    image: '/acculturation.png',
    certification: 'Formation non-certifiante'
  },
  'ia-vente': {
    name: 'IA et Vente',
    shortDescription: 'Maîtrisez l\'utilisation de l\'IA pour optimiser votre processus commercial et augmenter vos performances de vente.',
    fullDescription: 'Formation professionnelle en Intelligence Artificielle appliquée à la vente en partenariat avec Formapro by Accertif. Optimisez votre processus commercial et augmentez vos performances. Formation éligible CPF.',
    keywords: ['IA vente', 'formation IA', 'intelligence artificielle', 'automatisation commerciale', 'processus de vente', 'Formapro by Accertif'],
    duration: '14 heures',
    price: '2 450€',
    skills: ['IA conversationnelle', 'Automatisation commerciale', 'Analyse prédictive', 'Outils IA avancés'],
    image: '/ia.png',
    certification: 'En partenariat avec Formapro by Accertif'
  },
  'vision-ia-strategie': {
    name: 'Vision IA : De la curiosité à la stratégie',
    shortDescription: 'Clarifiez votre vision IA et alignez-la avec votre stratégie d\'entreprise. Cartographiez les enjeux sectoriels et identifiez les quick wins stratégiques.',
    fullDescription: 'Atelier stratégique en présentiel pour dirigeants souhaitant clarifier leur vision IA et l\'aligner avec leur stratégie d\'entreprise. Cartographie des enjeux sectoriels, définition de la vision IA et identification des priorités stratégiques.',
    keywords: ['vision IA', 'stratégie IA', 'atelier dirigeants', 'quick wins IA', 'transformation digitale dirigeants'],
    duration: '7 heures',
    price: '1 900€',
    skills: ['Cartographie des enjeux sectoriels', 'Définition de la vision IA', 'Identification des priorités stratégiques', 'Construction du discours dirigeant'],
    image: '/vision.png',
    certification: 'Formation non-certifiante'
  },
  'activation-ia-vision-action': {
    name: 'Activation de l\'IA : Passer de la vision à l\'action',
    shortDescription: 'Initiez les premiers déploiements d\'outils IA, réinventez des processus métier clés et formez vos équipes dirigeantes pour créer un réseau de champions IA.',
    fullDescription: 'Atelier pratique de 2 jours pour initier les premiers déploiements d\'outils IA générative, réinventer des processus métier clés avec l\'IA, former les équipes dirigeantes et créer un réseau de champions IA avec un plan de montée en compétences.',
    keywords: ['activation IA', 'déploiement IA', 'processus métier IA', 'champions IA', 'transformation IA dirigeants', 'outils IA générative'],
    duration: '14 heures',
    price: '3 600€',
    skills: ['Déploiement d\'outils IA générative', 'Réinvention de processus métier', 'Formation des équipes dirigeantes', 'Création du réseau de champions IA'],
    image: '/activation.png',
    certification: 'Formation non-certifiante'
  },
  'innovation-ia-offres-modeles': {
    name: 'Innovation Propulsée par l\'IA : Créer de nouvelles offres et modèles',
    shortDescription: 'Explorer comment l\'IA transforme la proposition de valeur client. Générer de nouvelles sources de revenus. Structurer un portefeuille de cas d\'usage innovants. Introduire la gouvernance IA responsable.',
    fullDescription: 'Atelier Design Thinking IA pour créer de nouveaux services et produits. Explorez comment l\'IA transforme la proposition de valeur client, générez de nouvelles sources de revenus, structurez un portefeuille de cas d\'usage innovants et introduisez la gouvernance IA responsable.',
    keywords: ['innovation IA', 'design thinking IA', 'nouvelles offres IA', 'gouvernance IA', 'cas d\'usage IA', 'business model IA'],
    duration: '14 heures',
    price: '3 900€',
    skills: ['Atelier Design Thinking IA', 'Études de cas sectoriels', 'Structuration du portefeuille de cas d\'usage', 'Gouvernance IA responsable'],
    image: '/innovation.png',
    certification: 'Formation non-certifiante'
  }
}

export function generateFormationSEO(formationSlug: string): SEOData {
  const formation = formationData[formationSlug as keyof typeof formationData]
  
  if (!formation) {
    return {
      title: 'Formation | Lenouvion Consulting',
      description: 'Formation professionnelle certifiée Qualiopi éligible CPF.',
      keywords: ['formation professionnelle', 'CPF', 'Qualiopi'],
      canonical: `/formation/${formationSlug}`,
      type: 'article'
    }
  }

  return {
    title: `Formation ${formation.name} | Lenouvion Consulting`,
    description: `Formation professionnelle ${formation.name} certifiée Qualiopi. ${formation.shortDescription} Éligible CPF. Inscrivez-vous dès maintenant.`,
    keywords: [
      `formation ${formation.name.toLowerCase()}`,
      'formation professionnelle',
      'CPF',
      'Qualiopi',
      'certification',
      ...formation.keywords
    ],
    canonical: `/formation/${formationSlug}`,
    ogImage: formation.image,
    type: 'article',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": `Formation ${formation.name}`,
      "description": formation.fullDescription,
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Lenouvion Consulting",
        "url": "https://lenouvion-consulting.fr"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": ["blended", "online", "offline"],
        "courseWorkload": formation.duration,
        "instructor": {
          "@type": "Person",
          "name": "Équipe Lenouvion Consulting"
        }
      },
      "offers": {
        "@type": "Offer",
        "price": formation.price,
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "url": `https://lenouvion-consulting.fr/formation/${formationSlug}`
      },
      "educationalCredentialAwarded": formation.certification,
      "teaches": formation.skills,
      "image": formation.image,
      "url": `https://lenouvion-consulting.fr/formation/${formationSlug}`
    }
  }
}

export function generatePageSEO(pageType: string, customData?: any): SEOData {
  const baseSEO = {
    website: {
      title: 'Lenouvion Consulting - Formations IA pour Dirigeants | Certifiées Qualiopi',
      description: 'Lenouvion Consulting propose des formations professionnelles en Intelligence Artificielle pour dirigeants PME/ETI. Acculturation, vision stratégique, activation et innovation IA. Formations éligibles CPF.',
      keywords: ['formation IA dirigeants', 'intelligence artificielle PME', 'acculturation IA', 'stratégie IA', 'activation IA', 'innovation IA', 'CPF', 'Qualiopi']
    },
    formations: {
      title: 'Formations IA pour Dirigeants | Lenouvion Consulting',
      description: 'Découvrez nos formations en Intelligence Artificielle pour dirigeants : acculturation flash, vision stratégique, activation et innovation IA. Formations éligibles CPF.',
      keywords: ['formations IA dirigeants', 'catalogue formations IA', 'acculturation IA', 'vision IA', 'activation IA', 'innovation IA', 'CPF', 'Qualiopi']
    },
    contact: {
      title: 'Contactez-nous | Lenouvion Consulting',
      description: 'Contactez Lenouvion Consulting pour plus d\'informations sur nos formations IA pour dirigeants. Notre équipe vous accompagne dans votre projet de transformation IA.',
      keywords: ['contact Lenouvion Consulting', 'information formation IA', 'conseiller formation IA', 'accompagnement dirigeants']
    },
    about: {
      title: 'À Propos de Lenouvion Consulting | Expert IA pour Dirigeants',
      description: 'Lenouvion Consulting est un organisme de formation certifié Qualiopi spécialisé dans l\'accompagnement des dirigeants PME/ETI dans leur transformation IA. Découvrez notre expertise et notre approche.',
      keywords: ['Lenouvion Consulting', 'expert IA dirigeants', 'transformation IA PME', 'Qualiopi', 'à propos', 'Jacques-Henri Marin']
    }
  }

  return baseSEO[pageType as keyof typeof baseSEO] || baseSEO.website
}

export function generateBreadcrumbStructuredData(breadcrumbs: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://lenouvion-consulting.fr${item.url}`
    }))
  }
}

export function generateAllFormationsMetadata() {
  const formations = Object.keys(formationData)
  const metadata: Record<string, Metadata> = {}
  
  formations.forEach(slug => {
    const seoData = generateFormationSEO(slug)
    const formation = formationData[slug as keyof typeof formationData]
    
    metadata[slug] = {
      title: seoData.title,
      description: seoData.description,
      keywords: seoData.keywords,
      openGraph: {
        title: seoData.title,
        description: seoData.description,
        url: `https://lenouvion-consulting.fr/formation/${slug}`,
        type: 'article',
        images: [
          {
            url: seoData.ogImage || `/images/formations/${slug}-og.jpg`,
            width: 1200,
            height: 630,
            alt: `Formation ${formation?.name} - Lenouvion Consulting`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: seoData.title,
        description: seoData.description,
        images: [seoData.ogImage || `/images/formations/${slug}-og.jpg`],
      },
      alternates: {
        canonical: `https://lenouvion-consulting.fr/formation/${slug}`,
      },
    }
  })
  
  return metadata
}

// Fonction pour obtenir les métadonnées d'une formation spécifique
export function getFormationMetadata(slug: string): Metadata {
  const seoData = generateFormationSEO(slug)
  const formation = formationData[slug as keyof typeof formationData]
  
  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      url: `https://lenouvion-consulting.fr/formation/${slug}`,
      type: 'article',
      images: [
        {
          url: seoData.ogImage || `/images/formations/${slug}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `Formation ${formation?.name} - Lenouvion Consulting`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoData.title,
      description: seoData.description,
      images: [seoData.ogImage || `/images/formations/${slug}-og.jpg`],
    },
    alternates: {
      canonical: `https://lenouvion-consulting.fr/formation/${slug}`,
    },
  }
}

import { formationData } from '../lib/seo'

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Lenouvion Consulting",
    "alternateName": ["Lenouvion", "Nouvion Consulting"],
    "description": "Organisme de formation professionnelle certifié Qualiopi spécialisé dans les formations certifiantes sur-mesure. Formations éligibles CPF en intelligence artificielle, langues étrangères, communication et community management.",
    "url": "https://www.lenouvion-consulting.fr",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.lenouvion-consulting.fr/images/logos/lenouvion-logo.png",
      "width": 120,
      "height": 40
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33-7-78-25-10-94",
      "email": "jacqueshenri.marin@lenouvion-consulting.fr",
      "contactType": "Customer Service",
      "availableLanguage": ["French"],
      "areaServed": "FR",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 rue Chaigneau",
      "postalCode": "94210",
      "addressLocality": "saint-maur-des-fossés",
      "addressCountry": "FR"
    },
    "sameAs": [
      "https://www.linkedin.com/company/lenouvion-consulting",
      "https://www.facebook.com/lenouvionconsulting",
      "https://twitter.com/lenouvionconsulting"
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "Certification Qualiopi",
      "credentialCategory": "Certification qualité",
      "recognizedBy": {
        "@type": "Organization",
        "name": "France Compétences"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "serviceType": "Formation professionnelle",
    "offers": [
      {
        "@type": "Course",
        "name": "Formation IA et Vente",
        "description": "Formation professionnelle en intelligence artificielle appliquée à la vente et au marketing",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Lenouvion Consulting"
        },
        "educationalLevel": "Formation professionnelle",
        "teaches": ["Intelligence artificielle", "Vente", "Marketing digital"]
      },
      {
        "@type": "Course",
        "name": "Formation Communication et Prise de Parole",
        "description": "Formation professionnelle en communication et techniques de prise de parole en public",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Lenouvion Consulting"
        },
        "educationalLevel": "Formation professionnelle",
        "teaches": ["Communication", "Prise de parole", "Présentation"]
      },
      {
        "@type": "Course",
        "name": "Formation Community Management",
        "description": "Formation professionnelle en gestion de communautés et réseaux sociaux",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Lenouvion Consulting"
        },
        "educationalLevel": "Formation professionnelle",
        "teaches": ["Community Management", "Réseaux sociaux", "Marketing digital"]
      },
      {
        "@type": "Course",
        "name": "Formation Anglais Professionnel",
        "description": "Formation en anglais professionnel pour améliorer ses compétences linguistiques en entreprise",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Lenouvion Consulting"
        },
        "educationalLevel": "Formation professionnelle",
        "teaches": ["Anglais professionnel", "Communication internationale"]
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function FormationJsonLd({ formationSlug }: { formationSlug: string }) {
  const formation = formationData[formationSlug as keyof typeof formationData]
  
  if (!formation) {
    return null
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": `Formation ${formation.name}`,
    "description": formation.fullDescription,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Lenouvion Consulting",
      "url": "https://www.lenouvion-consulting.fr"
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
      "url": `https://www.lenouvion-consulting.fr/formation/${formationSlug}`
    },
    "educationalCredentialAwarded": formation.certification,
    "teaches": formation.skills,
    "image": formation.image,
    "url": `https://www.lenouvion-consulting.fr/formation/${formationSlug}`
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

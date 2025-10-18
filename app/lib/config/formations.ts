import { Formation, Category } from './types';

const formationsConfig = {
  categories: [
    {
      id: 'Intelligence Artificielle',
      name: 'Intelligence Artificielle',
      description: 'Intelligence Artificielle',
      icon: 'Brain'
    }
  ] as Category[],
  
  formations: [
    {
      id: 'vision-ia-strategie',
      title: 'Vision IA : De la curiosité à la stratégie',
      shortDescription: 'Clarifiez votre vision IA et alignez-la avec votre stratégie d\'entreprise. Cartographiez les enjeux sectoriels et identifiez les quick wins stratégiques.',
      fullDescription: 'Atelier stratégique en présentiel pour dirigeants souhaitant clarifier leur vision IA et l\'aligner avec leur stratégie d\'entreprise. Cartographie des enjeux sectoriels, définition de la vision IA et identification des priorités stratégiques.',
      slug: 'formation-vision-ia-strategie',
      category: 'Intelligence Artificielle',
      image: '/ia.png',
      duration: '7 heures',
      formateur: '',
      formationType: 'non-certifiante',
      prices: {
        individuel: { price: '1 900€', label: '' },
        collectif: { price: '750€', label: '' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: false,
      features: [
        'Cartographie des enjeux sectoriels',
        'Définition de la vision IA',
        'Identification des priorités stratégiques',
        'Construction du discours dirigeant'
      ],
      objectives: [
        "Clarifier la vision IA du dirigeant et l'aligner avec la stratégie d'entreprise",
        "Cartographier les enjeux sectoriels et définir le rôle de l'IA dans l'organisation",
        "Identifier les quick wins stratégiques",
        "Construire un discours dirigeant pour mobiliser les équipes"
      ],
      program: [
        {
          title: "Module 1 : Cartographie des enjeux sectoriels",
          items: [
            "Analyse du contexte sectoriel",
            "Identification des opportunités IA",
            "Benchmark concurrentiel"
          ]
        },
        {
          title: "Module 2 : Définition de la vision IA",
          items: [
            "Clarification de la vision dirigeant",
            "Alignement avec la stratégie d'entreprise",
            "Définition du rôle de l'IA dans l'organisation"
          ]
        },
        {
          title: "Module 3 : Identification des priorités stratégiques",
          items: [
            "Identification des quick wins",
            "Priorisation des projets IA",
            "Construction de la feuille de route"
          ]
        },
        {
          title: "Module 4 : Construction du discours dirigeant",
          items: [
            "Élaboration du discours de mobilisation",
            "Personnalisation du message",
            "Préparation à la communication interne"
          ]
        }
      ],
      publicVise: [
        "Dirigeants, COMEX, Directeurs Généraux",
        "Cadres dirigeants souhaitant développer une vision IA stratégique"
      ],
      prerequis: [
        "Expérience en management et direction",
        "Intérêt pour l'intelligence artificielle"
      ],
      teachingMethods: [
        "Atelier stratégique en présentiel",
        "Travaux pratiques et mises en situation",
        "Échanges et partage d'expériences",
        "Accompagnement personnalisé"
      ],
      evaluationMethods: [
        "Participation active aux ateliers",
        "Production de livrables stratégiques",
        "Attestation de présence"
      ],
      accessibility: [
        "Formation accessible sous 15 jours après inscription.",
        "Adaptation des conditions d'examen aux personnes en situation de handicap",
        "Le référent handicap prendra en compte dès l'inscription du candidat sa situation de handicap, si celle-ci est mentionnée. Il sera alors proposé au candidat un entretien afin d'envisager avec lui les aménagements qui pourront être apportés."
      ],
      reasons: [
        {
          title: 'Vision IA claire et alignée',
          description: 'Définissez une vision IA cohérente avec votre stratégie d\'entreprise',
          icon: 'Target'
        },
        {
          title: 'Quick wins identifiés',
          description: 'Identifiez les opportunités IA à fort impact et rapide mise en œuvre',
          icon: 'Zap'
        },
        {
          title: 'Discours de mobilisation structuré',
          description: 'Construisez un discours dirigeant pour mobiliser vos équipes autour de l\'IA',
          icon: 'MessageSquare'
        },
        {
          title: 'Feuille de route stratégique',
          description: 'Initiez votre feuille de route IA avec des priorités claires',
          icon: 'Map'
        }
      ],
      icon: 'Brain'
    },
    {
      id: 'activation-ia-vision-action',
      title: 'Activation de l\'IA : Passer de la vision à l\'action',
      shortDescription: 'Initiez les premiers déploiements d\'outils IA, réinventez des processus métier clés et formez vos équipes dirigeantes pour créer un réseau de champions IA.',
      fullDescription: 'Atelier pratique de 2 jours pour initier les premiers déploiements d\'outils IA générative, réinventer des processus métier clés avec l\'IA, former les équipes dirigeantes et créer un réseau de champions IA avec un plan de montée en compétences.',
      slug: 'formation-activation-ia-vision-action',
      category: 'Intelligence Artificielle',
      image: '/ia.png',
      duration: '14 heures',
      formateur: '',
      formationType: 'non-certifiante',
      prices: {
        individuel: { price: '3 600€', label: '' },
        collectif: { price: '1 400€', label: '' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: false,
      features: [
        'Déploiement d\'outils IA générative',
        'Réinvention de processus métier',
        'Formation des équipes dirigeantes',
        'Création du réseau de champions IA'
      ],
      objectives: [
        "Initier les premiers déploiements d'outils IA générative (email, réunions, reporting)",
        "Réinventer un processus métier clé avec l'IA",
        "Former les équipes dirigeantes aux enjeux et usages de l'IA",
        "Créer un réseau de champions IA dans l'organisation",
        "Définir le plan de montée en compétences IA"
      ],
      program: [
        {
          title: "Module 1 : Déploiement d'outils IA générative",
          items: [
            "Déploiement d'outils IA pour l'email et la communication",
            "Automatisation des réunions et du reporting",
            "Intégration dans les processus quotidiens",
            "Formation aux outils sélectionnés"
          ]
        },
        {
          title: "Module 2 : Réinvention d'un processus métier",
          items: [
            "Identification d'un processus clé à transformer",
            "Cartographie du processus actuel",
            "Redesign avec intégration IA",
            "Plan de déploiement et de formation"
          ]
        },
        {
          title: "Module 3 : Formation des équipes dirigeantes",
          items: [
            "Sensibilisation aux enjeux IA",
            "Formation aux usages pratiques",
            "Gestion du changement et de l'adoption",
            "Mesure de l'impact et du ROI"
          ]
        },
        {
          title: "Module 4 : Réseau de champions IA",
          items: [
            "Identification des futurs champions IA",
            "Formation et accompagnement des champions",
            "Création de la charte des champions IA",
            "Plan de montée en compétences global"
          ]
        }
      ],
      publicVise: [
        "COMEX et équipes dirigeantes",
        "Directeurs métiers et responsables opérationnels",
        "Dirigeants souhaitant activer concrètement l'IA dans leur organisation"
      ],
      prerequis: [
        "Expérience en management et direction",
        "Vision stratégique de l'IA dans l'entreprise",
        "Motivation à transformer les processus métier"
      ],
      teachingMethods: [
        "Atelier pratique sur 2 jours",
        "Déploiement d'outils IA en temps réel",
        "Travaux pratiques sur processus métier",
        "Formation-action avec livrables concrets"
      ],
      evaluationMethods: [
        "Déploiement effectif d'outils IA",
        "Processus métier redessiné et documenté",
        "Équipes formées et mobilisées",
        "Réseau de champions IA constitué",
        "Plan d'accompagnement au changement validé"
      ],
      accessibility: [
        "Formation accessible sous 15 jours après inscription.",
        "Adaptation des conditions d'examen aux personnes en situation de handicap",
        "Le référent handicap prendra en compte dès l'inscription du candidat sa situation de handicap, si celle-ci est mentionnée. Il sera alors proposé au candidat un entretien afin d'envisager avec lui les aménagements qui pourront être apportés."
      ],
      reasons: [
        {
          title: 'Déploiement concret',
          description: 'Passez de la vision à l\'action avec des outils IA déployés dès la formation',
          icon: 'Zap'
        },
        {
          title: 'Processus transformé',
          description: 'Réinventez un processus métier clé avec l\'IA pour un impact immédiat',
          icon: 'RefreshCw'
        },
        {
          title: 'Équipes mobilisées',
          description: 'Formez et mobilisez vos équipes dirigeantes autour de l\'IA',
          icon: 'Users'
        },
        {
          title: 'Champions IA identifiés',
          description: 'Créez un réseau de champions IA pour pérenniser la transformation',
          icon: 'Award'
        }
      ],
      icon: 'Brain'
    },
    {
      id: 'innovation-ia-offres-modeles',
      title: 'Innovation Propulsée par l\'IA : Créer de nouvelles offres et modèles',
      shortDescription: 'Explorer comment l\'IA transforme la proposition de valeur client. Générer de nouvelles sources de revenus. Structurer un portefeuille de cas d\'usage innovants. Introduire la gouvernance IA responsable.',
      fullDescription: 'Atelier Design Thinking IA pour créer de nouveaux services et produits. Explorez comment l\'IA transforme la proposition de valeur client, générez de nouvelles sources de revenus, structurez un portefeuille de cas d\'usage innovants et introduisez la gouvernance IA responsable.',
      slug: 'formation-innovation-ia-offres-modeles',
      category: 'Intelligence Artificielle',
      image: '/ia.png',
      duration: '14 heures',
      formateur: '',
      formationType: 'non-certifiante',
      prices: {
        individuel: { price: '3 900€', label: '' },
        collectif: { price: '1 600€', label: '' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: false,
      features: [
        'Atelier Design Thinking IA',
        'Études de cas sectoriels',
        'Structuration du portefeuille de cas d\'usage',
        'Gouvernance IA responsable'
      ],
      objectives: [
        "Explorer comment l'IA transforme la proposition de valeur client",
        "Générer de nouvelles sources de revenus grâce à l'IA",
        "Structurer un portefeuille de cas d'usage innovants",
        "Introduire la gouvernance IA responsable (sécurité, éthique, conformité)"
      ],
      program: [
        {
          title: "Module 1 : Atelier Design Thinking IA pour nouveaux services/produits",
          items: [
            "Méthodologie Design Thinking appliquée à l'IA",
            "Identification des opportunités d'innovation",
            "Création de concepts de nouveaux produits/services IA",
            "Prototypage rapide de solutions IA"
          ]
        },
        {
          title: "Module 2 : Études de cas sectoriels",
          items: [
            "Analyse de cas d'usage IA par secteur d'activité",
            "Benchmark des innovations IA réussies",
            "Identification des tendances émergentes",
            "Adaptation des modèles à votre secteur"
          ]
        },
        {
          title: "Module 3 : Structuration du portefeuille de cas d'usage",
          items: [
            "Cartographie des cas d'usage potentiels",
            "Priorisation selon l'impact et la faisabilité",
            "Construction du business case pour chaque cas",
            "Planification de la mise en œuvre"
          ]
        },
        {
          title: "Module 4 : Introduction à la gouvernance IA responsable",
          items: [
            "Enjeux de sécurité et de confidentialité",
            "Éthique de l'IA et conformité réglementaire",
            "Mise en place d'un cadre de gouvernance",
            "Monitoring et évaluation des risques IA"
          ]
        }
      ],
      publicVise: [
        "Dirigeants et directions générales",
        "Directions Innovation et R&D",
        "Directions Marketing et Produit",
        "Responsables de la transformation digitale"
      ],
      prerequis: [
        "Expérience en management et direction",
        "Connaissance des enjeux de l'innovation",
        "Intérêt pour l'intelligence artificielle et ses applications business"
      ],
      teachingMethods: [
        "Atelier Design Thinking en présentiel",
        "Accompagnement distanciel personnalisé",
        "Études de cas interactives",
        "Travaux pratiques sur projets réels"
      ],
      evaluationMethods: [
        "Concepts de nouveaux produits/services IA priorisés",
        "Portefeuille de cas d'usage structuré",
        "Études de cas sectoriels réalisées",
        "Guide de gouvernance IA responsable élaboré",
        "Business cases préliminaires validés"
      ],
      accessibility: [
        "Formation accessible sous 15 jours après inscription.",
        "Adaptation des conditions d'examen aux personnes en situation de handicap",
        "Le référent handicap prendra en compte dès l'inscription du candidat sa situation de handicap, si celle-ci est mentionnée. Il sera alors proposé au candidat un entretien afin d'envisager avec lui les aménagements qui pourront être apportés."
      ],
      reasons: [
        {
          title: 'Nouvelles offres IA-driven',
          description: 'Identifiez et développez de nouvelles offres propulsées par l\'IA',
          icon: 'Lightbulb'
        },
        {
          title: 'Sources de revenus explorées',
          description: 'Générez de nouvelles sources de revenus grâce aux innovations IA',
          icon: 'TrendingUp'
        },
        {
          title: 'Portefeuille de cas d\'usage',
          description: 'Structurez un portefeuille de cas d\'usage innovants et priorisés',
          icon: 'Briefcase'
        },
        {
          title: 'Gouvernance IA responsable',
          description: 'Mettez en place les bases d\'une gouvernance IA éthique et conforme',
          icon: 'Shield'
        }
      ],
      icon: 'Brain'
    },
    {
      id: 'ia-vente',
      title: 'Intégrer l\'IA conversationnelle dans le cycle de vente',
      shortDescription: 'Maîtrisez l\'utilisation de l\'IA pour optimiser votre processus commercial et augmenter vos performances de vente dans un contexte professionnel.',
      fullDescription: 'Maîtrisez l\'utilisation de l\'IA pour optimiser votre processus commercial et augmenter vos performances de vente.',
      slug: 'formation-ia-vente',
      category: 'Intelligence Artificielle',
      image: '/ia.png',
      duration: '14 heures',
      formateur: '',
      formationType: 'partenariat',
      prices: {
        individuel: { price: '1 950€*', label: 'Éligible CPF' },
        collectif: { price: '1 250€*', label: 'Éligible CPF' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: true,
      features: [
        'IA conversationnelle',
        'Automatisation commerciale',
        'Analyse prédictive',
        'Outils IA avancés'
      ],
      objectives: [
        "Comprendre les enjeux de l'IA dans le processus commercial",
        "Maîtriser les outils d'IA conversationnelle",
        "Automatiser certaines étapes du cycle de vente",
        "Analyser et optimiser les performances commerciales avec l'IA"
      ],
      program: [
        {
          title: "Module 1 : Fondamentaux de l'IA commerciale",
          items: [
            "Introduction à l'IA dans le commerce",
            "Types d'IA et leurs applications",
            "Enjeux et opportunités pour les commerciaux"
          ]
        },
        {
          title: "Module 2 : IA conversationnelle",
          items: [
            "Chatbots et assistants virtuels",
            "Personnalisation des interactions",
            "Intégration dans le processus de vente"
          ]
        },
        {
          title: "Module 3 : Automatisation commerciale",
          items: [
            "Automatisation des tâches répétitives",
            "Qualification automatique des leads",
            "Suivi et relance automatisés"
          ]
        },
        {
          title: "Module 4 : Analyse et optimisation",
          items: [
            "Métriques IA et KPIs commerciaux",
            "Analyse prédictive des ventes",
            "Optimisation continue avec l'IA"
          ]
        }
      ],
      publicVise: [
        "Commerciaux et responsables de vente",
        "Chefs d'entreprise souhaitant optimiser leur processus commercial",
        "Professionnels du marketing et de la relation client"
      ],
      prerequis: [
        "Expérience en vente ou en marketing",
        "Connaissances de base en outils numériques"
      ],
      teachingMethods: [
        "Formation pratique avec outils réels",
        "Ateliers de mise en situation",
        "Études de cas d'entreprises",
        "Accompagnement personnalisé"
      ],
      evaluationMethods: [
        "Évaluation continue des acquis",
        "Projet pratique d'intégration IA",
        "Présentation de la stratégie développée",
        "Certificat de réalisation"
      ],
      accessibility: [
        "Formation accessible sous 15 jours après inscription.",
        "Adaptation des conditions d'examen aux personnes en situation de handicap",
        "Le référent handicap prendra en compte dès l'inscription du candidat sa situation de handicap, si celle-ci est mentionnée. Il sera alors proposé au candidat un entretien afin d'envisager avec lui les aménagements qui pourront être apportés."
      ],
      certificationDetails: {
        name: 'IA et Vente',
        code: 'RS6519',
        organization: 'Lenouvion Consulting',
        organizationUrl: 'https://www.lenouvion-consulting.fr',
        partenaire: 'Formapro by Accertif',
        partenaireUrl: 'https://www.formaprobyaccertif.fr',
        partenaireLogo: '/formapro.png',
        description: 'Formation en partenariat avec Formapro by Accertif en Intelligence Artificielle appliquée à la vente',
        dureeEnregistrement: '3',
        dateEnregistrement: '2024-01-01',
        examDetails: {
          format: [
            'Projet pratique d\'intégration IA',
            'Présentation de stratégie',
            'Évaluation continue des acquis'
          ],
          successRate: '90%'
        }
      },
      reasons: [
        {
          title: 'Gain de temps stratégique',
          description: 'Automatisez certaines tâches et optimisez le cycle de vente avec l\'IA',
          icon: 'Users'
        },
        {
          title: 'Décisions basées sur les données',
          description: 'Analysez les performances et ajustez vos stratégies grâce aux indicateurs pertinents',
          icon: 'Target'
        },
        {
          title: 'Expérience client améliorée',
          description: 'Personnalisez l\'interaction avec vos prospects et clients grâce à l\'IA',
          icon: 'Heart'
        },
        {
          title: 'Compétitivité renforcée',
          description: 'Restez à la pointe de l\'innovation commerciale et devancez vos concurrents',
          icon: 'TrendingUp'
        }
      ],
      icon: 'Brain'
    }
      
  ] as Formation[]
};

export default formationsConfig;
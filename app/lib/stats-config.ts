// Configuration centralisée des statistiques Lenouvion Consulting
export const STATS_CONFIG = {
  // Statistiques principales
  apprenantsFormes: 50,
  satisfaction: 4.72,
  nouvellesCompetences: 30,
  financement: 100,
  recommandation: 100,
  expertiseFormateurs: 98,
  
  // Métadonnées
  apprenantsFormesLabel: "dirigeants formés",
  nouvellesCompetencesLabel: "de gains dès le 1er mois",
  financementLabel: "finançable",
  recommandationLabel: "recommandent nos formations",
  expertiseFormateursLabel: "soulignent l'expertise des formateurs",
  
  // Animation
  animationDuration: 2000, // 2 secondes
  animationInterval: 20, // Mise à jour toutes les 20ms
  
  // Groupes de statistiques pour différents affichages
  hero: {
    apprenantsFormes: 50,
    nouvellesCompetences: 30, // Hero affiche "de gains dès le 1er mois"
    financement: 100,
    labels: {
      apprenantsFormes: "dirigeants formés",
      nouvellesCompetences: "de gains dès le 1er mois", 
      financement: "finançable"
    }
  },
  
  bottom: {
    apprenantsFormes: 50,
    nouvellesCompetences: 30, // Bottom affiche aussi "de gains dès le 1er mois"
    recommandation: 100,
    expertiseFormateurs: 4.72,
    labels: {
      apprenantsFormes: "dirigeants formés",
      nouvellesCompetences: "de gains dès le 1er mois",
      recommandation: "recommandent nos formations",
      expertiseFormateurs: "/5 de satisfaction"
    }
  }
};

// Fonction utilitaire pour obtenir les statistiques
export const getStats = () => STATS_CONFIG;

// Fonction pour mettre à jour les statistiques (pour usage futur)
export const updateStats = (newStats: Partial<typeof STATS_CONFIG>) => {
  Object.assign(STATS_CONFIG, newStats);
};

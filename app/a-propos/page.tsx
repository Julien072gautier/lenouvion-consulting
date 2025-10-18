'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Check, ArrowRight, Star, Target } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section - Enhanced with gradient and animation */}
        <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">Formation IA pour Dirigeants</h1>
          <p className="text-xl text-gray-600 mb-4">
            Avec 20 ans de direction commerciale et 6 ans d'IA, je traduis la tech en résultats business.
          </p>
         
        </div>

        {/* Vision & Mission - Redesigned with cards */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="bg-brand-100 p-3 rounded-full mr-4">
                  <Target className="text-brand" size={24} />
                </div>
                <h2 className="text-2xl font-bold">Ma Vision</h2>
              </div>
              <div className="bg-brand-50 text-brand-800 text-lg font-medium px-4 py-3 rounded-md mb-4">
                "L'IA comme levier de leadership, pas un projet IT."
              </div>
              <p className="text-gray-600">
                Nous croyons que l'IA doit être un outil de leadership qui transforme les dirigeants en leaders de l'innovation, sans jargon technique, avec des résultats business mesurables.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="bg-brand-100 p-3 rounded-full mr-4">
                  <Star className="text-brand" size={24} />
                </div>
                <h2 className="text-2xl font-bold">Ma Mission</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Démocratiser l'IA auprès des dirigeants de PME avec une approche pragmatique</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Garantir l'acquisition de compétences certifiées et valorisables</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Assurer un accompagnement personnalisé tout au long du parcours</span>
                </li>
              </ul>
            </div>
          </div>
        </section>


        {/* Jacques-Henri Marin - Profil du fondateur */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Jacques-Henri Marin</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">CEO LENOUVION Consulting | Formateur IA pour Dirigeants</h3>
              <p className="text-gray-600 mb-4">
                Ex-Directeur Commercial (UiPath, Oracle, Accenture) avec 20+ ans d'expérience en management commercial et création d'équipes performantes. Depuis 2018, je me spécialise dans l'Intelligence Artificielle et l'automatisation pour démocratiser ces technologies auprès des dirigeants de PME.
              </p>
              <p className="text-gray-600 mb-4">
                Formateur certifié (RS6519) & Qualiopi (CAP2006)-11/09/2025, j'ai développé la <strong>Méthode VAI</strong> qui transforme l'IA en levier de leadership plutôt qu'en projet IT.
              </p>
              <p className="text-gray-600 mb-4">
                Ma triple compétence (pédagogie, expertise technique IA complète, management commercial) me permet d'accompagner les entreprises de 50 à 500 salariés dans leur transformation IA avec une approche pragmatique, centrée sur l'humain et les résultats business mesurables.
              </p>
              <div className="bg-brand-50 p-4 rounded-lg">
                <p className="text-brand-800 font-semibold">
                  +50 dirigeants formés • 4,72/5 de satisfaction • ROI visible en 3 mois
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="h-96 rounded-lg overflow-hidden">
                <Image 
                  src="/jhm.png" 
                  alt="Jacques-Henri Marin" 
                  width={400}
                  height={384}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Certifications & Accreditations - Enhanced with images */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Mes Garanties de Qualité</h2>
          
            <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center transform transition-transform hover:scale-105">
              <div className="bg-white p-3 rounded-lg mb-4 flex items-center justify-center h-40">
                <Image 
                  src="/qualité.png" 
                  alt="Certification Qualiopi" 
                  width={160}
                  height={128}
                  className="h-32 w-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certification Qualiopi</h3>
              <p className="text-gray-600">
                Mon engagement qualité reconnu par l'État français pour l'excellence de mes prestations de formation.
              </p>
            </div>
            
            <div className="text-center transform transition-transform hover:scale-105">
              <div className="bg-white p-3 rounded-lg mb-4 flex items-center justify-center h-40">
                <Image 
                  src="/cpf.png" 
                  alt="Éligibilité CPF" 
                  width={160}
                  height={128}
                  className="h-32 w-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Éligibilité CPF</h3>
              <p className="text-gray-600">
                Mes formations peuvent êtreéligibles au CPF pour un financement simplifié de votre montée en compétences.
              </p>
            </div>
            
            <div className="text-center transform transition-transform hover:scale-105">
              <div className="bg-white p-3 rounded-lg mb-4 flex items-center justify-center h-40">
                <Image 
                  src="/accertif.png" 
                  alt="Accertif" 
                  width={80}
                  height={64}
                  className="h-16 w-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accertif</h3>
              <p className="text-gray-600">
                Partenaire de confiance pour l'accompagnement et la certification de vos compétences professionnelles.
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA - Enhanced with gradient and animation */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Prêt à Développer Votre Potentiel ?</h2>
            <p className="text-gray-600 mb-8">
              Découvrez mes formations  et bénéficiez d'un accompagnement personnalisé pour atteindre vos objectifs professionnels.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/formations" 
                className="btn-primary btn-lg btn-with-icon group"
              >
                Découvrir mes formations 
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                href="/contact" 
                className="btn-outline btn-lg"
              >
                Me Contacter
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
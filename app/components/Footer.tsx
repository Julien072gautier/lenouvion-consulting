import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react'
import ManageCookies from './ManageCookies'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logo.png" 
                  alt="Lenouvion Consulting" 
                  width={200}
                  height={80}
                  className="h-16 w-auto"
                />
              </Link>
            </div>
            <p className="text-gray-300 mb-4">
              Organisme de formation certifié proposant des formations professionnelles personnalisées.
            </p>
            <div className="flex items-center text-gray-300 mb-2">
              <MapPin size={18} className="mr-2" />
              <span>12 rue Chaigneau, 94210 Saint-Maur-des-Fossés</span>
            </div>
            <div className="flex items-center text-gray-300 mb-2">
              <Phone size={18} className="mr-2" />
              <span>07 78 25 10 94</span>
            </div>
            <div className="flex items-center text-gray-300 mb-2">
              <Mail size={18} className="mr-2" />
              <span>jacqueshenri.marin@lenouvion-consulting.fr</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Linkedin size={18} className="mr-2" />
              <a 
                href="https://www.linkedin.com/company/lenouvion-consulting" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors"
              >
                Lenouvion Consulting LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/formations" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Nos Formations
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-blue-400 transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/demande-formation" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Demande de Formation
                </Link>
              </li>
            </ul>
          </div>

          {/* Formations Principales */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Formations Populaires</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/formation/ia-vente" className="text-gray-300 hover:text-blue-400 transition-colors">
                  IA et Vente
                </Link>
              </li>
              <li>
                <Link href="/formation/communication-prise-parole" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Communication et Prise de Parole
                </Link>
              </li>
              <li>
                <Link href="/formation/community-management" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Community Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Certification */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Certification</h3>
            <div className="bg-white p-2 rounded-lg inline-block mb-4">
              <a 
                href="/certificat.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Image 
                  src="/qualité.png" 
                  alt="Certification Qualiopi" 
                  width={120}
                  height={96}
                  className="h-24 w-auto cursor-pointer"
                />
              </a>
            </div>
            <p className="text-gray-300">
              Certifié Qualiopi - Éligible au CPF et autres dispositifs de financement de la formation professionnelle.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Accertif connect. Tous droits réservés.</p>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/politique-confidentialite" className="text-gray-400 hover:text-blue-400 transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/mentions-legales" className="text-gray-400 hover:text-blue-400 transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-cookies" className="text-gray-400 hover:text-blue-400 transition-colors">
                Politique de cookies
              </Link>
              <ManageCookies />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

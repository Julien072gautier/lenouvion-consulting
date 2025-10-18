import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales - Lenouvion Consulting',
  description: 'Mentions légales et informations légales de Lenouvion Consulting, organisme de formation professionnelle.',
  robots: 'index, follow',
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-brand mb-8">Mentions Légales</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Éditeur du site</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Raison sociale :</strong> Lenouvion Consulting</p>
                <p><strong>Forme juridique :</strong> SASU, société par actions simplifiée unipersonnelle</p>
                <p><strong>Capital social :</strong> 10 000,00 €</p>
                <p><strong>Siège social :</strong> 12 rue Chaigneau, 94210 Saint-Maur-des-Fossés</p>
                <p><strong>SIREN :</strong> 980 112 536</p>
                <p><strong>SIRET (siège) :</strong> 980 112 536 00019</p>
                <p><strong>Numéro TVA :</strong> FR94980112536</p>
                <p><strong>RCS :</strong> 980 112 536 R.C.S. Créteil</p>
                <p><strong>Inscription au RCS :</strong> INSCRIT (au greffe de CRÉTEIL, le 04/10/2023)</p>
                <p><strong>Inscription au RNE :</strong> INSCRIT</p>
                <p><strong>Activité principale :</strong> 70.22Z (Conseil pour les affaires et autres conseils de gestion)</p>
                <p><strong>Activité secondaire :</strong> Formation professionnelle</p>
                <p><strong>Numéro NDA :</strong> 11941221894</p>
                <p><strong>Date d'obtention :</strong> 2024-02-14</p>
                <p><strong>Région :</strong> Ile-de-France</p>
                <p><strong>Directeur de la publication :</strong> Jacques-Henri MARIN</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Hébergement</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Hébergeur :</strong> IONOS</p>
                <p><strong>Site web :</strong> <a href="https://www.ionos.fr" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.ionos.fr</a></p>
                <p><strong>Adresse :</strong> 7 Place de la Gare, 57200 Sarreguemines, France</p>
                <p><strong>Téléphone :</strong> 09 70 80 89 11</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Activités</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Activité principale :</strong> 70.22Z (Conseil pour les affaires et autres conseils de gestion)</p>
                <p><strong>Activité secondaire :</strong> Formation professionnelle</p>
                <p><strong>Numéro NDA :</strong> 11941221894</p>
                <p><strong>Date d'obtention :</strong> 2024-02-14</p>
                <p><strong>Région :</strong> Ile-de-France</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Contact</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Téléphone :</strong> 07 78 25 10 94</p>
                <p><strong>Email :</strong> jacqueshenri.marin@lenouvion-consulting.fr</p>
                <p><strong>Contact :</strong> Jacques-Henri MARIN</p>
                <p><strong>Adresse :</strong> 12 rue Chaigneau, 94210 Saint-Maur-des-Fossés</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Propriété intellectuelle</h2>
              <p className="mb-4">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="mb-4">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
              <p>
                La marque et le logo Lenouvion Consulting sont des marques déposées. Toute reproduction non autorisée de ces marques, dessins et modèles constitue une contrefaçon passible de sanctions pénales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Responsabilité</h2>
              <p className="mb-4">
                Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
              </p>
              <p className="mb-4">
                Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, à l'adresse jacqueshenri.marin@lenouvion-consulting.fr, en décrivant le problème de la manière la plus précise possible.
              </p>
              <p>
                Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule responsabilité. En conséquence, ne saurait être tenu responsable d'un quelconque dommage subi par l'ordinateur de l'utilisateur ou d'une quelconque perte de données consécutives au téléchargement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Liens hypertextes</h2>
              <p className="mb-4">
                Des liens hypertextes peuvent être présents sur le site. L'utilisateur est informé qu'en cliquant sur ces liens, il sortira du site lenouvion-consulting.fr. 
                Ce dernier n'a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Droit applicable</h2>
              <p>
                Tout litige en relation avec l'utilisation du site lenouvion-consulting.fr est soumis au droit français. 
                Il est fait attribution exclusive de juridiction aux tribunaux compétents de Créteil.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Médiation</h2>
              <p className="mb-4">
                Conformément aux dispositions de l'article L.616-1 du Code de la consommation concernant le règlement amiable des litiges, 
                Lenouvion Consulting adhère au Service du Médiateur de la CNPM Médiation Consommation 
                dont les coordonnées sont les suivantes :
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>CNPM MÉDIATION CONSOMMATION</strong></p>
                <p><strong>Médiateur de la consommation agréé par la CECMC</strong></p>
                <p><strong>Adresse :</strong> Centre d'Affaires Stéphanois<br />
                Immeuble l'Horizon – Esplanade de France<br />
                3 rue J. Constant Milleret<br />
                42000 SAINT-ÉTIENNE</p>
                <p><strong>Téléphone :</strong> +33 (0)4 77 42 10 58</p>
                <p><strong>Site web :</strong> <a href="https://www.cnpm-mediation-consommation.eu/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.cnpm-mediation-consommation.eu</a></p>
                <p><strong>Accueil téléphonique :</strong> Du lundi au jeudi de 9h à 12h</p>
                <p><strong>Agrément :</strong> Depuis le 1er juin 2018 par la CECMC</p>
              </div>
            </section>

            <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-600">
              <p className="text-sm text-gray-600">
                <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

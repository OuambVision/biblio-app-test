// Importation des données de l'inventaire depuis un fichier JSON
import inventaire from '@/public/inventaire.json';
import Image from 'next/image';
import Link from 'next/link';

// Indique que les paramètres sont déterminés de manière statique
export const dynamicParams = false;

// Fonction pour générer des chemins statiques dynamiques au moment du build
// Cette fonction est utilisée par Next.js pour créer les pages statiques pour chaque produit
export function generateStaticParams() {
    return inventaire.map(
        (produit) => ({ produit: produit.slug }) // Génère un objet avec le slug du produit comme paramètre
    );
}

// Composant de page pour afficher les informations d'un produit
// Ce composant reçoit les paramètres dynamiques via les props
export default function Produit({ params }) {
    const produitSlug = params.produit; // Récupère le slug du produit à partir des paramètres
    const produitFinal = inventaire.find(
        (produit) => produit.slug === produitSlug // Trouve le produit correspondant dans l'inventaire en utilisant le slug
    );

    // Rendu de la page avec les informations du produit
    return (
        <>
            <h2>{produitFinal.nom}</h2>
            <Image 
                src={produitFinal.image} 
                alt={produitFinal.nom} 
                width={32}
                height={32} 
            />
            <p>{produitFinal.description}</p>
            <Link href="/magasin">Retour au magasin</Link>
        </>
    );
}
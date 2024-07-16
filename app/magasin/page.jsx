import Image from 'next/image'
import Link from 'next/link'
import inventaire from '@/public/inventaire.json'
export default function Magasin() {
    return <>
        <h2>Magasin</h2>
        <ul>
            {inventaire.map((produit) =>
                <li key={produit.slug}>
                    <Image
                        src={produit.image}
                        alt={produit.nom}
                        width={32}
                        height={32}
                    />
                    <div>{produit.nom}</div>
                    <Link href={`/magasin/${produit.slug}`}>Plus d&apos;information</Link>
                </li>
            )}
        </ul>
    </>
}
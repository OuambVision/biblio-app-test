import Connexion from "@/components/Connexion"

export const metadata = {
    title: 'Connexion | biblio-app',
    description: 'Page de Connexion',
    openGraph: {
        title: 'Connexion | biblio-app',
        description: 'Page de Connexion',
        images: ['./react.webp']
    }
}

export default function Page() {
    return <>
        <Connexion />
    </>
}
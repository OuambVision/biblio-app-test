import Documents from "@/components/Documents"

export const metadata = {
    title: 'Documents | biblio-app',
    description: 'Page de Documents',
    openGraph: {
        title: 'Documents | biblio-app',
        description: 'Page de Documents',
        images: ['./react.webp']
    }
}

export default function Page() {
    return <>
        <Documents />
    </>
}
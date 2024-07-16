import Contact from "@/components/Contact"

export const metadata = {
    title: 'Contact | biblio-app',
    description: 'Page de Contact',
    openGraph: {
        title: 'Contact | biblio-app',
        description: 'Page de Contact',
        images: ['./react.webp']
    }
}

export default function Page(){
    return <>
        <Contact/>
    </>
}
'use client'
import styles from './Header.module.css';
import Image from 'next/image';
import logo from '@/public/react.webp';
import MenuNav from './MenuNav';
import { useTheme } from './ThemeProvider'; //Importer le hook personnalisé pour manipuler le thème
export default function Header() {
    const [theme, setTheme] = useTheme();
    return <header className={styles.header +' '+
    (theme === 'light'? styles.light : styles.dark)
    }>
        <div className={styles.title}>
            <Image
                src={logo}
                alt="Logo React"
                width={80}
            />
            <h1>Biblio App</h1>
        </div>
        <MenuNav/>
    </header>
}
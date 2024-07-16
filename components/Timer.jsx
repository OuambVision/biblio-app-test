import { useEffect, useState } from 'react'
import styles from './Timer.module.css'
export default function Timer({compte}) {
    const [decompte, setCompte] = useState(compte || 10);
    useEffect(() => {
        // Exécuté au chargement du composant dans la page
        const intervalID = setInterval(() => {
            if(decompte > 0) {
                setCompte(decompte - 1);
            }
            else {
                clearInterval(intervalID);
            }
        }, 1000);
        return () => {
            // Exécuté lorsque le composant est enlever de la page
            clearInterval(intervalID)
        }
    });
    return <div className={styles.timer}>
        {decompte}
    </div>
}
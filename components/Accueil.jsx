import styles from './Accueil.module.css';
import Citation from './Citation';
import Titre from './Titre';
import Timer from './Timer';
export default function Accueil() {
    return <>
        <Citation auteur='Sedric'>
            Nous y sommes
        </Citation>
        <Titre/>
        <Timer/>
        <Timer compte={50}/>
        <Timer compte={100}/>
        <div className={styles.welcome}>
            Soyez la bienvenue sur biblio-app
        </div>
    </>
}
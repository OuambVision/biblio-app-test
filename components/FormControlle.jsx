'use client'
import styles from './Form.module.css';
import { useFormInput } from './UseFormInput';
export default function FormControlle() {
    const nom = useFormInput('');
    const courriel = useFormInput('');
    const handleSubmit = (event) => {
        event.preventDefault(); // Empêche la soumission par défaut du formulaire
        console.log(`Nom: ${nom.value}, Courriel: ${courriel.value}`); //Affichage du nom et courriel
    };
    return <>
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <label>Nom:</label>
                <input {...nom} />
            </div>
            <div>
                <label>Email:</label>
                <input {...courriel} />
            </div>
            <button type="submit">Envoyer</button>
        </form>
    </>;
}

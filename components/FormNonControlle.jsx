'use client'
import styles from './Form.module.css';
import { useRef, useState } from 'react';
export default function FormNonControlle() {
    const nomRef = useRef(null); // Créer une référence pour le champ de nom
    const courrielRef = useRef(null); // Créer une référence pour le champ courriel
    const [erreurNom, setErreurNom] = useState('');
    const [erreurCourriel, setErreurCourriel] = useState('');
    const [envoiReussi, setEnvoiReussi] = useState(false);
    const courrielRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Expression regulière pour valider le courriel
    const  handleSubmit = async (event) => {
        event.preventDefault(); // Empêche la soumission par défaut du formulaire
        const nom = nomRef.current.value; // Obtenir la valeur du champ de nom
        const courriel = courrielRef.current.value; // Obtenir la valeur du champ courriel
        let erreur = false;
        if (!nom) {
            setErreurNom("Ce champ doit être rempli");
            erreur = true;
        }
        else {
            setErreurNom('');
        }
        if (!courriel || !courrielRegex.test(courriel)) {
            setErreurCourriel("Ce courriel est invalide");
            erreur = true;
        }
        else {
            setErreurCourriel('');
        }
        if (erreur) {
            setEnvoiReussi(false);
            return;
        }
        setEnvoiReussi(true);

        // const result = await fetch('/api/salut').then(res => res.json())
        // console.log(result);

        // const res = await fetch('/api/add', {
        //     method: 'PUT',
        //     body: JSON.stringify({
        //         userName : courriel,
        //         passWord: nom
        //     })
        // }).then(res => res.json());
        // console.log(res)

        const res = await fetch(`/api/getParam?courriel=${courriel}&nom=${nom}`);
    };
    return <>
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <label>Nom:
                    <input type="text" ref={nomRef} /> {/* Champ de texte avec une référence */}
                    {erreurNom &&
                        <div className={styles.erreur}>{erreurNom}</div>
                    }
                </label>
            </div>
            <div>
                <label>Email:
                    <input type="email" ref={courrielRef} /> {/* Champ de texte avec une référence */}
                    {erreurCourriel &&
                        <div className={styles.erreur}>{erreurCourriel}</div>
                    }
                </label>
            </div>
            <button type="submit">Envoyer</button>
            {envoiReussi &&
                <div className={styles.result}>
                    Informations envoyées avec succès. Nom = {nomRef.current.value} et Courriel = {courrielRef.current.value}
                </div>
            }
        </form>
    </>
}
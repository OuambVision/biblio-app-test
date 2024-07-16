'use client'
import styles from './Form.module.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
export default function FormHook() {
    const [reponse, setReponse] = useState(''); //Pour contenir la reponse du serveur
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            nom: '',
            courriel: ''
        }
    });
    const nom = watch('nom');
    return <>
        <form className={styles.form}
            onSubmit={handleSubmit(() => setReponse("Message reçu avec succès!"))}>
            <label>
                Nom:
                <input
                    type="text"
                    {...register("nom",
                        {
                            required: 'Champ obligatoire',
                            minLength: { value: 4, message: "min 4 caractères" }
                        })
                    }
                    placeholder='votre nom' />
                <div className={styles.erreur}>{errors.nom?.message}</div>
            </label>
            <div>Nom : {nom}</div>
            <label>
                Courriel:
                <input
                    type="email"
                    {...register("courriel",
                        {
                            required: 'Champ obligatoire',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Courriel non valide'
                            }
                        })
                    }
                    placeholder='votre courriel'
                />
                <div className={styles.erreur}>{errors.courriel?.message}</div>
            </label>
            <button type="submit">Envoyer</button>
            <div>{reponse}</div>
        </form>
    </>
}

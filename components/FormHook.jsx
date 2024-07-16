'use client'
import styles from './Form.module.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
export default function FormHook() {
    const [reponse, setReponse] = useState(''); //Pour contenir la reponse du serveur
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            password: '',
            courriel: ''
        }
    });
    return <>
        <form className={styles.form}
            onSubmit={handleSubmit(() => setReponse("Message reçu avec succès!"))}>
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
            <label>
                Password:
                <input
                    type="passwaord"
                    {...register("password",
                        {
                            required: 'Champ obligatoire',
                            minLength: { value: 4, message: "min 4 caractères" }
                        })
                    }
                    placeholder='votre password' />
                <div className={styles.erreur}>{errors.password?.message}</div>
            </label>
            <button type="submit">Se connecter</button>
            <div>{reponse}</div>
        </form>
    </>
}

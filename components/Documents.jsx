'use client'
import Gallerie from '@/components/Galerie.jsx'
import galleriePokemon from '@/public/gallerie-pokemon.json'
import { useState } from 'react';
import styles from './Documents.module.css'
export default function Documents() {
    //variable et fonction pour gérer la liste des livres
    const [livres, setLivres] = useState([]);
    //variable et fonction pour ajouter un nouveau livre
    const [newLivre, setNewLivre] = useState('');
    // Fonction pour ajouter un nouveau livre à la liste
    const addLivre = () => {
        if (newLivre !== '') {
            // Ajoute le nouveau livre à la liste actuelle des livres
            //[...] : C'est le "spread operator" qui permet d'étendre (ou de décompresser) un tableau. 
            //...livres, prend tous les éléments de livres et  les insère dans un nouveau tableau.
            setLivres([...livres, newLivre]);
            // Réinitialise le champ d'entrée
            setNewLivre('');
        }
    };
    return (
        <div className={styles.container}>
            <h1>Gestion des livres</h1>
            <div>
                <input
                    type="text"
                    placeholder="Ajouter un livre"
                    //La valeur du input est celle donnée par useState
                    value={newLivre}
                    //L'événement onChange (lorsque l'utilisateur saisi le no, du livre)
                    onChange={(e) => setNewLivre(e.target.value)}
                />
                {/* L'événement onClick Lorsque l'utilisateur clique sur le bouton pour ajouter */}
                <button onClick={addLivre}>Ajouter</button>
            </div>
            <h2>Liste des livres</h2>
            <ul>
                {livres.map((livre, index) => (
                    <li key={index}>{livre}</li>
                ))}
            </ul>

            <Gallerie images={galleriePokemon} />
        </div>
    );
}

import { useState, useEffect } from 'react';
export default function Titre(){
    //variable pour contenir le nombrte de clic
    const [count, setCount] = useState(0);
    useEffect(() => {
      // Met à jour le titre du document via l’API du navigateur
      document.title = `Vous avez cliqué ${count} fois`;
    });
    return (
      <div>
        <p>Vous avez cliqué {count} fois</p>
        <button onClick={() => setCount(count + 1)}>
          Cliquez ici
        </button>
      </div>
    );
}
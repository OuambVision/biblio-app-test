import Image from 'next/image'
import styles from './Galerie.module.css'
// images est un tableau
export default function Gallerie({ images }) {
    return <div className={styles.gallerie}>
        {/* Usage de map() dans les accolades */}
        {/* Les clés (key) aident React à identifier quels éléments d’une liste ont changé, ont été ajoutés ou supprimés.  */}
        {images.map((image, index) =>
            <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
            />
        )}
    </div>
}

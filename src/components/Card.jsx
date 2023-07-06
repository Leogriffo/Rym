import styles from './Card.module.css'


export default function Card({name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={styles.card}>
         <button className={styles.btn} onClick={onClose}>X</button>
         <img src={image} alt={ `No se encuentra la imagen de ${name}`} />

         <h2 className={styles.nombre}>{name} </h2>
            <div className={styles.textContainer}>
               <h2>{status} </h2>
               <h2>{species} </h2>
               <h2>{gender} </h2>
               <h2>{origin} </h2>
            </div>
      </div>
   );
}

import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { addFav, removeFav } from '../redux/actions'
import { connect } from 'react-redux';

function Card({name, status, species, gender, origin, image, onClose, id, addFav, removeFav, myFavorites}) {

const [isFav, setIsFav] = useState(false)

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites,id]);

const handleFavorite = () => {
if(isFav){
   setIsFav(false)
   removeFav(id)
} else {
   setIsFav(true)
   addFav({name, status, species, gender, origin, image, id})
}
}


   return (
      <div className={styles.card}>
         <div className={styles.contenedorBtn}>
         {
   isFav ? (
      <button className={styles.btn}onClick={handleFavorite}>❤️</button>
   ) : (
      <button className={styles.btn}onClick={handleFavorite}>🤍</button>
   )
}
            <button className={styles.btn} onClick={() => onClose(id)}>X</button>
         </div>
         <img src={image} alt={ `No se encuentra la imagen de ${name}`} />
         <h2 className={styles.nombre}><Link to={`/detail/${id}`}>{name} | {id}</Link></h2>
            <div className={styles.textContainer}>
               <h2>{status} </h2>
               <h2>{species} </h2>
            </div>
      </div>
   );
}

export function mapStateToProps (state){
   return {
      myFavorites: state.myFavorites
   }
}
export function mapDispatchToProps (dispatch){
         return{
            addFav: function(character){
               dispatch(addFav(character))
            },
            removeFav: function(id){
               dispatch(removeFav(id))
            }
         }
}
export default connect (mapStateToProps, mapDispatchToProps)(Card)
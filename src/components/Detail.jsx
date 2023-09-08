import React ,{useEffect, useState} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import style from "./Detail.module.css"


function Detail () {

    //que es params? {id: 3} ROUTE /:id
const {id} = useParams()

const[characterDeatil,setCharacterDeatil] = useState({})


useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacterDeatil(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacterDeatil({});
 }, [id]);


    return(
       <div>
            {characterDeatil ? (
                <div className={style.ficha}>
                    <h2 style={{color: "white"}}>Detalles:</h2>       
                    <h3 style={{color: "white"}}>NOMBRE: {characterDeatil.name}</h3>
                    <h4 style={{color: "white"}}>ESTADO: {characterDeatil.status} </h4>
                    <h4 style={{color: "white"}}>ESPECIE: {characterDeatil.species}</h4>
                    <h4 style={{color: "white"}}>GENERO: {characterDeatil.gender}</h4>
                    <h4 style={{color: "white"}}>ORIGEN: {characterDeatil.origin?.name}</h4>
                    <img src={characterDeatil.image} alt="" />
                </div>
            ) : <h3>Loading...</h3>}
       </div>
    )

}

export default Detail;
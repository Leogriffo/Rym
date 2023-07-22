import React ,{useEffect, useState} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";


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
                <div>
                    <h2 style={{color: "white"}}>Nombre: {characterDeatil.name}</h2>
                    <h4 style={{color: "white"}}>{characterDeatil.status} </h4>
                    <h4 style={{color: "white"}} >{characterDeatil.species}</h4>
                    <h4 style={{color: "white"}}>{characterDeatil.gender}</h4>
                    <h4 style={{color: "white"}}>{characterDeatil.origin?.name}</h4>
                    <img src={characterDeatil.image} alt="" />
                </div>
            ) : <h3>Loading...</h3>}
       </div>
    )

}

export default Detail;
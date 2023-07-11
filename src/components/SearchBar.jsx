import { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {

//   const handleSearch = () => { 
//   const inputSearch = document.getElementById('inputSearch').value
//   onSearch(inputSearch.value)
//   inputSearch.value = ""

const [id, setId] = useState('')

const handleChange = (event) => {
   setId(event.target.value)
}

const handleSearch = (id) => {
   onSearch (id)
   setId('')
}


   return (
      <div className={styles.container}>
          <input className={styles.input} value ={id} id='inputSearch'  type='search' placeholder="Ingresa un ID" onChange={handleChange}/>
         <button className={styles.btnAgregar} onClick={()=>handleSearch(id)}>Agregar</button> 
      </div>
   );
}

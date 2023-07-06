import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {

  const handleSearch = () => { 
  const inputSearch = document.getElementById('inputSearch').value
  onSearch(inputSearch.value)
  inputSearch.value = ""

  }

   return (
      <div className={styles.container}>
          <input className={styles.input} type='search' placeholder="Ingresa un ID"/>
         <button className={styles.btnAgregar} onClick={()=>{handleSearch()}}>Agregar</button> 
      </div>
   );
}

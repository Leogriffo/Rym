import './App.css';
import {useState} from 'react';
import axios from 'axios'
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';


function App() {

   const [characters, setCharacters] = useState([])

   //fetch - axios
/*
FETCH -> res => res.json()
+ es nativo, no hay que instalar

AXIOS -> res => res.data
hay uqe instalarlo
*/
   const onSearch = (id) =>{
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({data}) => {
         if(!characters.find(char => char.id === data.id)){
            if(data.name){
               setCharacters((oldCharacters) => [...oldCharacters, data])
            }  
         } else{
               window.alert(`Ya existe un personaje con id${id}`)
         }
      })
      .catch((err) => window.alert(err));
   };

   const onClose = (id) => {
     setCharacters(characters.filter(char => char.id !== id))
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose ={onClose}/>
      </div>
   );
}

export default App;

import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios'
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';

//Componentes
import Cards from './components/Cards.jsx';
import Nav from './components/Nav'; 
import Detail from './components/Detail';
import About from './components/About';
import Error404 from './components/Error404.jsx';
import Form from './components/Form';
import Favorites from './components/Favorites';



function App() {

   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   //fetch - axios
/*
FETCH -> res => res.json()
+ es nativo, no hay que instalar

AXIOS -> res => res.data
hay uqe instalarlo
*/

//FORM
const {pathname}= useLocation()
const navigate = useNavigate()

const EMAIL = "leandro.griffone@gmail.com"
const PASSWORD = "pass123"

function login(userData){
   if(userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   } else {
      alert("Usuario o contraseña incorrecta")
   }
 }
 
 useEffect(() => {
   !access && navigate('/');
  },[access, navigate])


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
         {pathname !== '/' && <Nav onSearch={onSearch}/>}
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose ={onClose}/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Detail/:id' element={<Detail/>}/> 
            <Route path='/Favorites' element={<Favorites/>}/>
            <Route path='*' element={<Error404/>} />
         
         </Routes>
      </div>
   );
}

/*
ROUTE -> que es lo que quiero que se muestre (element) 
               donde quiero que se muestre (path)

               PARAMS
               -> /:id
               {id: }   (genero un objeto)  
                              -> el valor lo recibe la url

LINK -> hacia donde
                              <LINK> --> vamos a generar el valor de la url
                               to= id
*/

export default App;

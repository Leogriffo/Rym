import React from "react";
import SearchBar from "./SearchBar";
import {Link} from 'react-router-dom';

function Nav({onSearch}){
    return (
        <div>
            <SearchBar onSearch={onSearch}/>
            <Link to='/home' ><button>Home</button></Link>
            <Link to='/favorites'><button>Favorites</button></Link>
            <Link to='/about'><button>About</button></Link>
        </div>
    )
}

export default Nav
import { ADD_FAV, REMOVE_FAV , FILTER_FAV, ORDER_FAV} from "./action-types";

const initialState = {
    myFavorites: [],
    allFavorites: []
}

function rootReducer (state= initialState, action){
    switch(action.type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allFavorites: [...state.allFavorites, action.payload]
            }
        case REMOVE_FAV:
                const updatedMyFavorites = state.myFavorites.filter(char => char.id !== action.payload);
                return {
                    ...state,
                    myFavorites: updatedMyFavorites,
                    allFavorites: updatedMyFavorites 
                };
            
        case FILTER_FAV:
            let favoritesFiltered = action.payload === "All" ? state.allFavorites : state.allFavorites.filter(char => char.gender === action.payload)
            return{
                ...state,
                myFavorites:favoritesFiltered
            }     
        case ORDER_FAV:
                let favoritesOrdered = state.myFavorites.sort((a, b) => {
                    return action.payload === "Ascendente" ? a.id - b.id : b.id - a.id
                })
                return{
                    ...state,
                    myFavorites:favoritesOrdered
                }     
                          
        default:
            return state
    }

}

export default rootReducer;
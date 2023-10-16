import React, { useEffect, useReducer } from 'react';
import { getAll } from '../../services/foodService';
import Thumbnails from '../../components/Thumbnails/Thumbnails';




//REDUCER
const initialState = { food: [] }; //by default, menu is empty in the homepage

const reducer = (state, action) => { //function that gets current state and action
    switch(action.type){
        case 'LOAD_FOOD': //new action
            return {...state, food: action.payload}
            default:
                return state; //by default, we return previous state
    }
}

export default function HomePage() {
    //use reducer to HomePage
    const [state, dispatch] = useReducer(reducer,initialState);
    const {food} = state;

    useEffect( () => {
        getAll().then(food => dispatch({type:'LOAD_FOOD', payload: food}))
    }, []);

    return (
        <>
            <Thumbnails food={food}/>
        </>
        
    );
}

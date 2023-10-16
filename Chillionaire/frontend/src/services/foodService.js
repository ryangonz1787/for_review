
//Removed this to use backend via AXIOS
//import { food } from "../../../backend/src/data";

import axios from "axios";

//CHANGED TO USED AXIOS
//export const getAll = async () => food;

export const getAll = async () => {
    const {data} = await axios.get('/api/menu')
};

export const getById = async foodId => {
    //CHANGED TO USE AXIOS
    //food.find(item => item.id === foodId);
    const {data} = await axios.get('/api/menu/' + foodId);
    return data;
};



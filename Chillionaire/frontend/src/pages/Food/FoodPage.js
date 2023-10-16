import React, {useState} from 'react';
import classes from './food.module.css';
import { getById } from '../../services/foodService';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Rating from '../../components/Rating/Rating';
import Price from '../../components/Price/Price';

export default function FoodPage() {
    const [food, setFood] = useState({});
    const {id} = useParams();

    useEffect(() => {
        getById(id).then(setFood);
    }, [id]);

    return <div> 
        
        {
            food && (
                <div className={classes.container}>
                    <img className = {classes.image}
                    src={`/food/${food.imageUrl}`}
                    alt={food.name}/>

                    <div className={classes.details}>
                        <div className={classes.header}>
                            <span className={classes.name}>{food.name}</span>
                            <div className={classes.rating}>
                                <Rating rating = {food.rating} size={25}/>
                            </div>
                            <div className={classes.price}>
                                <Price price = {food.price}/>
                            </div>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                </div>


            )
        }
        
        </div>;
}
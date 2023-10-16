import React from 'react';
import { Link } from 'react-router-dom';
import classes from './thumbnails.module.css';
import Rating from '../Rating/Rating';
import Price from '../Price/Price';

export default function Thumbnails({food}) {
    return (
    <ul className={classes.list}>
        {
            food.map(food => (
                <li key={food.id}>
                    <Link to={`/food/${food.id}`}>
                        <img className={classes.image}
                        src={`/food/${food.imageUrl}`}
                        alt={food.name}
                        />
                        <div className={classes.content}>
                            <div className={classes.name}>{food.name}</div>
                            <div className={classes.rating}>
                                <Rating rating={food.rating}/>
                            </div>
                            <div className={classes.price}>
                                <Price price={food.price}/>
                            </div>
                        </div>
                    </Link>
                </li>
                
            ))
        }

    </ul>);
    
}
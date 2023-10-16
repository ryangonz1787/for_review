import React from 'react';
import classes from './rating.module.css'


export default function Rating({rating, size}) {
    const styles = {
        width: size + 'px',
        height: size + 'px',
        marginRight: size / 6 + 'px',
    };

    function Rating({number}) {
        const halfNumber = number - 0.5;
        return rating >= number? (
        <img src='/fstar.png' style={styles} alt={number}/>
        ) : rating >= halfNumber? (
            <img src='/hstar.jpg' style={styles} alt={number}/>
        ) : (
            <img src='/estar.jpg' style={styles} alt={number}/>
        )
    }

    return (
        <div className={classes.rating}>
            {
                [1,2,3,4,5].map(number => (<Rating key={number} number={number}/>)
            )}

        </div>

    );
        
}

Rating.defaultProps = {
    size: 18,
};
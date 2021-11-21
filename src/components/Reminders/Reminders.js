import React from 'react';
import classes from '../Reminders/Reminders.module.css';

const Reminders = ({ data }) => {
    return (
        <ul className={classes.item}>
            {
                data.map(item =>
                    <li key={item.id}>
                        <img className={classes.cardImage} src={item.image} alt={item.name} />
                        <p className={classes.cardContainer}>{item.name} ({item.age})</p>
                    </li>
                )
            }
        </ul>
    )
}

export default Reminders

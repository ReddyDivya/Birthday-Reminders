import React from 'react';
import classes from './Home.module.css';
import Header from '../Header/Header';
import AddReminder from '../Reminders/AddReminder';
import data from '../Data/Data';
import Reminders from '../Reminders/Reminders';

const Home = () => {
    return (
        <div>
            <Header />
            {/* <AddReminder /> */}
            <section>
                <h1>{data.length} Birthdays Today</h1>
            </section>
            <Reminders data={data} />
        </div>
    )
}

export default Home

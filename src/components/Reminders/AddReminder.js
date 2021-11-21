import React, { useState } from 'react';
import Input from './Input';
import classes from '../Reminders/AddReminder.module.css';

const AddReminder = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [isNameValid, setIsNameValid] = useState(false);
    const [isDateValid, setIsDateValid] = useState(false);
    const [reminders, setReminders] = useState([]);

    const onChangeName = (event) => {
        //on name changes
        setName(event.target.value);
    }

    const onChangeDate = (event) => {
        //on date changes
        setDate(event.target.value);
    }

    /*
    const onSubmitHndlr = (event) => {
        //on Submit handler
        event.preventDefault();

        if (name === '') {
            setIsNameValid(true);
            return;
        }
        if (date === '') {
            setIsDateValid(true);
            return;
        }

        onAddReminder(name, date);
    }//onSubmitHndlr
    */

    const onAddReminder = (event) => {
        //on Add Reminder handler
        event.preventDefault();

        if (name === '') {
            setIsNameValid(true);
            return;
        }
        if (date === '') {
            setIsDateValid(true);
            return;
        }

        setReminders(prevItems => [...prevItems, {
            'id': Math.random().toString().substring(2, 8),
            'name': name,
            'date': date
        }]);
        console.log('reminders >> ', reminders);
    }//onAddReminder

    return (
        <main>
            <form>
                <div>
                    <Input
                        type="text"
                        text="Name"
                        value={name}
                        id="name"
                        placeholder="Enter name here"
                        onChange={onChangeName}
                        isInValid={isNameValid}
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        text="Dates"
                        value={date}
                        id="date"
                        placeholder="Enter date here"
                        onChange={onChangeDate}
                        isInValid={isDateValid}
                    />
                </div>
                <div>
                    <input type='submit' value='Add Reminder' onClick={onAddReminder} />
                </div>
            </form>

            <ul>
                {
                    reminders.map(item => <li key={item.id}>{item.name} on {item.date}</li>)
                }
            </ul>
        </main>
    )
}

export default AddReminder


import React from 'react';
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import { useState } from "react";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUserName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title:'Invalid input',
                message:'please enter a valid name and age(Non empty values)'
            })
            return;
        }
        //enteredAge is a string by  adding  + it will convert it into a number for comparison
        if (+enteredAge < 1) {
            setError({
                title:'Invalid input',
                message:'please enter a valid age(> 0)'
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    }
    const usernameChanegeHandler = (event) => {
        setEnteredUserName(event.target.value);
    }
    const ageChanegeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const errorHandler = ()=>{
        setError(null)
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" value={enteredUsername} type="text" onChange={usernameChanegeHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChanegeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );

}

export default AddUser;
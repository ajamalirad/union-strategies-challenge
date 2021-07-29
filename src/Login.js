import React from 'react';
import { useEffect, useState } from 'react';

const Login = (props) => {
    const [username, setUsername] = useState('your name');


    useEffect( () => {
        const dbRef = firebase.database().ref();
        dbRef.on('value', (response) => {
        console.log(response.val());
            const newState = [];
            const data = response.val();
            for (let key in data) {
                newState.push(data[key]);
                setUsername(newState);
            }
          })
    }, [])

    const handleClick = (event) => {
        event.preventDefault();
        // props.loggedIn = true;
        setUsername(username);
        console.log("clicked!");
        console.log(props.loggedIn);
    }
return (

    <div className="wrapper">
        <form>
            <label 
                htmlFor="userName"
                className="sr-only"
            >
                please enter your username
            </label>
            <input 
                id="userName"
                type="text" 
                placeholder="user name"
            />

            <label 
                htmlFor="password"
                className="sr-only"
            >
                please enter your password
            </label>

            <input 
                id="password"
                type="password" 
                placeholder="password"
            />

            <button 
                onClick={handleClick}
            >
                    submit
            </button>
        </form>
    </div>

)
}

export default Login;
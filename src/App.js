import React from 'react';
import './App.css';
import firebase from './firebase';
import UserInfo from './UserInfo';
import { useEffect, useState } from 'react';



const App = () => {
  const user = {
    loggedIn: false
}
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [userInput, setUserInput] = useState('');

// FIREBASE

    useEffect( () => {
        const dbRef = firebase.database().ref();
        dbRef.on('value', (response) => {
          console.log(response.val());

          const newState = [];
          const data = response.val();
          for (let key in data) {
            newState.push({
              key: key,
              name: data[key],
            })
          }
          setUsername(newState);
        })
    }, [])

// CLICK AND CHANGE HANDLERS
  const handleClick = (event) => {
      event.preventDefault();
      user.loggedIn = true;

      const dbRef = firebase.database().ref();
      dbRef.push(password);
      setPassword('');
  }

  const logOutClick = (event) => {
    event.preventDefault();
    user.loggedIn = false;
    console.log("clicked out!");
    console.log(user.loggedIn);
}

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
}

  const handlePassword = (event) => {
    setPassword(event.target.value);
}
// END OF HANDLERS

// MAP


  return (

      <div className="wrapper">

        <header>
            <h1>Union Strategies Inc. Tech Challenge 🛠</h1>
        </header>

          <div className="userInfo">
            <UserInfo logOutClick={logOutClick}/>
          </div>
        {
        user.loggedIn === false
        ?
        <div className="login">
          <h2>Please login or register!</h2>
          <div className="login-form">
          <form action="submit">
            <label 
                htmlFor="userName"
                className="sr-only"
            >
                please enter your username
            </label>
            <input 
                id="userName"
                type="text" 
                onChange={handleUsernameChange}
                value={username}
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
                onChange={handlePassword}
                value={password}
                placeholder="password"
            />

            <button 
                onClick={handleClick}
            >
                    submit
            </button>
        </form>
          </div>
        </div>
        : 
        <div>
        </div>
        }
        {/* {
          user.loggedIn === true
          ?
          <div className="userInfo">
            <UserInfo logOutClick={logOutClick}/>
          </div>
          :
          <div></div>
        } */}
      </div>
  );
}

export default App;

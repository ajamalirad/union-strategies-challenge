import React from 'react';
import './App.css';
import firebase from './firebase';
import UserInfo from './UserInfo';
import { useEffect, useState } from 'react';



const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dbInfo, setDbInfo] = useState([]);
  const [gmapsApi, setGmapsApi] = useState('');
  const [register, setRegister] = useState('');
  const [logIn, setLogIn] = useState('');


// FIREBASE

    useEffect( () => {
        const dbRef = firebase.database().ref();

        dbRef.on('value', (response) => {
          setGmapsApi(response.val().gmaps_API);

          const newState = [];
          const data = response.val();
          for (let key in data) {
            newState.push(data[key]);
          }
          setDbInfo(newState);
        })
    }, [])


// CLICK AND CHANGE HANDLERS

  const handleClick = (event) => {
      event.preventDefault();
      setLogIn(true);
      if (username.length > 0 && password.length > 0) {
        const dbRef = firebase.database().ref();
        const usersRef = dbRef.child('users');
        usersRef.child(username).set(register);
        setRegister({username: username, password: password});
        setPassword('');
        setUsername('');
      } else {
        alert('please log in!!')
      }
  }


  const logOutClick = (event) => {
    event.preventDefault();
    setLogIn(false);
}

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
}

  const handlePassword = (event) => {
    setPassword(event.target.value);
}
// END OF HANDLERS

  return (
      <div className="wrapper">
        <header>
            <h1>Union Strategies Inc. Tech Challenge 🛠</h1>
        </header>

        {/* Ternary to check if user is logged in to render content */}
        {
        logIn === true
        ?
        (
          <div className="userInfo">
            <UserInfo 
              logOutClick={logOutClick}
              gmapsApi={gmapsApi}
            />
          </div>
        )
        :
        (
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
                  placeholder="username"
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

              <button className="login"
                  onClick={handleClick}
              >
                      Login
              </button>

              <button 
                  onClick={handleClick}
              >
                      Register
              </button>
              
            </form>
          </div>
        </div>
        )
        }
      </div>
  );
}

export default App;

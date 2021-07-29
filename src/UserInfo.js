import React from 'react';
import { Loader } from "@googlemaps/js-api-loader";
import { Wrapper } from '@googlemaps/react-wrapper';



const UserInfo = (props) => {

    const findMeClick = (event) => {
        event.preventDefault();
        console.log("clicked!");
    }

    const loader = new Loader({
        apiKey: "AIzaSyA5aBn8zVymH9BIbYohL5n47_Jkfd4guWQ",
        version: "weekly",
        libraries: ["places"],
    });

    loader
        .load()
        .then(() => {
            console.log('hello');
        })
        .catch((e) => {
        })

    return (
        <div className="wrapper">

            <form action="submit">
                <label 
                    htmlFor="firstName"
                    className="sr-only"
                >
                    your first name
                </label>
                <input 
                    id="firstName"
                    type="text" 
                    placeholder="first name"
                />

                <label 
                    htmlFor="lastName"
                    className="sr-only"
                >
                    your last name
                </label>
                <input 
                    id="lastName"
                    type="text" 
                    placeholder="last name"
                />

                <label 
                    htmlFor="address"
                    className="sr-only"
                >
                    your address
                </label>
                <input 
                    id="address"
                    type="text" 
                    placeholder="your address"
                />

                <button
                    onClick={findMeClick}
                >
                    find me!
            </button>
            </form>

            <div className="mapContainer">
                <div className="map">
                    
                </div>
            </div>

            <button
                    className="logOutButton"
                    onClick={props.logOutClick}
                >
                    log me out!
            </button>
        </div>
    )
}

export default UserInfo;
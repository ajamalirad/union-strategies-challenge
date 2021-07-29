import React from 'react';
import Map from './Map';

const UserInfo = (props) => {

    const findMeClick = (event) => {
        event.preventDefault();
        console.log("clicked!");
    }

    return (
        <div className="wrapper">

            <form>
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
                <div className="map" id="map">
                    <Map />
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
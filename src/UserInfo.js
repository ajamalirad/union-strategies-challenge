import React from 'react';
import Map from './Map';
import { useState } from 'react';

const UserInfo = (props) => {

    const [userAddress, setUserAddress] = useState('');
    const [userLocationLat, setUserLocationLat] = useState([]);
    const [userLocationLng, setUserLocationLng] = useState([]);
    const [userLocation, setUserLocation] = useState([]);
    const [findMe, setFindMe] = useState([]);

    const findMeClick = (event) => {
        event.preventDefault();
        setFindMe(true);


        // fetch API
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${userAddress}&key=${props.gmapsApi}`)
        .then(function(response){
            return response.json();
          })
          .then(function(jsonResult){
            setUserLocation(jsonResult.results[0].geometry.location);
            setUserLocationLat(jsonResult.results[0].geometry.location.lat);
            setUserLocationLng(jsonResult.results[0].geometry.location.lng);
          })

    }

    const handleChangeAddress = (event) => {
        setUserAddress(event.target.value);
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
                    onChange={handleChangeAddress} 
                />

                <button
                    onClick={findMeClick}
                >
                    find me!
            </button>
            </form>

            {
                findMe === true
                ?
                (
                <div className="mapContainer">
                    <div className="map">
                        <Map 
                            userLocationLat = {userLocationLat}
                            userLocationLng = {userLocationLng}
                            userLocation = {userLocation}
                            gmapsApi={props.gmapsApi}
                        />
                    </div>
                </div>
                )
                :
                (
                    <div></div>
                )
            }
            

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
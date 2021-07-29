import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = (props) => {

    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCAM7T-jrcMbdqhk_DyjKvXY-x6O6zsxAU'}}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
}

export default Map;
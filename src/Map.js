import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = (props) => {

    return (
        <div style={{ height: '450px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ 
              key: 'AIzaSyCAM7T-jrcMbdqhk_DyjKvXY-x6O6zsxAU'}}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        >
          <AnyReactComponent
            lat={props.userLocationLat}
            lng={props.userLocationLng}
            text="🛠"
          />
        </GoogleMapReact>
      </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 43.6532,
        lng: -79.3832
      },
      zoom: 10
}

export default Map;
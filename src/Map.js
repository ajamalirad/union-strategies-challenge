import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = (props) => {

  const gmapsApi = props.gmapsApi;
    return (
        <div style={{ height: '500px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ 
            key: `AIzaSyDFwdJTWQtUh45QaLNTeIFdUSFe2j7z7Os`}}
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
      zoom: 9
}

export default Map;
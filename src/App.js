import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './UI/Navbar/Navbar';
import Map from './Components/Map/Map';
import UserPanel from './Components/UserPanel/UserPanel';

function App() {
  const MapsAPIKey = 'AIzaSyDJKV1bs7RogqpcMvvSuSLTDPB19lPR5dI';
  return (
    <div className="App" style={{ height: '100vh', overflow: 'auto'}}>
      <BrowserRouter>
        <Navbar />
        <Map 
          isMarkerShown 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${MapsAPIKey}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `80vh` }} />}
          mapElement={<div style={{ height: `100%` }} />} />
        <UserPanel />
        <Switch>
          {/* <Route exact path="/" component={Map} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
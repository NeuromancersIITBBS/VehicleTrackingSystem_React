import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './UI/Navbar/Navbar';
import Map from './Components/Map/Map';

function App() {
  const MapsAPIKey = 'AIzaSyDJKV1bs7RogqpcMvvSuSLTDPB19lPR5dI';
  return (
    <div className="App" style={{ height: '100vh', overflow: 'auto' }}>
      <BrowserRouter>
        <Navbar />
        <Map 
          isMarkerShown 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${MapsAPIKey}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `80vh` }} />}
          mapElement={<div style={{ height: `100%` }} />} />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eveniet, similique nesciunt quaerat voluptatibus animi quis nihil quam amet odit dignissimos atque impedit. At ratione ea nobis modi placeat doloribus dolore omnis iure nam eius. Iure reprehenderit explicabo impedit debitis commodi rem accusamus? Aliquid, reprehenderit optio repudiandae quia quas vitae, ullam eaque vero velit dolore amet cumque dolorem culpa. Laboriosam voluptate nulla, qui optio dolorem earum molestias tempora quo deserunt recusandae magni dignissimos quisquam consequatur dicta, ratione nemo corporis sequi amet harum ipsa quis minus sapiente id! Dicta expedita saepe voluptate eaque placeat ea ducimus vero? Fugit tenetur totam optio.</p>
        <Switch>
          {/* <Route exact path="/" component={Map} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
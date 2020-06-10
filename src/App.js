import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './UI/Navbar/Navbar';
import UserPage from './Pages/User/User';

function App() {
  return (
    <div className="App" style={{ height: '100vh', overflow: 'auto'}}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={UserPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
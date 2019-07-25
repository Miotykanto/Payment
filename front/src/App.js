import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';


// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";

import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import postAtelier from './components/postAtelier'

import 'bootstrap/dist/css/bootstrap.min.css';
import ListTous from './components/ListTous';
import AfficheProfil from './components/AfficheProfil';

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
            <div>
              <Navbar />
                <Route exact path="/" component={ Home } />
                <div className="container">
                  <Route exact path="/register" component={ Register } />
                  <Route exact path="/login" component={ Login } />
                  <Route exact path="/profil" component={ ListTous }  /> 
                  <Route exact path="/publier" component={ postAtelier }/>
                  <Route exact path="/profil/profiId" component={AfficheProfil}  />
                </div>
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ServerInfo from './ServerInfoPage.js';
import Login from './Components/Login';
import Navbar from './Components/NavbarComp.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ServerInfoPage from './ServerInfoPage.js';
import Signup from './Components/Signup';
import AddServer from './Components/AddServer';

const App = () => {
    
    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/' exact component={Login}/>
                    <Route path='/ServerInfoPage' exact component={ServerInfoPage}/>
                    <Route path='/SignUp' exact component={Signup}/>
                    <Route path='/AddServer' exact component={AddServer}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

import React from 'react';

import {BrowserRouter, Route , Switch, Redirect ,Router} from 'react-router-dom';
import Home from '../views/Home';
import Task from '../views/Task';
import Login from '../views/Login';
import Register from '../views/Register';
import NotFound from '../views/NotFound';



export default function Routes(){

    return(

        <Router history={history}>
                <Switch>

                    <Route exact path="/login" exact component={Login}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/" exact component={Home}/>
                    <Route component={NotFound}/>

                </Switch>
        </Router>
    )
}
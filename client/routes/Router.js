import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../container/Home.js';
import Detail from '../container/Detail.js';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/detail/:id" component={Detail}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;
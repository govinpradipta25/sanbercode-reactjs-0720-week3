import React from "react";
import {Switch, NavLink , Route} from "react-router-dom";

import Table from '../tugas11/tabelbuah';
import Timer from "../tugas12/timer"
import Table2 from '../tugas13/Table2'
import Table3 from '../tugas14/Table3';
import Buah from "./Buah"


const Routes = ()  =>{
    return (
        <>
        <nav>
            <ul>
                <li >     
                <NavLink exact activeClassName="active" className=" " to="/">Table Buah</NavLink>
                </li>
                <li>    
                <NavLink activeClassName="active" className=" " to="/timer">Timer</NavLink>
                </li>
                <li>    
                <NavLink activeClassName="active" className=" " to="/Table2">Form Buah</NavLink>
                </li>
                <li>    
                <NavLink activeClassName="active" className=" " to="/Table3">Table Buah With Hooks,Axios</NavLink>
                </li>
                <li>    
                <NavLink activeClassName="active" className=" " to="/buah">Table Buah With Context,Hooks,Axios</NavLink>
                </li>
            </ul>
        </nav>
        <Switch>

            <Route path="/timer">
                <Timer/>
            </Route>
            <Route path="/Table2">
                <Table2/>
            </Route>
            <Route path="/Table3">
                <Table3/>
            </Route>
            <Route path="/buah">
                <Buah/>
            </Route>
            <Route path="/">
                <Table/>
            </Route>
        </Switch>
        </>
    );
};

export default Routes; 
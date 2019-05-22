import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import {Navbar, Nav, Image} from 'react-bootstrap';
import '../App.css';

import Logo from '../ui/logo.png';

import Home from './Home.js';
import Profile from './Profile.js';
import Portofolio from './Portofolio.js';
import Contact from './Contact.js';

class Main extends React.Component{
    render(){
        return(
            <BrowserRouter>
            
                <Navbar className="navi" collapseOnSelect expand="lg" fixed="top">
                <NavLink className="Logo" to="/Home">
                    <Image src={Logo} alt="Logo"></Image>
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav className="Bar">
                    <Nav.Link> <NavLink eventKey={1} className="nav-link" to="/Home" activeClassName={'active'}>Home</NavLink></Nav.Link>
                    <Nav.Link> <NavLink eventKey={2} className="nav-link" to="/Profile">Profile</NavLink></Nav.Link>
                    <Nav.Link> <NavLink eventKey={3} className="nav-link" to="/Portofolio">Portofolio</NavLink></Nav.Link>
                    <Nav.Link> <NavLink eventKey={4} className="nav-link" to="/Contact">Contact</NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>

                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/Home' component={Home}></Route>
                    <Route path='/Profile' component={Profile}></Route>
                    <Route path='/Portofolio' component={Portofolio}></Route>
                    <Route path='/Contact' component={Contact}></Route>
                </Switch>
            
            </BrowserRouter>
        );
    }
}

export default Main;
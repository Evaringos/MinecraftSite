import React, { Component } from "react";
import { Navbar, Nav, FormControl, Container, Form, Button } from "react-bootstrap";
import logo from "./aoh_icon.ico"
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from '../Pages/Home'
import Play from '../Pages/Play'
import About from '../Pages/About'
import Blog from '../Pages/Blog'

const StyledNavbar = styled(Navbar)`
    height: 65px;
    font-size: 16px;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    .navbar-brand, .nav-link {
        color: #fff;
    }
    .nav-link:hover {
        color: #ccc;
    }
`;

const NavbarContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 75px;
`;

const StyledButtonSignUp = styled(Button)`
    font-size: 16px;
    font-weight: bold;
    background-color: #fff;
    border-color: #ddd;
    &:hover {
        background-color: #ccc;
        border-color: #bbb;
        color: #333;
    }
`;

const StyledButtonSignIn = styled(Button)`
    font-size: 16px;
    font-weight: bold;
    border: none;
    color: #fff;
    &:hover {
        color: #ccc;
    }
`;

export default class Header extends Component {
    render() {
        return (
            <>
            <StyledNavbar collapseOnSelect /* fixed="top" */ expand="md">
                <NavbarContent>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="35"
                            width="35"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/"> Home </Nav.Link> 
                            <Nav.Link href="/play"> Start play </Nav.Link>
                            <Nav.Link href="/about"> About us </Nav.Link>
                            <Nav.Link href="/blog"> Blog </Nav.Link>
                        </Nav>
                        <Nav>
                            <StyledButtonSignIn variant="outlined" className="me-2"> Sign in </StyledButtonSignIn>
                            <StyledButtonSignUp variant="outlined"> Sign up </StyledButtonSignUp>
                        </Nav>
                    </Navbar.Collapse>
                </NavbarContent>
            </StyledNavbar>
            
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/play' element={<Play/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/blog' element={<Blog/>}/>
                </Routes>
            </Router>
        </>
        );
    }
}
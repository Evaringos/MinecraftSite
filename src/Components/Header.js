import React, { Component } from "react";
import { Navbar, Nav, FormControl, Container, Form, Button } from "react-bootstrap";
import logo from "./aoh_icon.ico"

export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar collapseOnSelect fixed="top" expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/"> Home </Nav.Link> 
                            <Nav.Link href="/play"> Start play </Nav.Link>
                            <Nav.Link href="/about"> About us </Nav.Link>
                            <Nav.Link href="/blog"> Blog </Nav.Link>
                        </Nav>
                        <Form className='d-flex'>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="flex-grow-1 me-2"
                            />
                            <Button variant="outline-info" className="ms-auto"> Search </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
        )
    }
}

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Jumbotron from "react-bootstrap/Jumbotron";
function App() {
  return (
    <div>
      {" "}
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#home'>Discord adBot</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-success'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron className='jumbotronCenter '>
        <div class='jumbotronContainer'>
          <h1>
            {" "}
            Advertise on Discord{" "}
            <img
              src='https://www.freepnglogos.com/uploads/discord-logo-png/masgter-martin-gatzka-deviantart-7.png'
              width='20%'
              height='20%'
            ></img>
          </h1>
          // Testing comment
          <p>
            <Form.Control
              size='lg'
              type='text'
              placeholder='Search by Niche...'
            />
            <Button variant='primary' className='searchButton'>
              Discord Server Owner? Register Here!
            </Button>
          </p>
        </div>
      </Jumbotron>
    </div>
  );
}

export default App;

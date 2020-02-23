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
import SearchMenu from "./SearchMenu.js";
import { Router, Route, Switch } from "react-router-dom";

function mainMenu() {
  return (
    <div>
      {" "}
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

          <p>
            <Form.Control
              size='lg'
              type='text'
              placeholder='Search by Niche...'
            />
            <Button variant='primary' className='searchButton'>
              <Route path='index.html' component={SearchMenu} />
              Discord Server Owner? Register Here!
            </Button>
          </p>
        </div>
      </Jumbotron>
    </div>
  );
}

export default mainMenu;

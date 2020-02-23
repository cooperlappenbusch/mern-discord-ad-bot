import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import ListGroup from 'react-bootstrap/ListGroup';
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Router, Route, Switch } from "react-router-dom";
import { ListGroupItem } from "react-bootstrap";

function SearchMenu() {
  return (
    <div>
      {" "}
      <p>
        <Container>
            <Form.Control
              size='lg'
              type='text'
              placeholder='Search by Community'
              />
              
  <ListGroup>
   <ListGroup.Item><a href ='https://discordapp.com/invite/devcord'><Image src='https://cdn.dribbble.com/users/317366/screenshots/2951239/zeichenfl_che_1.png' roundedCircle width = '10%'></Image></a></ListGroup.Item>
   <ListGroup.Item variant="primary"><a href ='https://discordapp.com/invite/devcord'><Image src='https://cdn.dribbble.com/users/317366/screenshots/2951239/zeichenfl_che_1.png' roundedCircle width = '10%'></Image></a></ListGroup.Item>
   <ListGroup.Item><a href ='https://discordapp.com/invite/devcord'><Image src='https://cdn.dribbble.com/users/317366/screenshots/2951239/zeichenfl_che_1.png' roundedCircle width = '10%'></Image></a></ListGroup.Item>
   <ListGroup.Item variant="primary"><a href ='https://discordapp.com/invite/devcord'><Image src='https://cdn.dribbble.com/users/317366/screenshots/2951239/zeichenfl_che_1.png' roundedCircle width = '10%'></Image></a></ListGroup.Item>
   <ListGroup.Item><a href ='https://discordapp.com/invite/devcord'><Image src='https://cdn.dribbble.com/users/317366/screenshots/2951239/zeichenfl_che_1.png' roundedCircle width = '10%'></Image></a></ListGroup.Item>
   </ListGroup>
     </Container>
     </p>
    </div>
  );
}

export default SearchMenu;

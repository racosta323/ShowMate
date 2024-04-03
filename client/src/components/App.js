import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'

import NavBar from "./NavBar";


function App() {
  return (
    <Container>
      <NavBar/>
      <Row className="bg-white mx-1">
        <Outlet/>
      </Row>
    </Container>
    )
}

export default App;

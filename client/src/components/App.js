import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'

import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";





function App() {

  return (
    <>
      <NavBar/>
    <Container className="bg-light">
      <Outlet/>
    </Container>
    </>
    )
}

export default App;

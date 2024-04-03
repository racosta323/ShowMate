import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'

import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";





function App() {

  return (
    <Container>
      <NavBar/>
      <Outlet/>
    </Container>
    )
}

export default App;

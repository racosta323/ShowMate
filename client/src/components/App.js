import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"

import Container from "react-bootstrap/Container";

import NavBar from "./NavBar";


function App() {
  return (
    <Container>
      <NavBar/>
      <Outlet/>
    </Container>
    )
}

export default App;

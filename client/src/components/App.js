import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";

import NavBar from "./NavBar";

function App() {
  return (
    <Container>

      <NavBar/>
      <main>This is the main section</main>
    
    </Container>
    )
}

export default App;

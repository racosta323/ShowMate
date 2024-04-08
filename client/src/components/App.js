import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'


import NavBar from "./NavBar";

function App() {

  const[artist, setArtist] = useState({})
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let context = {
    artist: artist,
    setArtist: setArtist,
    show: show,
    setShow: setShow,
    handleClose: handleClose,
    handleShow: handleShow
  }

  return (
    <>
      <NavBar/>
    <Container className="bg-light">
      <Outlet context={context}/>
    </Container>
    </>
    )
}

export default App;

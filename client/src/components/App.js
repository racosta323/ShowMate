import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'


import NavBar from "./NavBar";
import Auth from "./Auth";

function App() {

  const [loggedInUser, setLoggedInUser ] = useState(false)


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
      <NavBar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
      <Container className="bg-light">
       { !!loggedInUser ? <Outlet context={context}/> : <Auth setUser={setLoggedInUser}/>}
      </Container>
    </>
    )
}

export default App;

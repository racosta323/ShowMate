import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'


import NavBar from "./NavBar";
import Auth from "./Auth";

function App() {

  const navigate = useNavigate()

  const [loggedInUser, setLoggedInUser ] = useState(false)

  useEffect(()=>{
    fetch('/authorized')
    .then(resp=>{
      resp.json().then(user => {
        setLoggedInUser(user)
        if (resp.status == 401){
          setLoggedInUser(false)
        }
      })
    })
  }, [])

  


  function logoutUser(){
    setLoggedInUser(null)
    navigate('/')
  }


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
    handleShow: handleShow,
    loggedInUser: loggedInUser
  }

  return (
    <>
      <NavBar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} logoutUser={logoutUser}/>
      <Container className="bg-light">
       { !!loggedInUser ? <Outlet context={context}/> : <Auth setUser={setLoggedInUser}/>}
      </Container>
    </>
    )
}

export default App;

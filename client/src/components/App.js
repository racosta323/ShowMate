import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'


import NavBar from "./NavBar/NavBar"
import Auth from './NavBar/Auth'
import NoReview from './Artists/NoReview'
import ReviewList from "./Artists/ReviewList";


function App() {

  const navigate = useNavigate()

  const [loggedInUser, setLoggedInUser ] = useState(false)
  const [reviews, setReviews] = useState()
 

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

  const[artists, setArtist] = useState({})
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    fetch(`/artists`)
    .then(resp=>resp.json())
    .then(data => setArtist(data))
}, [])

const renderList = artists.map ? artists?.map((artist)=>{
  if (!artist.reviews || artist.reviews.length == 0){
    return <NoReview handleClose={handleClose} handleShow={handleShow} show={show}/>
  } else {
      return artist.reviews.map((review)=>{
          return <ReviewList review={review} key={review.id}/>
      })
  }
}) : console.log('loading')


    useEffect(()=>{
        fetch('/reviews')
        .then(resp=>resp.json())
        .then(data=>setReviews(data))
    }, [])
    

  let context = {
    artists: artists,
    setArtist: setArtist,
    show: show,
    setShow: setShow,
    handleClose: handleClose,
    handleShow: handleShow,
    loggedInUser: loggedInUser,
    logoutUser: logoutUser,
    renderList: renderList,
    reviews: reviews
  }

  return (
    <>
      
      <Container className="bg-light">
        <NavBar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} logoutUser={logoutUser}/>
       {/* { !!loggedInUser ? <Outlet context={context}/> : <Auth setUser={setLoggedInUser}/>} */}
       { !!loggedInUser ? <Outlet context={context}/> : <Auth setUser={setLoggedInUser}/>}
      </Container>
    </>
    )
}

export default App;

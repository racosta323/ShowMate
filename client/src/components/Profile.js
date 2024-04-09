import { useEffect, useState } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

import CreateReview from './CreateReview'



function Profile(){

    const { artist, setArtist, show, setShow, handleClose, handleShow } = useOutletContext()
    
    const params = useParams()
    const artistId = params.id

    useEffect(()=>{
        fetch(`/artists/${artistId}`)
        .then(resp=>resp.json())
        .then(data => setArtist(data))
    }, [artistId])

 
   const totalStars = () => {
        if(Object.keys(artist).length > 0){
            console.log(artist.reviews)
            return artist.reviews.reduce((accumulator, currentValue)=>{
                return accumulator + currentValue.stars
            }, 0)

        } else {
            console.log("nothing")
        }
   }

   const averageStars = Object.keys(artist).length > 0 ? totalStars() / (artist.reviews).length : console.log('error')

   const numberOfReviews = Object.keys(artist).length > 0 ? (artist.reviews).length : console.log('error')

// {(artist.reviews).length}

    return(
        <Container>
            <Row >
                <Row className='mt-5'></Row>
                <Col className='mt-5'>
                    <h4>{artist.genre}</h4>
                    <h1 className='text-uppercase'>{artist.name}</h1> 
                </Col>
            </Row>
            <Row>
                <Col xs={8}>
                    {/* first 16:9 ratio chosen */}
                    {/* image is not reactive??? */}
                    <Image
                        src={artist.profile_image}
                        max-height={500}
                        width={800}
                    />
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Row>
                        <Stack direction='horizontal' className='d-flex justify-content-center'>
                            <Col xs={6}>
                                <h3 className='text-center'>
                                    <a href={`/artists/${artistId}/reviews`} className='link-offset-2 link-underline link-underline-opacity-0'>
                                        <span className='fs-1 fw-bold'>
                                            {averageStars * 2}
                                        </span> / {' '}
                                        <span className='text-warning'>
                                            10 {' '}
                                        </span>
                                        <i className="bi bi-star-fill text-warning fs-1" ></i>
                                    </a>
                                </h3>
                                <p className='text-center'># of Reviews: {numberOfReviews}</p>
                            </Col>
                           <Col xs={1}></Col>
                            <Col xs={6}>
                                
                                <Button onClick={handleShow}>
                                    <Stack direction='horizontal'>
                                        <i className="bi bi-pencil-square text-light fs-6" > </i>
                                        <h3 className='fs-6 ms-2 mt-1'> Review</h3>
                                    </Stack>
                                </Button>
                                <p>Write a review</p>
                                <CreateReview show={show} handleShow={handleShow} handleClose={handleClose}/>
                            </Col>
                        </Stack>
                        <Row>
                            <Col>
                                <p className='text-center'>Purchase tickets here</p>
                                <p className='text-center'>Price ranges</p>
                            </Col>
                        </Row>
                    </Row>
                    
                    {/* <Row>
                       <Col>
                            <h3 className='text-center'>Read all reviews</h3>
                            <p className='text-center'>Purchase tickets here</p>
                            <p className='text-center'>Price ranges</p>
                       </Col>
                    </Row> */}
                        
                </Col>
                <Row className='mt-5'>
                    <Col xs={8}>
                        <h2>User Uploads</h2>
                        <p>Image Carousel</p>
                    </Col>
                    <Col className='py-5'>   
                        <Row className='bg-body-secondary p-5 mt-1'>
                            <h2>Something could go here</h2>
                        </Row>
                    </Col>
                </Row>
            </Row>

        </Container>
    )
}

export default Profile
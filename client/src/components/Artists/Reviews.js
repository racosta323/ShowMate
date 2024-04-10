import { useState, useEffect } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import ReviewList from './ReviewList'
import NoReview from '../NoReview'
import CreateReview from '../CreateReview'


function Reviews(){

        const { artist, setArtist, show, setShow, handleClose, handleShow, loggedInUser, renderList } = useOutletContext()
        console.log(loggedInUser)

        const params = useParams()
        const artistId = params.id


    // useEffect(()=>{
    //     fetch(`/artists/${artistId}`)
    //     .then(resp=>resp.json())
    //     .then(data => setArtist(data))
    // }, [artistId])


    // const renderList = () => {
    //     if (!artist.reviews || artist.reviews.length == 0){
    //        return <NoReview handleClose={handleClose} handleShow={handleShow} show={show}/>
    //     } else {
    //         return artist.reviews.map((review)=>{
    //             return <ReviewList review={review} key={artistId}/>
    //         })
    //     }
    // }

  

    return(
        <Container>
            <Row>
                <Row className='my-4'></Row>
                <Row className='my-5'>
                    <Col>
                        {/* first 16:9 ratio chosen */}
                        {/* image is not reactive??? */}
                        <Row>
                            <img
                                src={artist.profile_image}  
                                height={300}
                                width={400}
                            />
                        </Row>
                        <Row className='my-4'></Row>
                        <Row className='border border-dark h-100'>
                            <Col className='h-100'>Something here</Col>
                        </Row>
                    </Col>
                    {/* other side */}
                    <Col xs={8} className='ps-5'>
                        <Row>
                            <Col >
                                <Row>
                                    <Col className='mt-2'>
                                        <h3>User Reviews</h3>
                                    </Col>
                                    
                                </Row>
                                <Row>
                                    <Col>
                                        <h1 className='text-uppercase'>
                                            <a href={`/artists/${artistId}`} className='link-offset-2 link-underline link-underline-opacity-0'>
                                                {artist.name}
                                            </a>
                                        </h1>
                                    </Col>
                                    <Col className="d-flex justify-content-end">
                                        <Button onClick={handleShow}>
                                            <Stack direction='horizontal'>
                                                <i className="bi bi-pencil-square text-light fs-6 me-2" ></i>
                                                <h6 className='mt-1'>Review</h6>
                                            </Stack>
                                        </Button>
                                        <CreateReview show={show} handleShow={handleShow} handleClose={handleClose} userId={loggedInUser.id}/>
                                    </Col>
                                </Row>
                                <Row className='my-1'>
                                    <hr></hr>
                                </Row>
                            </Col>
                        </Row>
                        {renderList()}
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}

export default Reviews
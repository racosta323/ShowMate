import { useEffect, useState } from 'react'
import { useParams, useOutletContext, NavLink, useNavigate } from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Ratio from 'react-bootstrap/Ratio'

import CreateReview from './CreateReview'



function Artists(){

    const navigate = useNavigate()

    const { show, setShow, handleClose, handleShow, loggedInUser } = useOutletContext()

    const [ artist, setArtist ] = useState(null)
    
    
    const params = useParams()
    const artistId = params.id

     useEffect(()=>{
        fetch(`/artists/${artistId}`)
        .then(resp=>resp.json())
        .then(data => setArtist(data))
    }, [artistId])
   

    const totalStars = () => {
    if (artist && artist.reviews) {
        return artist.reviews.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.stars
        }, 0)
    } else {
        alert("No reviews found")
        return 0;
    }
}

const averageStars = artist && artist.reviews && artist.reviews.length > 0 ? totalStars() / artist.reviews.length : 0;
const numberOfReviews = artist && artist.reviews ? artist.reviews.length : 0;

    return(
       <>
            <Row className='my-5'></Row>
            <Row className='py-5' style={{background: "#395A7F"}}>
                <Col xs={6}>
                    <Row >
                        <Col >
                           <Ratio aspectRatio="16x9">
                                <Image
                                    src={artist?.profile_image}
                                    alt={`Image of ${artist?.name}`}
                                />
                           </Ratio>
                        </Col>
                    </Row>
                </Col>
                <Col xs={6}>
                    <Row>
                        <Col className='my-3'>
                            <h1 className='text-uppercase text-light text-center' style={{fontSize: "75px"}}>{artist?.name}</h1> 
                            <h4 className='fs-5 text-light text-center'>{artist?.genre}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex justify-content-center'>
                            <Stack direction='horizontal' gap={4}>
                                <Col xs={6}>
                                    <h3 className='text-start fs-5 m-2 p-1'>
                                        <NavLink to={`/artists/${artistId}/reviews`} className='link-offset-2 link-underline link-underline-opacity-0'>
                                            <span className= "fw-bold fs-5 text-light">
                                                {Math.round(averageStars * 2)} /
                                            </span> 
                                            <span className='text-warning smaller'>
                                            {' '} 10 {' '}
                                            </span>
                                            <i className="bi bi-star-fill text-warning smaller" ></i>
                                        </NavLink>
                                    </h3>
                                    <p className='text-start' style={{fontSize:"10px"}}>
                                        <NavLink to={`/artists/${artistId}/reviews`} className='link-offset-2 link-underline link-underline-opacity-0 text-light'>
                                            # of Reviews: {numberOfReviews}
                                        </NavLink>
                                    </p>
                                </Col>
                                <Col>
                                    <Button onClick={handleShow} variant='success'>
                                        <Stack direction='horizontal'>
                                            <i className="bi bi-pencil-square text-light smaller fw-bold" ></i>
                                            <h6 className='ms-2 mt-2 smallest fw-bold'> Review</h6>
                                        </Stack>
                                    </Button>
                                    
                                    <CreateReview show={show} handleShow={handleShow} handleClose={handleClose}  artist={artist} userId={loggedInUser.id}/>
                                </Col>
                            </Stack>
                        </Col>
                    </Row>
                    <Row className='p-4'>
                        <Button onClick={()=>{navigate(`/artists/${artistId}/reviews`)}} variant='success text-light'>Check out Reviews</Button>
                    </Row>                    
                </Col>
            </Row>
            <Row className='my-5'></Row>
            <Row className='my-5'></Row>
            <Row className='my-5'></Row>
        </>
    )
}

export default Artists
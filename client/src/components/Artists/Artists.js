import { useEffect, useState } from 'react'
import { useParams, useOutletContext, NavLink } from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

import CreateReview from './CreateReview'



function Artists(){

    const { show, setShow, handleClose, handleShow, loggedInUser } = useOutletContext()

    const [ artist, setArtist ] = useState(null)
    
    
    const params = useParams()
    const artistId = params.id
    console.log(artistId)

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
        console.log("No reviews found")
        return 0;
    }
}

//    const averageStars = Object.keys(artist).length > 0 ? totalStars() / (artist.reviews).length : console.log('error')

//    const numberOfReviews = Object.keys(artist).length > 0 ? (artist.reviews).length : console.log('error')
const averageStars = artist && artist.reviews && artist.reviews.length > 0 ? totalStars() / artist.reviews.length : 0;

const numberOfReviews = artist && artist.reviews ? artist.reviews.length : 0;


    return(
       <>
            <Row></Row>
            <Row className='my-5'></Row>
            <Row className='my-5'></Row>
            {/* <Row >
                
                <Col className='mt-5'>
                    <h4>{artist?.genre}</h4>
                    <h1 className='text-uppercase'>{artist?.name}</h1> 
                </Col>
            </Row> */}
            <Row className='bg-secondary p-4 pb-5'>
                <Col xs={9}>
                    {/* first 16:9 ratio chosen */}
                    {/* image is not reactive??? */}
                    <Stack direction='horizontal' className='ms-2'>
                        <Col className='mx-5'>
                            <h3 className='text-end fs-5 mx-3'>
                                <NavLink to={`/artists/${artistId}/reviews`} className='link-offset-2 link-underline link-underline-opacity-0'>
                                    <span className= "fw-bold fs-5">
                                        {averageStars * 2}
                                    </span> / {' '}
                                    <span className='text-warning smaller'>
                                        10 {' '}
                                    </span>
                                    <i className="bi bi-star-fill text-warning smaller" ></i>
                                </NavLink>
                            </h3>
                            <p className='text-end smaller'>
                                <NavLink to={`/artists/${artistId}/reviews`} className='link-offset-2 link-underline link-underline-opacity-0'>
                                    # of Reviews: {numberOfReviews}
                                </NavLink>
                            </p>
                        </Col>
                        <Col className='d-flex justify-content-start'>
                            <Button onClick={handleShow}>
                                <Stack direction='horizontal'>
                                    <i className="bi bi-pencil-square text-light smaller" > </i>
                                    <h6 className='ms-2 mt-2 smallest'> Review</h6>
                                </Stack>
                            </Button>
                            
                            <CreateReview show={show} handleShow={handleShow} handleClose={handleClose}  artist={artist} userId={loggedInUser.id}/>
                        </Col>
                    </Stack>
                    <Image
                        src={artist?.profile_image}
                        max-height={500}
                        width={600}
                    />
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Row>
                        <Col className='mt-5'>
                            <h1 className='text-uppercase fs-1'>{artist?.name}</h1> 
                            <h4 className='fs-5'>{artist?.genre}</h4>
                        </Col>
                        {/* <Stack direction='horizontal' className='d-flex justify-content-center'>
                            <Col xs={6}>
                                <h3 className='text-center'>
                                    <NavLink to={`/artists/${artistId}/reviews`} className='link-offset-2 link-underline link-underline-opacity-0'>
                                        <span className='fs-1 fw-bold'>
                                            {averageStars * 2}
                                        </span> / {' '}
                                        <span className='text-warning'>
                                            10 {' '}
                                        </span>
                                        <i className="bi bi-star-fill text-warning fs-1" ></i>
                                    </NavLink>
                                </h3>
                                <p className='text-center'>
                                <NavLink to={`/artists/${artistId}/reviews`} className='link-offset-2 link-underline link-underline-opacity-0'>
                                    # of Reviews: {numberOfReviews}
                                </NavLink>
                                </p>
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
                                <CreateReview show={show} handleShow={handleShow} handleClose={handleClose}  artist={artist} userId={loggedInUser.id}/>
                            </Col>
                        </Stack> */}
                        {/* <Row>
                            <Col>
                                <p className='text-center'>Purchase tickets here</p>
                                <p className='text-center'>Price ranges</p>
                            </Col>
                        </Row> */}
                    </Row>
                    
                    {/* <Row>
                       <Col>
                            <h3 className='text-center'>Read all reviews</h3>
                            <p className='text-center'>Purchase tickets here</p>
                            <p className='text-center'>Price ranges</p>
                       </Col>
                    </Row> */}
                        
                </Col>
            </Row>
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

        </>
    )
}

export default Artists
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'



function Profile(){

    const[artist, setArtist] = useState({})

    const params = useParams()
    const artistId = params.id

    useEffect(()=>{
        fetch(`/artists/${artistId}`)
        .then(resp=>resp.json())
        .then(data => setArtist(data))
    }, [artistId])


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
                    <img
                        src="https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE"
                        
                        height={500}
                        width={800}
                    />
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Row>
                        <Stack direction='horizontal' className='d-flex justify-content-center'>
                            <Col xs={6}>
                                <h3 className='text-center'>
                                    <span className='fs-1 fw-bold'>
                                        4
                                    </span> / {' '}
                                    <span className='text-warning'>
                                        10 {' '}
                                    </span>
                                    <i class="bi bi-star-fill text-warning fs-1" ></i>
                                </h3>
                                <p className='text-center'># of Reviews: 200</p>
                            </Col>
                           <Col xs={1}></Col>
                            <Col xs={6}>
                                
                                <Button>
                                    <Stack direction='horizontal'>
                                        <i class="bi bi-pencil-square text-light fs-1 me-2" ></i>
                                        <h3 className='mt-3'>Review</h3>
                                    </Stack>
                                </Button>
                                <p className='ms-4'>Write a review</p>
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
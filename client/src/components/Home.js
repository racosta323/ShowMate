import { useState, useEffect } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

import HomeCarousel from "./HomeCarousel"

function Home(){

    const [artists, setArtists] = useState()

    useEffect(()=>{
        fetch('/artists')
        .then (resp=>resp.json())
        .then(data=>setArtists(data))
    }, [])
    

    return(
        <Container>
            <Row></Row>
            <Row className="mt-5">
                <Col>
                    <h2>Welcome</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={8}>
                    <Row className="my-1"></Row>
                    <Row className="my-5">
                        <Col>
                            <HomeCarousel artists={artists}/>
                        </Col>
                    </Row>
                </Col>
                <Col xs={4} className="border my-5">
                    <Row className="my-4"></Row>
                    <Row className="my-4">
                        <Col>
                            Insert Here
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
import NavBar from "./NavBar"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

function Home(){
    return(
        <Container>
            <Row>
                <Col xs={8}>
                    <Row className="my-1"></Row>
                    <Row className="my-5">
                        <Col>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        src="https://www.hollywoodreporter.com/wp-content/uploads/2024/04/COWBOY-CARTER-PRESS-05-H-2024.jpg?w=1296&h=730&crop=1&resize=1000%2C563"
                                    />
                                </Carousel.Item>
                            </Carousel>
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
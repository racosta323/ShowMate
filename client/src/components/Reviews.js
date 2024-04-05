import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import ReviewList from './ReviewList'

function Reviews(){
    return(
        <Container>
            <Row>
                <Row className='my-5'></Row>
                <Row className='my-5'>
                    <Col>
                        {/* first 16:9 ratio chosen */}
                        {/* image is not reactive??? */}
                        <Row>
                            <img
                                src="https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE"  
                                height={300}
                                width={400}
                            />
                        </Row>
                        <Row className='my-4'></Row>
                        <Row className='border border-dark h-100'>
                            <Col>Something here</Col>
                        </Row>
                    </Col>
                    {/* other side */}
                    <Col xs={8} className='ps-5'>
                        <Row>
                            <h1 className='text-uppercase'>Artist Name</h1>
                            <h3>User Reviews</h3>
                        </Row>
                        <ReviewList/>
                        <ReviewList/>
                        <ReviewList/>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}

export default Reviews
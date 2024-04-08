import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import SideProfile from './SideProfile'

function UserProfile(){
    return(
        <Container>
            <Row>
                <Col className='my-5'>
                    <SideProfile/>
                </Col>
                <Col xs={8} className='my-5'>
                    <h2>Reviews</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default UserProfile
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import SideProfile from './SideProfile'
import UserReviews from './UserReviews'


function UserProfile(){
    return(
        <Container>
            <Row>
                <Col className='my-5'>
                    <SideProfile/>
                </Col>
                <Col xs={8} className='my-5 p-4'>
                    <h2>Your Reviews</h2>
                    <hr></hr>
                    <UserReviews/>
                </Col>
            </Row>
        </Container>
    )
}

export default UserProfile
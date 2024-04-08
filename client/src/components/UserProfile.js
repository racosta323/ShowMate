import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import SideProfile from './SideProfile'
import UserReviews from './UserReviews'
import NoUserReview from './NoUserReview'


function UserProfile(){

    const [user, setUser] = useState({})

    const params = useParams()
    const userId = params.id


    useEffect(()=>{
        fetch(`/users/${userId}`)
        .then(resp=>resp.json())
        .then(data => setUser(data))
    }, [userId])

    const renderList = () => {
        if (!user.reviews || user.reviews.length == 0){
           return <NoUserReview/>
        } else {
            return user.reviews.map((review)=>{
                return <UserReviews key={review.id} reviews={review}/>
            })
        }
    }

    

    return(
        <Container>
            <Row>
                <Col className='my-5'>
                    <SideProfile data={user}/>
                </Col>
                <Col xs={8} className='my-5 p-4'>
                    <h2>Your Reviews</h2>
                    <hr></hr>
                    {renderList()}
                </Col>
            </Row>
        </Container>
    )
}

export default UserProfile
import { useState, useEffect } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import MySideProfile from '../MyUserProfile/MySideProfile'
import UserReviews from '../UserProfile/UserReviews'
import NoUserReview from '../UserProfile/NoUserReview'
import EditUserReview from '../EditReview/EditUserReview'


function MyProfile(){

    const [user, setUser] = useState({})

    const params = useParams()
    const userId = params.id

    const { logoutUser } = useOutletContext()
    
    

    useEffect(()=>{
        fetch(`/api/users/${userId}`)
        .then(resp=>resp.json())
        .then(data => setUser(data))
    }, [userId])

    const renderList = () => {
        if (!user.reviews || user.reviews.length == 0){
           return <NoUserReview/>
        } else {
            return user.reviews.map((review)=>{
                // return <EditUserReview key={review.id} reviews={review}/>
                return <UserReviews key={review.id} reviews={review} logoutUser={logoutUser}/>
            })
        }
    }

    

    return(
        <Container>
            <Row>
                <Col className='my-5'>
                    <MySideProfile data={user} logoutUser={logoutUser}/>
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

export default MyProfile
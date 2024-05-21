import { useState, useEffect } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import SideProfile from './SideProfile'
import MySideProfile from '../MyUserProfile/MySideProfile'
import UserReviews from './UserReviews'
import NoUserReview from './NoUserReview'



function UserProfile(){

    const [user, setUser] = useState({})

    const params = useParams()
    const userId = params.id

    const { logoutUser, loggedInUser, artists } = useOutletContext()

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
                return <UserReviews key={review.id} reviews={review} logoutUser={logoutUser} loggedInUser={loggedInUser} userId={userId}/>
            })
        }
    }

    

    return(
        <Container>
            <Row>
                <Col className='my-5'>
                    {userId == loggedInUser.id ? <MySideProfile data={user} logoutUser={logoutUser} loggedInUser={loggedInUser}/> : <SideProfile data={user} logoutUser={logoutUser} loggedInUser={loggedInUser}/>}
                </Col>
                <Col xs={8} className='my-5 p-4'>
                    <h2>{`${user.first_name} ${user.last_name}'s`} Reviews</h2>
             
                    <hr className='my-4'/>
                    {renderList()}
                </Col>
            </Row>
        </Container>
    )
}

export default UserProfile
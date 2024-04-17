import { NavLink } from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'

import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import EditReview from '../EditReview/EditReview'

function UserReviews( { reviews, loggedInUser, userId }){
    const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

    return(
        <>
            <Row className='border border-secondary-subtle rounded mt-4 '>
                <Row >
                    <Col xs={8} className='mt-3'> 
                        <h6 className="ms-3 fw-bold">{reviews.subject}</h6>
                    </Col>
                    <Col> 
                        <h6 className="text-end mt-3">
                            <span className='fw-bold'>
                                {reviews.stars}
                            </span> / {' '}
                            <span className='text-warning'>
                                5 {' '}
                            </span>
                            <i className="bi bi-star-fill text-warning" ></i>
                        </h6>
                        
                    </Col>
                </Row>
                <Row>
                    <h6 className="ms-3 text-secondary">
                        <NavLink to={`/artists/${reviews.artist.id}`} className='link-offset-2 link-underline link-underline-opacity-0'>
                            Artist: {reviews.artist.name}
                        </NavLink> 
                    </h6>
                    <p className="ms-3 text-secondary smallest">Date Posted: {reviews.created_at}</p>
                    <ResponsiveEllipsis
                        text={reviews.review}
                        maxLine={3}
                        ellipsis="..."
                        trimRight
                        basedOn="letters"
                        className="mb-3 ms-3 lh-sm smaller"
                    />
                </Row>
                <Row>
                    <Col>
                        {userId == loggedInUser.id ? 
                            <p className="text-end text-secondary smaller">
                                <NavLink to={`/users/${loggedInUser.id}/edit/${reviews.id}`}>
                                    Edit
                                </NavLink>  
                            </p> : 
                            <></>}
                        {/* <p className="text-end text-secondary smaller">
                            <a href="#">
                                Edit
                            </NavLink>  
                        </p> */}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="smaller">
                            <span  className="fw-bold ms-3">
                                Show: {' '}
                            </span> 
                            {reviews.show} 
                        </p>
                    </Col>
                    <Col>
                        <p className="smaller">
                            <span  className="fw-bold ms-3">
                                Show Location: {' '}
                            </span> 
                            {reviews.location}
                        </p>
                        </Col>
                    <Col>
                        <p className="smaller"> 
                            <span  className="fw-bold ms-3">
                                Show Date: {' '}
                            </span> 
                            {reviews.show_date}
                        </p>
                    </Col>
                </Row>     
            </Row>
        </>
    )
}

export default UserReviews

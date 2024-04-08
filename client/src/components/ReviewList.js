import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import Stack from "react-bootstrap/Stack"

import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'

function ReviewList({ review }){
    const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

    console.log(review)

    return(
        <>
            <Row className='border border-secondary-subtle rounded my-3'>
                <Row >
                    <Col xs={8}> 
                        <Stack direction="horizontal">
                            <i className="bi bi-person-circle mx-3 text-primary"></i>
                            <p className="mt-3 text-primary">{review.user.username}</p>
                        </Stack>
                        <h5 className="ms-3 fw-bold">{review.subject}</h5>
                    </Col>
                    <Col> 
                        <h6 className="text-end mt-3">
                            <span className='fw-bold'>
                                {review.stars}
                            </span> / {' '}
                            <span className='text-warning'>
                                5 {' '}
                            </span>
                            <i className="bi bi-star-fill text-warning" ></i>
                            {/* {' '} see review */}
                        </h6>
                        
                    </Col>
                </Row>
                <Row>
                    <p className="ms-3 text-secondary smaller">Date Posted: {review.created_at}</p>
                    <ResponsiveEllipsis
                        text={review.review}
                        maxLine={3}
                        ellipsis="..."
                        trimRight
                        basedOn="letters"
                        className="mb-3 ms-3 lh-sm"
                    />
                </Row>
                <Row>
                    <Col>
                        <h6 className="text-end text-secondary smaller">See full review (open when clicked)</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="smaller">
                            <span  className="fw-bold ms-3">Show: </span> 
                            {review.show} <br />
                            <span  className="fw-bold ms-3">Show Location: </span> 
                            {review.location} <br />
                            <span  className="fw-bold ms-3">Show Date: </span> 
                            {review.show_date}
                        </p>
                    </Col>
                    
                </Row>        
            </Row>
            
        </>
    )
}

export default ReviewList
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
            <Row className='my-5'>
                <hr></hr>
            </Row>
            
            <Row className='border border-secondary-subtle rounded'>
                <Row >
                    <Col xs={8}> 
                        <Stack direction="horizontal">
                            <i className="bi bi-person-circle mx-3 text-primary"></i>
                            <p className="mt-3 text-primary">Username</p>
                        </Stack>
                        <h4 className="ms-3 fw-bold">{review.subject}</h4>
                    </Col>
                    <Col> 
                        <h6 className="text-end mt-3">
                            <span className='fw-bold'>
                                {review.stars}
                            </span> / {' '}
                            <span className='text-warning'>
                                10 {' '}
                            </span>
                            <i className="bi bi-star-fill text-warning" ></i>
                            {/* {' '} see review */}
                        </h6>
                        
                    </Col>
                </Row>
                <Row className="mb-2">
                    <ResponsiveEllipsis
                        text={review.review}
                        maxLine={3}
                        ellipsis="..."
                        trimRight
                        basedOn="letters"
                        className="mb-3 ms-4"
                    />
                </Row>
                <Row>
                    <Col>
                        <h6><span  className="fw-bold ms-3">Concert:</span> Renaissance</h6>    
                        <h6><span  className="fw-bold ms-3">Concert Location:</span> D.C.</h6>       
                    </Col> 
                    <Col>
                        <h6 className="text-end">See full review (open when clicked)</h6>
                    </Col>
                </Row>        
            </Row>
            
        </>
    )
}

export default ReviewList
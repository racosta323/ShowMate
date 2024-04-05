import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'

import LinesEllipsis from 'react-lines-ellipsis'

function ReviewList(){
    return(
        <>
            <Row className='border border-secondary-subtle rounded'>
                <Row className="mt-3">
                    <Col xs={8}> 
                        <h4 className="ms-3">Subject</h4>
                    </Col>
                    <Col> 
                        <h6 className="text-end">
                            <span className='fw-bold'>
                                4
                            </span> / {' '}
                            <span className='text-warning'>
                                10 {' '}
                            </span>
                            <i class="bi bi-star-fill text-warning" ></i>
                            {/* {' '} see review */}
                        </h6>
                        
                    </Col>
                </Row>
                <Row className="ms-2">
                    <LinesEllipsis
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam quisque id diam vel quam elementum pulvinar etiam. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Dui faucibus in ornare quam viverra orci sagittis eu. Non pulvinar neque laoreet suspendisse interdum consectetur. Facilisis magna etiam tempor orci. Ullamcorper malesuada proin libero nunc. Erat nam at lectus urna duis convallis. Urna nunc id cursus metus aliquam eleifend mi in nulla. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nullam non nisi est sit amet facilisis magna etiam tempor. Eget arcu dictum varius duis at consectetur lorem donec. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat."
                        maxLine={3}
                        ellipsis="..."
                        trimRight
                        basedOn="letters"
                    />
                    <h6 className="text-end">See full review</h6>
                </Row>
                
            </Row>
            <Row className='my-5'>
                <hr></hr>
            </Row>
        </>
    )
}

export default ReviewList
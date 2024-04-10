import { useState } from 'react'

import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'

import CreateReview from "../CreateReview"

function NoReview({ handleClose, handleShow, show }){
    
    return(
        <>
            <Row className='my-1'>
                <hr></hr>
            </Row>
            <Row className='border border-secondary-subtle rounded p-5 mt-5'>
                <Row className="p-2">
                    <Col className="d-flex justify-content-center">
                        <i className="bi bi-exclamation-triangle-fill text-warning fs-2"></i>
                        <h4 className="ms-3 mt-2 fw-bold">No Results Found</h4>
                    </Col>
                </Row> 
                <Row>
                    <Col className="d-flex justify-content-center">
                        <h5>This artist does not have reviews yet</h5>      
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <a href="#" onClick={handleShow}>Write a review?</a>
                        <CreateReview show={show} handleShow={handleShow} handleClose={handleClose}/>
                    </Col>
                </Row>
            </Row>
            
        </>
    )
}

export default NoReview
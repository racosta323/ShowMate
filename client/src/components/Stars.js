import { useState } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'

function Stars(){

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    return(
        <Container >
            <Row >
                <Col className='d-flex justify-content-center'>
                    {[...Array(5)].map((star, index)=>{

                    const currentRating = index+1

                    return (
                        <label>
                            <input
                                as="input"
                                type='radio'
                                name='rating'
                                value={currentRating}
                                onClick={()=> setRating(currentRating)}
                            />
                            <i 
                                className={currentRating <= (hover || rating)? "bi bi-star-fill text-warning fs-1": "bi bi-star star fs-1" } 
                                onMouseEnter={()=> setHover(currentRating)}
                                onMouseLeave={()=> setHover(null)}
                            ></i>
                        </label>
                        )
                    })} 
                </Col>
            </Row>

            <Row >
                <Col className='d-flex justify-content-center'>
                    <p>Choose your overall rating</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Stars
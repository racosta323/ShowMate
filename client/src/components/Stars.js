import { useState } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function Stars( { key, handleClick, rating}){

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
                                key={key}
                                as="input"
                                type='radio'
                                name='stars'
                                onClick={()=> handleClick(currentRating)}
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
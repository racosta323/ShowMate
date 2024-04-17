import { useState, useEffect } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function Stars( { key, handleClick, rating, setFieldValue}){

    const [hover, setHover] = useState(null)
    const [newRating, setNewRating] = useState('')

   useEffect(() => {
        if (newRating != ""){
            setFieldValue('stars', newRating);
        }
    }, [newRating, setFieldValue]);

   const renderStars=()=>{
       return [...Array(5)].map((star, index)=>{

        const currentRating = index+1

        return(
            <label key={key}>
                <input
                    
                    as="input"
                    type='radio'
                    name='stars'
                    onClick={(()=>{
                        setNewRating(currentRating)
                    })}
                />
                <i 
                    className={currentRating <= (hover || newRating)? "bi bi-star-fill text-warning fs-1": "bi bi-star star fs-1" } 
                    onMouseEnter={()=> setHover(currentRating)}
                    onMouseLeave={()=> setHover(null)}
                ></i>
            </label>
        )
    
        })
    }


    return(
        <Container >
            <Row >
                <Col className='d-flex justify-content-center'>
                    {renderStars()}
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
import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Stack from 'react-bootstrap/Stack'

function Trending(){
    return(
        <Col className='p-2 m-1 trending'>

            <Stack direction='horizontal'>
                <h2 className='p-1 fw-bold text-dark'>1</h2>
                <Image
                    src="https://www.hollywoodreporter.com/wp-content/uploads/2024/04/COWBOY-CARTER-PRESS-05-H-2024.jpg?w=1296&h=730&crop=1&resize=1000%2C563
                    "
                    height={50}
                    width={50}
                    roundedCircle
                    className='p-1'
                />
                <h6 className='p-1'>
                    Beyonce <br/>
                    <span className='smaller'>
                        Pop 
                    </span>
                </h6>
                
            </Stack>
        </Col>
    )
}

export default Trending
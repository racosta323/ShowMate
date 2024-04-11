import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Stack from 'react-bootstrap/Stack'

function Trending({ name, genre, rank, image }){
   
    return(
        <Col className='p-2 m-1 trending'>

            <Stack direction='horizontal'>
                <h2 className='p-1 fw-bold text-dark'>{rank}</h2>
                <Image
                    src={image}
                    height={50}
                    width={50}
                    roundedCircle
                    className='p-1'
                />
                <h6 className='p-1'>
                    {name} <br/>
                    <span className='smaller'>
                        {genre} 
                    </span>
                </h6>
                
            </Stack>
        </Col>
    )
}

export default Trending
import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Stack from 'react-bootstrap/Stack'

function Trending({ name, genre, rank, image, id }){
   
    return(
        <Col className='p-2 m-1 trending'>
            <a href={`/artists/${id}`} className='link-dark link-underline link-underline-opacity-0 link-opacity-100'>
                <Stack direction='horizontal'>
                    <h1 className='p-1 fw-bold text-dark'>{rank}</h1>
                    <Image
                        src={image}
                        height={50}
                        width={50}
                        roundedCircle
                        className='p-1'
                    />
                    <h5 className='p-1 fw-bold'>
                        {name} <br/>
                        <span className='smaller fw-normal'>
                            {genre} 
                        </span>
                    </h5>
                    
                </Stack>
            </a>
        </Col>
    )
}

export default Trending
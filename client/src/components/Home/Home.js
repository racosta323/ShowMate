import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

import HomeCarousel from "./HomeCarousel"
import Reviews from '../Reviews/Reviews'
import Trending from './Trending'


function Home(){

    const { logoutUser, loggedInUser } = useOutletContext()
    // console.log(loggedInUser)
   
    const [artists, setArtists] = useState()
    
    useEffect(()=>{
        fetch('/artists')
        .then (resp=>resp.json())
        .then(data=>setArtists(data))
    }, [])
    
    console.log(artists)

    // const topArtists = () => {
        
    //        return artists?.map((artist)=>{
    //             let sumOfStars = ()=>{
    //                 if(artist.reviews.length > 0){
    //                     return artist.reviews.reduce((accumulator, currentValue)=>{
                            
    //                         return accumulator + currentValue.stars
                         
    //                      }, 0)
    //                  }
    //             }

    //             let totalStars = artists?.map((artist)=>{
    //                 // console.log(artist.reviews.length)
    //                 return artist.reviews
    //             })

    //             if(sumOfStars()) {
                    
    //                 let averageStars = sumOfStars() / totalStars.length
    //                 return averageStars
    //             }
               
    //         })
    // }

    // let renderArtists = topArtists()?.map(review=>console.log(review))

    console.log(topArtists())

    return(
        <Container>
            <Row></Row>
            <Row className="mt-5">
                <Col>
                    <h2>Welcome, {loggedInUser.first_name}!</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={8}>
                    <Row className="my-1"></Row>
                    <Row className="my-5">
                        <Col>
                            <HomeCarousel artists={artists}/>
                        </Col>
                    </Row>
                </Col>
                <Col xs={4} className="my-5 trending-container">
                    <Row className="my-4">
                        <Col>
                            <h3>Trending Artists</h3>
                        </Col>
                    </Row>
                    <Trending/>
                    <Trending/>
                    <Trending/>
                    <Trending/>
                    <Trending/>
                   <Row>
                        <Col>
                            <p className='smaller p-2'>Sorted by highest rating</p>
                        </Col>
                   </Row>

                </Col>
            </Row>
        </Container>
    )
}

export default Home
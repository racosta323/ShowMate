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
    
    // console.log(artists)



    // const avgStars = artists?.filter((artist)=>{
    //     if(artist.reviews.length > 0){
    //         return artist.reviews.reduce((total, amount, index, arry)=>{
    //             total += amount.stars
    //             if (index === arry.length-1){
    //                 return total/arry.length
    //             } else{
    //                 return total
    //             }
    //         }, 0)
    //     }

    // })

    const avgStars = artists?.filter((artist) => {
        return artist.reviews.length > 0;}).map((artist) => {
            const totalStars = artist.reviews.reduce((total, review) => {
                return total + review.stars;
            }, 0);
            return {artist, avgStars: totalStars / artist.reviews.length};
    });


    avgStars?.sort((a, b) => {
        return b.avgStars - a.avgStars; 
    });


    console.log(avgStars)

    const renderArtists = avgStars?.slice(0,5).map((artist)=>{
        // console.log(artist.artist.indexOf(artist.artist.name))
        return(

            <Trending key={artist.artist.id} name={artist.artist.name} genre={artist.artist.genre} rank={avgStars.indexOf(artist)+1} image={artist.artist.profile_image}/>
        )
    })
    

  

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
                    {renderArtists}
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
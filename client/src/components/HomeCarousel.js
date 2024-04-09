import NavBar from "./NavBar"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

function HomeCarousel({ artists }){

    console.log(artists)

    const renderArtists = artists ? artists.map((artist)=>{
        console.log(artist)
        return(
            <Carousel.Item>
                <img
                    src={artist.profile_image ? artist.profile_image : console.log("add photo")}
                    text=""
                    max-height={500}
                    width={800}
                />
                <Carousel.Caption>
                    <h3>{artist.name}</h3>
                    <p>Click to see reviews.</p>
                </Carousel.Caption>
            </Carousel.Item>
        ) 
    }) : null


    return(
        <Carousel>
            {renderArtists}
        </Carousel>
        
    )
}

export default HomeCarousel
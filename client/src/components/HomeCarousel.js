import { useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

function HomeCarousel({ artists }){

    const navigate = useNavigate()

    const renderArtists = artists ? artists.map((artist)=>{

        return(
            <Carousel.Item key={artist.id}>
                <Row>
                    <img
                        src={artist.profile_image ? artist.profile_image : console.log("add photo")}
                        text=""
                        height={500}
                        width={800}
                        onClick={()=>{
                            navigate(`/artists/${artist.id}`)
                        }}
                    />
                </Row>
                
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
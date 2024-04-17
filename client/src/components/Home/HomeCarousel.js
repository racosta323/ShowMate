import { useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel'

import { shuffle } from 'lodash'

function HomeCarousel({ artists }){

    const navigate = useNavigate()

    const shuffledArtists= shuffle(artists)

    const renderArtists = shuffledArtists?.slice(0,10).map((artist)=>{

        return(
            <Carousel.Item key={artist.id}>
                <Row>
                    <img
                        src={artist?.profile_image}
                        alt={`Image of ${artist?.name}`}
                        text=""
                        height={500}
                        width={800}
                        onClick={()=>{
                            navigate(`/artists/${artist?.id}`)
                        }}
                    />
                </Row>
                
                <Carousel.Caption>
                    <h3>{artist.name}</h3>
                    <p>Click to see reviews.</p>
                </Carousel.Caption>
            </Carousel.Item>
        ) 
    })


    return(
        <Carousel>
            {renderArtists}
        </Carousel>
        
    )
}

export default HomeCarousel
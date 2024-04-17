import { useNavigate } from 'react-router-dom'

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from 'react-bootstrap/Button'
import Stack from "react-bootstrap/esm/Stack"

function RecentArtists({ artist }){

    const navigate = useNavigate()

    console.log(artist)

    // artist?.sort((a,b)=>{
    //     console.log(a,b)
    // })

    return(
        <Row className="mt-2">
            <Col 
                as="button" 
                className="text-light border rounded" 
                style={{background: "#395A7F"}}
                onClick={()=>{
                    navigate(`/artists/${artist.id}`)
                }}
            >
                <Stack direction='horizontal'>
                    <Col>
                        <p className="text-start fs-5 fw-bold lh-1 m-2">{artist.name} <br/> 
                            <span className="smaller fw-normal text-light">
                                {artist.genre}
                            </span> 
                        </p>
                    </Col>
                    <Col>
                        <i className="bi bi-boombox fs-2"></i>
                    </Col>
                </Stack>
            </Col>
    
        </Row>
    )
}

export default RecentArtists
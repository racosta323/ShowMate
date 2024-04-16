import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from 'react-bootstrap/Button'
import Stack from "react-bootstrap/esm/Stack"

function RecentArtists(){
    return(
        <Row>
            <Col as="button" className="text-danger border border-danger bg-white">
                <p className="text-start fs-4 fw-bold lh-1 pt-1">Beyonce <br/> 
                    <span className="fs-6 fw-normal">
                        Pop
                    </span> 
                </p>
                
            </Col>
        </Row>
    )
}

export default RecentArtists
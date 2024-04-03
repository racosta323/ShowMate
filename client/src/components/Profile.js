import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function Profile(){

    return(
        <>
            <Row className='mt-5'>
                <h4>Genre</h4>
                <h1>TITLE</h1> 
            </Row>
            <Row>
                <Col xs={8}>
                    {/* first 16:9 ratio chosen */}
                    <img
                        src="https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE"
                        height={500}
                        width={800}
                        alt
                    />
                    <h2>Concert Info</h2>
                    <p>Some information about the show</p>
                    
                </Col>
                <Col>
                    <Row></Row>
                    <Row>
                        <h3>X of Y Stars - an icon?</h3>
                        <h3>Write a review</h3>
                    </Row>
                    <Row>
                        <p>Purchase tickets here</p>
                        <p>Price ranges</p>
                    </Row>
                    
                </Col>
            </Row>
            
        </>
    )
}

export default Profile
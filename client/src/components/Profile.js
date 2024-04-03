import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

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
                    {/* image is not reactive??? */}
                    <img
                        src="https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE"
                        height={500}
                        width={800}
                        alt
                    />
                    <h2>Concert Info</h2>
                    <p>Some information about the show</p>
                    
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Stack className='d-flex justify-content-center '>
                        <h3 className='text-center'>X of Y Stars - an icon?</h3>
                        <h3 className='text-center'>Write a review</h3>
                        <p className='text-center'>Purchase tickets here</p>
                        <p className='text-center'>Price ranges</p>
                    </Stack>
                    {/* <Row></Row>
                    <Row>
                        <Col className='d-flex justify-content-center'>
                            <h3>X of Y Stars - an icon?</h3>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex justify-content-center'>
                            <h3>Write a review</h3>
                            <p>Purchase tickets here</p>
                            <p>Price ranges</p>
                        </Col>
                    </Row> */}
                    
                </Col>
            </Row>
            
        </>
    )
}

export default Profile
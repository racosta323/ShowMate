import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'



function Profile(){

    

    return(
        <Container>
            <Row >
                <Col className='mt-5'>
                    <h4>Genre</h4>
                    <h1>ARTIST NAME</h1> 
                </Col>
            </Row>
            <Row>
                <Col xs={8}>
                    {/* first 16:9 ratio chosen */}
                    {/* image is not reactive??? */}
                    <img
                        src="https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE"
                        height={500}
                        width={800}
                    />
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Stack className='d-flex justify-content-center '>
                        <h3 className='text-center'>X of Y Stars - an icon?</h3>
                        <h3 className='text-center'>Write a review</h3>
                        <p className='text-center'>Purchase tickets here</p>
                        <p className='text-center'>Price ranges</p>
                    </Stack>
                </Col>
                <Row className='mt-5'>
                    <Col xs={8}>
                        <h2>User Uploads</h2>
                        <p>Image Carousel</p>
                    </Col>
                    <Col className='py-5'>   
                        <Row className='bg-body-secondary p-5 mt-4'>
                            <h2>Something could go here</h2>
                        </Row>
                    </Col>
                </Row>
            </Row>

        </Container>
    )
}

export default Profile
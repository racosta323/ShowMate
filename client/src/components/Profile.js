import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'



function Profile(){

    

    return(
        <>
            <Row>
                <h4 className='mt-5'>Genre</h4>
                <h1>ARTIST NAME</h1> 
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
                    
                </Col>
            </Row>
            
        </>
    )
}

export default Profile
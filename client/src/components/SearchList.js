import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function SearchList(){
    return(
        <Container>
            <Row className='my-2 bg-body-secondary border-start border-5 border-danger p-3'>
                <Col>
                    <img
                        src="https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE"
                        height={150}
                        width={200}
                    />
                </Col>
                <Col>
                    <h3>Name</h3>
                </Col>
                <Col>
                
                </Col>
            </Row>
        </Container>
    )
}

export default SearchList
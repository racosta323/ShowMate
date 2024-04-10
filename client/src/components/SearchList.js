import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

function SearchList({ name, genre }){
    return(
        <Container>
            <Row className='my-2 bg-body-secondary border-start border-5 border-danger p-2'>
                <Col>
                    <Image
                        src="https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE"
                        height={100}
                        width={100}
                        roundedCircle
                    />
                </Col>
                <Col xs={10}>
                    <h2 className='fs-4 fw-bold mt-3'>{name}</h2>
                    <p className='fs-7'>{genre}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchList
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

function SearchList(){
    return(
        <Container>
            <Row className='my-2 bg-body-secondary p-2'>
                <Col>
                    <h2 className='fs-4 fw-bold mt-3'>No Results</h2>
                    <p className='fs-7'>Create your own profile?</p>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchList
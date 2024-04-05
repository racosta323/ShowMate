import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function SearchList(){
    return(
        <Container>
            <Row className='my-2 bg-body-secondary border-start border-5 border-danger p-3'>
                <li>List</li>
            </Row>
        </Container>
    )
}

export default SearchList
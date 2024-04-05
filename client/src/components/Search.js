import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import SearchList from './SearchList'

function Search(){

    return(
        <Container>
            <Row className='m-5'></Row>
            <Row>
                <Col>
                    <h2>Search 'Search Term'</h2>
                </Col>
            </Row>
            <Row>
                <SearchList/>
            </Row>
        </Container>
    )
}

export default Search
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


import SearchList from './SearchList'

function Search(){

    return(
        <Container className='py-5'>
                <Row className='py-5'>
                    <Col xs={8}>
                        <h2>Search 'Search Term'</h2>
                        <hr></hr>
                        <SearchList/>
                        <SearchList/>
                        <SearchList/>
                        <SearchList/>
                    </Col>
                    <Col className='py-5'>   
                        <Row className='bg-body-secondary p-5'>
                            <h2>Something could go here</h2>
                        </Row>
                    </Col>
                </Row>
               
        </Container>
    )
}

export default Search
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


import SearchList from './SearchList'
import NoResults from './NoResults'

function Search(){

    return(
        <Container className='py-5'>
                <Row className='py-5'>
                    <Col xs={8}>
                        <h2 className='fs-1'>Search 'Search Term'</h2>
                        <hr className='mb-5'></hr>
                        
                        <NoResults/>
                        <p className='text-end'>Don't see what you're looking for? </p>
                        <p className='text-end fs-4 mb-5'>Create a profile (ICON)</p>
                    </Col>
                    <Col className='py-5'>   
                        <Row className='bg-body-secondary p-5 mt-4'>
                            <h2>Something could go here</h2>
                        </Row>
                    </Col>
                </Row>
               
        </Container>
    )
}

export default Search
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import SearchBar from './SearchBar'

// import SearchBarContainer from './SearchBarContainer';

function NavBar (){
    return(
        
            <Navbar 
                expand="lg" 
                bg="danger"
                data-bs-theme="dark"
                className='mt-3'
            >
               <Container>
                <Col>
                        <Navbar.Brand href="#home" className='mx-3 fs-3'>ShowMate</Navbar.Brand>
                    </Col>
            
                    <Col xs={4}>
                        <SearchBar/>
                        {/* <SearchBarContainer/> */}
                    </Col>
                    <Col>
                        <Nav>
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>Dashboard</Nav.Link>
                        </Nav>
                    </Col>
                    <Col className='d-flex flex-row-reverse mx-2'>
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Col>
               </Container>
            </Navbar>
   
     
    )
}

export default NavBar
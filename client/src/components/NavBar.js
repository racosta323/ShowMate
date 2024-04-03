import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col';

import SearchBarContainer from './SearchBarContainer';

function NavBar ({ setResults }){
    return(
        
            <Navbar 
            // expand="lg" 
            bg="danger"
            data-bs-theme="dark"
            className='my-2'
            >
                <Col>
                    <Navbar.Brand href="#home" className='mx-3'>Navbar with text</Navbar.Brand>
                </Col>
            
                    <Col xs={4}>
                        <SearchBarContainer/>
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
                

            
            </Navbar>
     
    )
}

export default NavBar
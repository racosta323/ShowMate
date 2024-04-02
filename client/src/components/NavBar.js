import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

function NavBar (){
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
                        <Form inline>
                            <Row>
                                <Col xs={8}>
                                    <Form.Control
                                    type="text"
                                    placeholder="Search for shows across the US"
                                    className="mr-sm-2"
                                    data-bs-theme="light"
                                    />
                                </Col>
                                <Col>
                                    <Button type="submit">Submit</Button>
                                </Col>
                            </Row>
                        </Form>
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
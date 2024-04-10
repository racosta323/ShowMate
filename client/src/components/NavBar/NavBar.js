import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack'

import SearchBar from './SearchBar'

// import SearchBarContainer from './SearchBarContainer';

function NavBar({ setLoggedInUser, loggedInUser, logoutUser }){

    function toggleClick(){
        console.log(loggedInUser)
        setLoggedInUser((current)=> !current)
    }

    function handleLogout(){
        fetch('/logout', {
            method: 'DELETE'
        }).then (resp=>{
            if(resp.ok){
                logoutUser()
            }
        })
    }


    return(
        
            <Navbar 
                expand="lg" 
                bg="danger"
                data-bs-theme="dark"
                className='mt-3'
                collapseOnSelect
            >
               <Container>
                    <Col>
                        <Navbar.Brand href="/" className='mx-3 fs-3'>ShowMate</Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    </Col>
            
                    <Col xs={4}>
                        <SearchBar/>
                        {/* <SearchBarContainer/> */}
                    </Col>
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Col>
                            <Nav>
                                <Nav.Link href="/" className='text-light ms-5'>Home</Nav.Link>
                                {loggedInUser ? <> 
                                    <Nav.Link href={`/users/${loggedInUser.id}`} className='text-light ms-3'>
                                        Your Profile</Nav.Link>
                                    </> : 
                                    <></>}
                            </Nav>
                        </Col>
                        <Col className='d-flex flex-row-reverse mx-2'>
                        {loggedInUser ? 
                            <>
                                <Navbar.Text>
                                    <Stack direction='horizontal'>
                                        Signed in as: {loggedInUser.first_name}
                                        <i className="bi bi-person-fill fw-bold fs-5 p-2 text-light"></i>
                                        <NavDropdown id="nav-dropdown">
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="" onClick={handleLogout}>
                                                Logout
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        
                                    </Stack>
                                </Navbar.Text>
                            </> : 
                            <>
                                <Navbar.Text>
                                    <a href= "" onClick={toggleClick} className='link-underline link-underline-opacity-0 fw-bold smaller'>LOGIN / SIGNUP</a>
                                </Navbar.Text>
                            </>
                        }    
                        </Col>
                    </Navbar.Collapse>
               </Container>
            </Navbar>
   
     
    )
}

export default NavBar
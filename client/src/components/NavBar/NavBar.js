import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack'
import SearchBar from './SearchBar'

import { NavLink } from 'react-router-dom'

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
                data-bs-theme="dark"
                className='mt-3'
                collapseOnSelect
                sticky='top'
                style={{background:"#d60000"}}
            >
               <Container>
                    <Col>
                        <Navbar.Brand as={NavLink} to="/" className=' fs-4'>ShowMate</Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    </Col>
            
                    <Col xs={4}>
                        <SearchBar/>
                        {/* <SearchBarContainer/> */}
                    </Col>
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Col>
                            <Nav>
                                <Nav.Link as={NavLink} to="/" className='text-light ms-5'>Home</Nav.Link>
                                {loggedInUser ? 
                                    <> 
                                        <Nav.Link as={NavLink} to={`/users/${loggedInUser.id}`} className='text-light ms-3'>
                                            Your Profile
                                        </Nav.Link>
                                        <Nav.Link as={NavLink} to={`/reviews`} className='text-light ms-3'>
                                            Reviews
                                        </Nav.Link>
                                    </> : 
                                    <></>}
                            </Nav>
                        </Col>
                        <Col className='d-flex flex-row-reverse mx-5'>
                        {loggedInUser ? 
                            <>
                                <Navbar.Text className='smaller'>
                                    <Stack direction='horizontal'>
                                        <p className='mt-2 text-light'>
                                            Signed in as:{'  '}
                                            <span className='fw-bold'>
                                                {loggedInUser.first_name}
                                            </span>
                                        </p>
                                        <i className="bi bi-person-fill fw-bold fs-5 pb-3 ms-2 text-light"></i>
                                        <NavDropdown id="nav-dropdown" className='ms-2 pb-2' style={{width: "50px"}}>
                                                <Stack 
                                                    direction='horizontal' 
                                                    as={NavLink}
                                                    to={`/users/${loggedInUser.id}` }
                                                    className='link-underline link-underline-opacity-0'
                                                    >
                                                        <i className="bi bi-person-circle ps-3"></i>
                                                        <p className='smaller ps-3 mt-3'>YOUR PROFILE</p>
                                                </Stack>
                                            
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item
                                                    as={NavLink} 
                                                    to="" 
                                                    onClick={handleLogout} 
                                                    className='smaller'
                                                >
                                                    Logout
                                                </NavDropdown.Item>
                                      
                                        </NavDropdown>
                                    </Stack>
                                </Navbar.Text>
                            </> : 
                            <>
                                <Navbar.Text>
                                    <NavLink to = "" onClick={toggleClick} className='link-underline link-underline-opacity-0 fw-bold smaller'>LOGIN / SIGNUP</NavLink> 
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
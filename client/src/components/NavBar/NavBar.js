import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack'
import SearchBar from './SearchBar'

import { NavLink, useNavigate } from 'react-router-dom'
import Auth2 from './Auth';

function NavBar({ setLoggedInUser, loggedInUser, logoutUser }){

    const navigate = useNavigate()

    function handleClick(){
        if(!loggedInUser){
            navigate('/login')
            window.location.reload()
        }
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
       <Row>
            <Navbar 
                expand="lg" 
                data-bs-theme="dark"
                collapseOnSelect
                sticky='top'
                style={{background:"#d60000"}}
                className='ps-3'
            >
                <Col>
                    <Navbar.Brand as={NavLink} to="/" className='text-center fs-4 p-2 ms-2'>ShowMate</Navbar.Brand>
                    <p className='text-light text-center smallest'>Where Every Show Gets its Encore!</p>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                </Col>
        
                <Col className='ms-3' xs={5}>
                    <SearchBar/>
                    {/* <SearchBarContainer/> */}
                </Col>
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Col>
                        <Nav>
                            <Nav.Link as={NavLink} to="/" className='text-light ms-2 mt-1'>
                                <p className="smaller">
                                    Home
                                </p>
                            </Nav.Link>
                            {loggedInUser ? 
                                <> 
                                    <Nav.Link as={NavLink} to={`/users/${loggedInUser.id}`} className='text-light ms-3 mt-1'>
                                        <p className="smaller">
                                            Your Profile
                                        </p>
                                    </Nav.Link>
                                    <Nav.Link as={NavLink} to={`/reviews`} className='text-light ms-3 mt-1'>
                                        <p className="smaller">
                                            Reviews
                                        </p>
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
                                <NavLink  onClick={handleClick} className='link-underline link-underline-opacity-0 fw-bold smaller'>LOGIN / SIGNUP</NavLink> 
                            </Navbar.Text>
                        </>
                    }    
                    </Col>
                </Navbar.Collapse>
            </Navbar>
        </Row>
     
    )
}

export default NavBar
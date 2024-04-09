import { useState } from 'react'

import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal'
import { useFormik } from 'formik'

function Auth(){

    const [show, setShow] = useState(true);
    const [signup, setSignup] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //NOTING THIS!!!!!
    function toggleSignup() {
        setSignup((currentSignup) => !currentSignup)
    }

    const formik = useFormik({
        initialValues:{
            id: '',
            firstName: '',
            lastName: '',
            username: '',
            password: ''
        }
    })

    return(
        <Container>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton />
                <Modal.Body>
                    <Row className="px-4">
                        <Col className="mb-4">
                            <h2 className="text-center">Login or Signup for ShowMate</h2>
                        </Col>
                    </Row>
                    <Row className="px-5">
                        <Col>
                            <Form>
                            {signup && <>
                                    <Form.Group>
                                        <Form.Label className='fw-bold smaller'>First Name</Form.Label>
                                        <Form.Control
                                            as='input'
                                            type='firstName'
                                            name='firstName'
                                            placeholder='Enter your first name'
                                            required
                                            autoFocus
                                            className='border-top-0 border-end-0 border-start-0 rounded-0 smaller'
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className='fw-bold smaller pt-4'>Last Name</Form.Label>
                                        <Form.Control
                                            as='input'
                                            type='lastName'
                                            name='lastName'
                                            placeholder='Enter your last name'
                                            required
                                            className='border-top-0 border-end-0 border-start-0 rounded-0 smaller mb-4'
                                        />
                                    </Form.Group>
                                </>}
                                <Form.Group>
                                    <Form.Label className='fw-bold smaller'>Username</Form.Label>
                                    <Form.Control
                                        as='input'
                                        type='username'
                                        name='username'
                                        placeholder='Enter your username'
                                        required
                                        autoFocus
                                        className='border-top-0 border-end-0 border-start-0 rounded-0 smaller mb-3'
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className='fw-bold smaller'>Password</Form.Label>
                                    <Form.Control
                                        as='input'
                                        type='password'
                                        name='password'
                                        placeholder='Enter your password'
                                        required
                                        className='border-top-0 border-end-0 border-start-0 rounded-0 smaller'
                                    />
                                </Form.Group>
                                {signup && <>
                                    <Form.Group>
                                        <Form.Label className='fw-bold smaller pt-4 mt-2'>Password Confirmation</Form.Label>
                                        <Form.Control
                                            as='input'
                                            type='passwordConfirmation'
                                            name='passwordConfirmation'
                                            placeholder='Confirm your password'
                                            required
                                            className='border-top-0 border-end-0 border-start-0 rounded-0 smaller'
                                        />
                                    </Form.Group>
                                </>}
                            <Row >
                                <Button className="mt-3 bg-dark">Submit</Button>
                            </Row>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {signup ? <>
                                <p className="text-center">Already have an account? </p>
                                <p className="text-center">
                                    <a href="#"  onClick={toggleSignup}>
                                        Login instead
                                    </a>
                                </p>
                            </> : <>
                                <p className="text-center">Don't have an account yet? </p>
                                <p className="text-center">
                                    <a href="#"  onClick={toggleSignup}>
                                        Sign up for an account
                                    </a>
                                </p>
                            </> }
                            {/* <p className="text-center">Don't have an account yet? </p>
                            <p className="text-center">
                                <a href="#"  onClick={toggleSignup}>
                                    Sign up for an account
                                </a>
                            </p> */}
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default Auth
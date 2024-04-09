import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal'

import { useState } from 'react'

function Auth(){

    const [show, setShow] = useState(true);
    const [signup, setSignup] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //NOTING THIS!!!!!
    function toggleSignup() {
        setSignup((currentSignup) => !currentSignup)
    }


    return(
        <Container>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="p-5">
                <Modal.Header closeButton />
                <Modal.Body>
                    <Row className="p-4">
                        <Col>
                            <h2 className="text-center">Login or Signup for ShowMate</h2>
                        </Col>
                    </Row>
                    <Row className="px-5 py-3">
                        <Col>
                            <Form>
                                <Form.Group>
                                    <Form.Label className='fw-bold smaller'>Username</Form.Label>
                                    <Form.Control
                                        as='input'
                                        type='username'
                                        name='username'
                                        placeholder='Enter your username'
                                        required
                                        autoFocus
                                        className='border-top-0 border-end-0 border-start-0 rounded-0 smaller mb-4'
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
                                        <Form.Label className='fw-bold smaller pt-4 mt-2'>Password confirmation</Form.Label>
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
                                <Button className="mt-5 bg-dark">Submit</Button>
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
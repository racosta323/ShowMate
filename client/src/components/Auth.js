import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal'

import { useState } from 'react'

function Auth(){

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <Container>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="p-5">
                <Modal.Header closeButton />
                <Modal.Body>
                    <Row className="p-5">
                        <Col>
                            <h2 className="text-center">Login or Signup for ShowMate</h2>
                        </Col>
                    </Row>
                    <Row className="p-5">
                        <Col className="mb-5">
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
                                        type='username'
                                        name='username'
                                        placeholder='Enter your password'
                                        required
                                        autoFocus
                                        className='border-top-0 border-end-0 border-start-0 rounded-0 smaller'
                                    />
                                </Form.Group>
                            <Row className="p-5">
                                <Button className="mt-5 bg-dark">Submit</Button>
                            </Row>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default Auth
import { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function CreateProfile(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Row >
                <Col className="d-flex justify-content-end">
                    <Button variant="dark" onClick={handleShow}>
                        Launch demo modal
                    </Button>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Create an Artist Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Artist Name</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="name"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput2"
                    >
                        <Form.Label>Genre</Form.Label>
                        <Form.Control
                            type='input'
                            placeholder='genre'
                        />
                    </Form.Group>
                    
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="dark" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CreateProfile
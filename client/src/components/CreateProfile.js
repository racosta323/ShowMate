import { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Formik } from 'formik'

function CreateProfile(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   const formik = useFormik({
        initialValues: {
            name: '',
            genre: ''
        },
        onSubmit: (values) => {
            fetch('/artists',{
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(values)
            }).then (resp=> {
                if(resp.ok){
                    resp.json().then(artist=>{
                        console.log(artist)
                    })
                } else {
                    console.log('errors? handle them')
                }
            })
        }

   })

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
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Artist Name</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
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
                            onChange={formik.handleChange}
                            value={formik.values.genre}
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
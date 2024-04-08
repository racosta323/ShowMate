import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useFormik } from 'formik'


function CreateProfile(){

    const navigate = useNavigate()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
            genre: '',
            image: ''
        },
        onSubmit: async (values) => {
            try{
                const artistResponse = await fetch('/artists',{
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify(values, null, 2)
                })
                if(artistResponse.status ===201){
                    const artistData = await artistResponse.json()
                    formik.values.id = artistData.id
                }
                // .then (resp=> {
                //     if(resp.ok){
                //         resp.json().then(artist=>{
                //             console.log(artist)
                //         })
                //     } else {
                //         console.log('errors? handle them')
                //     }
                // })
            } catch(error){

            }
            navigate(`/profile/${formik.values.id}`)
            window.location.reload()
        }
   })

    return(
        <>
            <Row >
                <Col className="d-flex justify-content-end">
                    <Button variant="dark" onClick={handleShow}>
                        Create a Profile
                    </Button>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Create an Artist Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Artist Name</Form.Label>
                        <Form.Control
                            as="input"
                            type="name"
                            name='name'
                            placeholder="Artist Name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId="genre"
                    >
                        <Form.Label>Genre</Form.Label>
                        <Form.Control
                            as="input"
                            type='genre'
                            placeholder='Genre'
                            name='genre'
                            onChange={formik.handleChange}
                            value={formik.values.genre}
                        />
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId="image"
                    >
                        <Form.Label>Image Link</Form.Label>
                        <Form.Control
                            as="input"
                            type='text'
                            placeholder='Paste an image link'
                            name='image'
                            onChange={formik.handleChange}
                            value={formik.values.image}
                        />
                    </Form.Group>
                    
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="dark" onClick={formik.handleSubmit}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CreateProfile
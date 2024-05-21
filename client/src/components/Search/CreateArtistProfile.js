import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Formik } from 'formik'
import * as Yup from 'yup'


function CreateProfile(){

    const navigate = useNavigate()

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const artistSchema = Yup.object().shape({
        name: Yup.string()
            .min(1, "Too short")
            .max(50, "Too long")
            .required('Required'),
        genre: Yup.string()
            .notOneOf(["Choose genre...."], "Please select a valid genre")
            .min(1, "Too short")
            .max(50, "Too long")
            .required('Required'),
        image: Yup.string()
            .url("Invalid URL Format")
            .required("Required")
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
            <Modal show={show} onHide={()=>{
                    setShow(false)
                }} 
                backdrop="static" 
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create an Artist Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Formik
                    validationSchema={artistSchema}
                    initialValues={{
                        id: '',
                        name: '',
                        genre: '',
                        image: ''
                    }}
                    onSubmit={async (values) => {
                        try{
                            const artistResponse = await fetch('/api/artists',{
                                method: 'POST',
                                headers: {
                                    "Content-Type": 'application/json'
                                },
                                body: JSON.stringify(values, null, 2)
                            })
                            if(artistResponse.status ===201){
                                const artistData = await artistResponse.json()
                                values.id = artistData.id
                            }
                        } catch(error){
            
                        }
                        navigate(`/artists/${values.id}`)
                        window.location.reload()
                    }}
                >
                    {({ values, handleSubmit, handleChange, touched, errors, handleBlur, resetForm})=>(
                        <Form noValidate>
                           
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Artist Name</Form.Label>
                                <Form.Control
                                    as="input"
                                    type="name"
                                    name='name'
                                    placeholder="Artist Name"
                                    onChange={handleChange}
                                    required
                                    autoFocus
                                    value={values.name}
                                    isValid={touched.name && !errors.name}
                                    isInvalid={!!errors.name}
                                />
                                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                 <Form.Control.Feedback type="invalid">
                                    {errors.name}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="genre"
                            >
                                <Form.Label>Genre</Form.Label>
                                <Form.Select
                                    // as="input"
                                    defaultValue="Choose...."
                                    type='genre'
                                    placeholder='Genre'
                                    name='genre'
                                    onChange={handleChange}
                                    value={values.genre}
                                    isValid={touched.genre && !errors.genre}
                                    isInvalid={!!errors.genre}
                                    onBlur={handleBlur}
                                >
                                    <option>Choose genre....</option>
                                    <option>Country</option>
                                    <option>Electronic / House</option>
                                    <option>Hip Hop</option>
                                    <option>Jazz</option>
                                    <option>Pop</option>
                                    <option>R&B & Soul</option>
                                    <option>Rock</option>
                                    <option>Metal</option>
                                    <option>Punk</option>
                                    <option>Unsure</option>
                                    <option>Other</option>
                                </Form.Select>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {errors.genre}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group
                            className="mb-5"
                            controlId="image"
                            >
                                <Form.Label>Image Link</Form.Label>
                                <Form.Control
                                    as="input"
                                    type='text'
                                    placeholder='Paste an image link'
                                    name='image'
                                    onChange={handleChange}
                                    value={values.image}
                                    isValid={touched.image && !errors.image}
                                    isInvalid={!!errors.image}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {errors.image}
                                </Form.Control.Feedback>
                            </Form.Group>
                            
                            <hr className='my-3 text-secondary'/>
                           <Col className='d-flex justify-content-end'>
                            <Button className='m-2' variant="danger" 
                                onClick={()=>{
                                    setShow(false)
                                    resetForm({
                                        values: {
                                            name: "",
                                            genre: "Choose genre....",
                                            image: ""
                                        }
                                    })
                                }}
                            >
                                    Close
                                </Button>
                                <Button className='m-2' variant="dark" onClick={handleSubmit}>
                                    Submit Artist
                                </Button>
                           </Col>
            
                        </Form>
                    )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CreateProfile

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal'
import { useFormik } from 'formik'


function Auth({ setUser }){

    const navigate = useNavigate()

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
        },
        onSubmit: async (values) => {
            try{
                const endpoint = signup ? '/users' : '/login'
                const userResponse = await fetch(
                    endpoint,{
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(values, null, 2)
                    })
                    .then (resp=>{
                        if (resp.ok){
                            resp.json().then(user=>{
                                setUser(user)
                            })
                        } else {
                            console.log('errors? handle them')
                        }
                    })
            } catch(error){

            }
        } 
    })

    return(
        <Container>
            <Modal show={show} onHide={handleClose} backdrop="static" >
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
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
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
                                        onChange={formik.handleChange}
                                        value={formik.values.lastName}
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
                                    onChange={formik.handleChange}
                                    value={formik.values.username}
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
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    required
                                    className='border-top-0 border-end-0 border-start-0 rounded-0 smaller'
                                />
                            </Form.Group>
                            {signup && <>
                                <Form.Group>
                                    <Form.Label className='fw-bold smaller pt-4 mt-2'>Password Confirmation</Form.Label>
                                    <Form.Control
                                        as='input'
                                        type='password'
                                        name='passwordConfirmation'
                                        placeholder='Confirm your password'
                                        // value={formik.values.name}
                                        onChange={formik.handleChange}
                                        required
                                        className='border-top-0 border-end-0 border-start-0 rounded-0 smaller'
                                    />
                                </Form.Group>
                            </>}
                            <Row >
                                <Button className="mt-3 bg-dark" onClick={formik.handleSubmit}>Submit</Button>
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
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default Auth
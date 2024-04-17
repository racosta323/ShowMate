import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal'

import { Formik } from 'formik'
import * as Yup from 'yup'


function Auth({ setUser }) {

    const navigate = useNavigate()

    const [show, setShow] = useState(true);
    const [signup, setSignup] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function toggleSignup() {
        setSignup((currentSignup) => !currentSignup)
    }

    const signupSchema = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        username: Yup.string().min(5, 'Username too Short!').max(15, 'Username too Long!'),
        password: Yup.string().min(5, 'Password too Short!').max(15, 'Password too Long!'),
        passwordConfirmation: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match')
    })

    const loginSchema = Yup.object().shape({
        username: Yup.string().required('username required'),
        password: Yup.string().required('password required')
    })

    return (
        <Container>
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton />
                <Modal.Body>
                    <Row className="px-4">
                        <Col className="mb-4">
                            <h2 className="text-center">Login or Signup for ShowMate</h2>
                        </Col>
                    </Row>
                    <Row className="px-5">
                        <Col>
                            <Formik
                                initialValues={{
                                    id: '',
                                    firstName: '',
                                    lastName: '',
                                    username: '',
                                    password: '',
                                    passwordConfirmation: ''
                                }}
                                validationSchema={signup ? signupSchema : loginSchema}
                                onSubmit={async (values) => {

                                    try {
                                        const endpoint = signup ? '/users' : '/login'
                                        const userResponse = await fetch(
                                            endpoint, {
                                            method: 'POST',
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify(values, null, 2)
                                        })
                                            .then(resp => {
                                                if (resp.ok) {
                                                    resp.json().then(user => {
                                                        setUser(user)
                                                        navigate('/')
                                                    })
                                                } else {
                                                    console.log('errors? handle them')
                                                }
                                            })
                                    } catch (error) {

                                    }
                                }}
                            >
                                {({ values, handleSubmit, handleChange, touched, errors, handleBlur, resetForm, setFieldValue }) => (
                                    <Form noValidate>
                                        {signup && <>
                                            <Form.Group>
                                                <Form.Label className='fw-bold smaller'>First Name</Form.Label>
                                                <Form.Control
                                                    as='input'
                                                    type='firstName'
                                                    name='firstName'
                                                    placeholder='Enter your first name'
                                                    onChange={handleChange}
                                                    value={values.firstName}
                                                    required
                                                    autoFocus
                                                    className='border-top-0 border-end-0 border-start-0 rounded-0 smaller'
                                                    isValid={touched.firstName && !errors.firstName}
                                                    isInvalid={!!errors.firstName}
                                                />
                                                <Form.Control.Feedback >Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.firstName}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label className='fw-bold smaller pt-4'>Last Name</Form.Label>
                                                <Form.Control
                                                    as='input'
                                                    type='lastName'
                                                    name='lastName'
                                                    placeholder='Enter your last name'
                                                    onChange={handleChange}
                                                    value={values.lastName}
                                                    required
                                                    className='border-top-0 border-end-0 border-start-0 rounded-0 smaller mb-4'
                                                    isValid={touched.lastName && !errors.lastName}
                                                    isInvalid={!!errors.lastName}
                                                />
                                                <Form.Control.Feedback >Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.lastName}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </>}
                                        <Form.Group>
                                            <Form.Label className='fw-bold smaller'>Username</Form.Label>
                                            <Form.Control
                                                as='input'
                                                type='username'
                                                name='username'
                                                placeholder='Enter your username'
                                                onChange={handleChange}
                                                value={values.username}
                                                required
                                                autoFocus
                                                className='border-top-0 border-end-0 border-start-0 rounded-0 smaller mb-3'
                                                isValid={touched.username && !errors.username}
                                                isInvalid={!!errors.username}
                                            />
                                            <Form.Control.Feedback >Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.username}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label className='fw-bold smaller'>Password</Form.Label>
                                            <Form.Control
                                                as='input'
                                                type='password'
                                                name='password'
                                                placeholder='Enter your password'
                                                onChange={handleChange}
                                                value={values.password}
                                                required
                                                className='border-top-0 border-end-0 border-start-0 rounded-0 smaller'
                                                isValid={touched.password && !errors.password}
                                                isInvalid={!!errors.password}
                                            />
                                            <Form.Control.Feedback >Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.password}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        {signup && <>
                                            <Form.Group>
                                                <Form.Label className='fw-bold smaller pt-4 mt-2'>Password Confirmation</Form.Label>
                                                <Form.Control
                                                    as='input'
                                                    type='password'
                                                    name='passwordConfirmation'
                                                    placeholder='Confirm your password'
                                                    value={values.passwordConfirmation}
                                                    onChange={handleChange}
                                                    required
                                                    className='border-top-0 border-end-0 border-start-0 rounded-0 smaller'
                                                    isValid={touched.passwordConfirmation && !errors.passwordConfirmation}
                                                    isInvalid={!!errors.passwordConfirmation}
                                                />
                                                <Form.Control.Feedback >Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.passwordConfirmation}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </>}
                                        <Row >
                                            <Button
                                                className="mt-3 bg-dark"
                                                type='click'
                                                onClick={handleSubmit}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') {
                                                        handleSubmit()
                                                    }
                                                }
                                                }
                                            >
                                                Submit
                                            </Button>
                                        </Row>
                                    </Form>
                                )}
                            </Formik>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {signup ? <>
                                <p className="text-center">Already have an account? </p>
                                <p className="text-center">
                                    <NavLink to="#" onClick={toggleSignup}>
                                        Login instead
                                    </NavLink>
                                </p>
                            </> : <>
                                <p className="text-center">Don't have an account yet? </p>
                                <p className="text-center">
                                    <NavLink to="#" onClick={toggleSignup}>
                                        Sign up for an account
                                    </NavLink>
                                </p>
                            </>}

                        </Col>
                    </Row>


                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default Auth
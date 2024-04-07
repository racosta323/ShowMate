import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useFormik } from 'formik'


function CreateReview({ show, handleShow, handleClose }){

    const navigate = useNavigate()

   const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
            genre: ''
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
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Write a Show Review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <p className='mb-4'>
                        Share your review of a show you attended for: <br/> 
                        <span className='fs-5'>Artist Name</span>
                    </p>
                    

                    <Form.Group className="mb-3" controlId="subject">
                        <Form.Label className='fw-bold'>Subject</Form.Label>
                        <Form.Control
                            as="input"
                            type="subject"
                            name='subject'
                            placeholder="Give your review a headline"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            className='border-top-0 border-end-0 border-start-0 rounded-0'
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label className='fw-bold'>Name of Show</Form.Label>
                        <Form.Control
                            as="input"
                            type='name'
                            placeholder='Which event had you attended?'
                            name='name'
                            onChange={formik.handleChange}
                            value={formik.values.genre}
                            className='border-top-0 border-end-0 border-start-0 rounded-0'
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="location">
                        <Form.Label className='fw-bold'>Location</Form.Label>
                        <Form.Control
                            as="input"
                            type='location'
                            placeholder='Where was the show?'
                            name='location'
                            onChange={formik.handleChange}
                            value={formik.values.genre}
                            className='border-top-0 border-end-0 border-start-0 rounded-0'
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="date">
                        <Form.Label className='fw-bold'>Date of Show</Form.Label>
                        <Form.Control
                            as="input"
                            type='date'
                            placeholder='When did you attend?'
                            name='date'
                            onChange={formik.handleChange}
                            value={formik.values.genre}
                            className='border-top-0 border-end-0 border-start-0 rounded-0'
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="review">
                       <InputGroup>
                       <InputGroup.Text className='fw-bold'>Review</InputGroup.Text>
                        <Form.Control
                            as="textarea"
                            aria-label="With textarea"
                            rows={5}
                            type='review'
                            placeholder=''
                            name='review'
                            onChange={formik.handleChange}
                            value={formik.values.genre}
                        />  
                       </InputGroup>
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

export default CreateReview
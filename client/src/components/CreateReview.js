import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useFormik } from 'formik'

import Stars from './Stars'


function CreateReview({ show, handleShow, handleClose }){
    
    const navigate = useNavigate()

    const [rating, setRating] = useState(null)
    
    const params = useParams()
    const artistId = params.id

    const formik = useFormik({
        initialValues: {
            id: '',
            subject: '',
            name: '',
            location: '',
            date: '',
            review: '',
            artistId: artistId,
            stars: 'nada'
        },
        onSubmit: async (values) => {
            try{
                const reviewResponse = await fetch('/reviews',{
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify(values, null, 2)
                })
                // if(reviewResponse.status ===201){
                //     const reviewData = await reviewResponse.json()
                //     formik.values.id = reviewData.id
                // }
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
            navigate(`/profile/${formik.values.artistId}/reviews`)
            window.location.reload()
        }
   })

   const handleClick = (currentRating) => {
        setRating(currentRating)
        formik.values.stars = currentRating
        console.log(formik.values.stars)
   }

   console.log(formik.values.stars)
   
    return(
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title className='fs-5'>Write a Show Review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <p className='mt-4'>
                        Share your review of a show you attended for: <br/> 
                        <span className='fw-bold'>Artist Name</span>
                    </p>
                    <Row>
                        <Stars 
                            stars={formik.values.stars} 
                            handleChange={formik.handleChange} 
                            key={formik.values.id} 
                            handleClick={handleClick}
                            rating={rating}
            
                        />
                    </Row>
                    
                    <Form.Group className="mb-3" controlId="subject">
                        <Form.Label className='fw-bold smaller'>Subject</Form.Label>
                        <Form.Control
                            as="input"
                            type="subject"
                            name='subject'
                            placeholder="Give your review a headline"
                            onChange={formik.handleChange}
                            value={formik.values.subject}
                            className='border-top-0 border-end-0 border-start-0 rounded-0 smaller'
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label className='fw-bold smaller'>Name of Show</Form.Label>
                        <Form.Control
                            as="input"
                            type='name'
                            placeholder='Which event had you attended?'
                            name='name'
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            className='border-top-0 border-end-0 border-start-0 rounded-0'
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="location">
                        <Form.Label className='fw-bold smaller'>Location</Form.Label>
                        <Form.Control
                            as="input"
                            type='location'
                            placeholder='Where was the show?'
                            name='location'
                            onChange={formik.handleChange}
                            value={formik.values.location}
                            className='border-top-0 border-end-0 border-start-0 rounded-0'
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="date">
                        <Form.Label className='fw-bold smaller'>Date of Show</Form.Label>
                        <Form.Control
                            as="input"
                            type='date'
                            placeholder='When did you attend?'
                            name='date'
                            onChange={formik.handleChange}
                            value={formik.values.date}
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
                            value={formik.values.review}
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
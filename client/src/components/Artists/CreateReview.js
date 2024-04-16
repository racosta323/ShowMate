import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useFormik, Formik } from 'formik'
import * as Yup from 'yup'


import Success from '../Success'
import Stars from './Stars'


function CreateReview({ show, handleShow, handleClose, userId, artist }){

    
    const navigate = useNavigate()

    const [rating, setRating] = useState(null)
    const [modalShow, setModalShow] = useState(false)
    const [success, setSuccess ] = useState(false)
    
    // console.log(newRating)
    
    const params = useParams()
    const artistId = params.id

    const reviewSchema = Yup.object().shape({
        stars:Yup.number()
        .required('Required'),
        subject: Yup.string()
            .min(1, "Too short")
            .max(50, "Too long")
            .required('Required'),
        name: Yup.string()
            .min(1, "Too short")
            .max(50, "Too long")
            .required('Required'),
        location: Yup.string()
            .min(1, "Too short")
            .max(50, "Too long")
            .required('Required'),
        date: Yup.date(),
        review: Yup.string()
            .min(5, "Too short")
            .max(1000, "Too long")
            .required('Required')
    })
 
// console.log(newRating)
//     const formik = useFormik({
//         initialValues: {
//             id: '',
//             subject: '',
//             name: '',
//             location: '',
//             date: '',
//             review: '',
//             artistId: artistId,
//             stars: '',
//             userId: userId
//         },
//         onSubmit: async (values) => {
//             try{
//                 const reviewResponse = await fetch('/reviews',{
//                     method: 'POST',
//                     headers: {
//                         "Content-Type": 'application/json'
//                     },
//                     body: JSON.stringify(values, null, 2)
//                 })
//                 // if(reviewResponse.status ===201){
//                 //     const reviewData = await reviewResponse.json()
//                 //     formik.values.id = reviewData.id
//                 // }
//                 // .then (resp=> {
//                 //     if(resp.ok){
//                 //         resp.json().then(artist=>{
//                 //             console.log(artist)
//                 //         })
//                 //     } else {
//                 //         console.log('errors? handle them')
//                 //     }
//                 // })
//             } catch(error){

//             }
            
//         }
//    })

//    const handleStarClick = (currentRating) => {
//         setRating(currentRating)
//         // formik.values.stars = currentRating
//    }

    // const handleSaveClick = () => {
    //     if (success){
    //         handleClose()
    //         setModalShow(true)
    //         // setSuccess(true)
    // }
    
    const renderSuccess = () =>{
        return(
            <>
                {success && <Success artistId={artistId} show={modalShow} onHide={() => setModalShow(false)} />}

            </>

        )
    }

    
   
   
    return(
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title className='fs-5'>Write a Show Review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Formik
                    initialValues={{
                        id: '',
                        subject: '',
                        name: '',
                        location: '',
                        date: '',
                        review: '',
                        artistId: artistId,
                        stars: "",
                        userId: userId
                    }}
                    validationSchema={reviewSchema}
                    onSubmit= {async (values) => {
                        // values.stars = newRating
                        console.log(values)
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
                        setSuccess(true)
                        window.location.reload()
                        // resetForm()
                        handleClose()
                    }}
                
                >
                    
                    {({ values, handleSubmit, handleChange, touched, errors, handleBlur, resetForm, setFieldValue})=>(
                        <Form noValidate id='save'>
                            <p className='mt-2'>
                                Share your review of a show you attended for: <br/> 
                                <span className='fw-bold fs-3'>{artist?.name}</span>
                            </p>
                            {console.log(values)}
                            <Row>
                                <Form.Group>
                                    <Stars 
                                        stars={values.stars} 
                                        onChange={handleChange} 
                                        key={values.id} 
                                        setFieldValue={setFieldValue}
                                        // handleClick={setRating}
                                        // rating={rating}
                                        // newRating={newRating} 
                                        
                                    />
                                </Form.Group>
                            </Row>
                            
                            <Form.Group className="mb-3" controlId="subject">
                                <Form.Label className='fw-bold smaller'>Subject</Form.Label>
                                <Form.Control
                                    as="input"
                                    type="subject"
                                    name='subject'
                                    placeholder="Give your review a headline"
                                    onChange={handleChange}
                                    value={values.subject}
                                    className='border-top-0 border-end-0 border-start-0 rounded-0 smaller'
                                    autoFocus
                                    required
                                    isValid={touched.subject && !errors.subject}
                                    isInvalid={!!errors.subject}
                                />
                                <Form.Control.Feedback >Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {errors.subject}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label className='fw-bold smaller'>Name of Show</Form.Label>
                                <Form.Control
                                    as="input"
                                    type='name'
                                    placeholder='Which event had you attended?'
                                    name='name'
                                    onChange={handleChange}
                                    value={values.name}
                                    className='border-top-0 border-end-0 border-start-0 rounded-0'
                                    required
                                    isValid={touched.name && !errors.name}
                                    isInvalid={!!errors.name}
                                />
                                <Form.Control.Feedback >Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {errors.name}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="location">
                                <Form.Label className='fw-bold smaller'>Location</Form.Label>
                                <Form.Control
                                    as="input"
                                    type='location'
                                    placeholder='Where was the show?'
                                    name='location'
                                    onChange={handleChange}
                                    value={values.location}
                                    className='border-top-0 border-end-0 border-start-0 rounded-0'
                                    required
                                    isValid={touched.location && !errors.location}
                                    isInvalid={!!errors.location}
                                />
                                <Form.Control.Feedback >Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {errors.location}
                                </Form.Control.Feedback>
                            </Form.Group>

                        <Form.Group className="mb-3" controlId="date">
                            <Form.Label className='fw-bold smaller'>Date of Show</Form.Label>
                            <Form.Control
                                as="input"
                                type='date'
                                placeholder='When did you attend?'
                                name='date'
                                onChange={handleChange}
                                value={values.date}
                                className='border-top-0 border-end-0 border-start-0 rounded-0'
                                required
                                isValid={touched.date && !errors.date}
                                isInvalid={!!errors.date}
                            />
                            <Form.Control.Feedback >Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                {errors.date}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="review">
                            <InputGroup hasValidation>
                                <InputGroup.Text className='fw-bold'>Review</InputGroup.Text>
                                <Form.Control
                                    as="textarea"
                                    aria-label="With textarea"
                                    rows={5}
                                    type='text'
                                    placeholder=''
                                    name='review'
                                    onChange={handleChange}
                                    value={values.review}
                                    required
                                    isValid={touched.review && !errors.review}
                                    isInvalid={!!errors.review}
                                />  
                                <Form.Control.Feedback >Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {errors.review}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        <hr className='my-3 text-secondary'/>
                        <Col className='d-flex justify-content-end'>
                            <Button className="mx-3" variant="danger" onClick={handleClose}>
                                Close
                            </Button>
                            {/* <Button variant="dark" onClick={formik.handleSubmit}> */}
                            <Button variant="dark" onClick={()=>{
                                handleSubmit()
                                
                            }}
                            >
                                Save Changes
                            </Button>
                        </Col>
                        {/* {console.log(success)}
                        {renderSuccess()} */}
                    </Form>
                    
                    )}
                </Formik>
                </Modal.Body>
            </Modal>
            
        </>
    )
}

export default CreateReview
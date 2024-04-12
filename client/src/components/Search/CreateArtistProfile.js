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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const artistSchema = Yup.object().shape({
        name: Yup.string()
        .min(1, "Too short")
        .max(50, "Too long")
        .required('Required')
    })

//    const formik = useFormik({
//         initialValues: {
//             id: '',
//             name: '',
//             genre: '',
//             image: ''
//         },
//         validationSchema: artistSchema,
//         onSubmit: async (values) => {
//             try{
//                 const artistResponse = await fetch('/artists',{
//                     method: 'POST',
//                     headers: {
//                         "Content-Type": 'application/json'
//                     },
//                     body: JSON.stringify(values, null, 2)
//                 })
//                 if(artistResponse.status ===201){
//                     const artistData = await artistResponse.json()
//                     formik.values.id = artistData.id
//                 }
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
//             navigate(`/artists/${formik.values.id}`)
//             window.location.reload()
//         }
//    })

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
                            const artistResponse = await fetch('/artists',{
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
                        navigate(`/artists/${values.id}`)
                        window.location.reload()
                    }}
                >
                    {({ values, handleSubmit, handleChange, touched, error})=>(
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
                                    onChange={handleChange}
                                    value={values.genre}
                                />
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
                                />
                            </Form.Group>
                            <hr className='my-3 text-secondary'/>
                           <Col className='d-flex justify-content-end'>
                            <Button className='m-2' variant="danger" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button className='m-2' variant="dark">
                                    Save Changes
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
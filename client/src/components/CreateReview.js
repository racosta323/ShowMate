import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
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
            <Modal show={show} onHide={handleClose}>
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
                            placeholder="name"
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
                            placeholder='genre'
                            name='genre'
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
                <Button variant="dark" onClick={formik.handleSubmit}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CreateReview
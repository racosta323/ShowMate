import { useState, useEffect, useRef } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'


import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'


function EditShowLocation({ formik, reviewId }){

    const inputRef = useRef(null)

    const [review, setReview] = useState({})
    const [toggleShowLocation, setShowLocation] = useState(null)
    const [isEditMode, setEditMode] = useState(false)   
    const [inputClass, setInputClass] = useState('border border-0 bg-light fs-4 fw-bold')


    useEffect(()=>{
        fetch(`/api/reviews/${reviewId}`)
        .then(resp=>resp.json())
        .then(data => setReview(data))
    }, [reviewId])

    function turnOnEdit(){
        setShowLocation(true)
        setInputClass('')
        setEditMode(true);
    }

    //autofocus
    useEffect(() => {
        if (toggleShowLocation && inputRef.current) {
            inputRef.current.focus();
        }
    }, [toggleShowLocation]);

    return(
        <Col xs={4}>
            {!toggleShowLocation ? 
                <Col>  
                    <Stack direction='horizontal'>
                        <p className='mt-3 smaller'>
                            <span className='fw-bold smaller'>
                            Show Location: {' '}
                            </span>
                            {review?.location}
                        </p>
                        <i as="button" className="ms-2 bi bi-pencil-fill pencil smaller" onClick={turnOnEdit}></i>
                    </Stack>
                </Col>: 
                <Row>
                    <Col xs={8} className='ms-4'>
                        <InputGroup>
                            <Form.Control
                                ref={inputRef}
                                type="location"
                                name='location'
                                onChange={formik.handleChange}
                                value={formik.values.location}
                                readOnly={!isEditMode}
                                onBlur={()=>{setEditMode(false)}}
                            />
                        </InputGroup>
                    </Col>
                    <Col>
                        <i as="button" className="bi bi-pencil-fill pencil" onClick={turnOnEdit}></i>
                    </Col>
                </Row>
            }
        </Col>
    )
}

export default EditShowLocation
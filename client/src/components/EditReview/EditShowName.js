import { useState, useEffect, useRef } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'


function EditShowName({ formik, reviewId }){

    const inputRef = useRef(null)

    const [review, setReview] = useState({})
    const [toggleName, setToggleName] = useState(null)
    const [isEditMode, setEditMode] = useState(false)   
    const [inputClass, setInputClass] = useState('border border-0 bg-light fs-4 fw-bold')


    useEffect(()=>{
        fetch(`/reviews/${reviewId}`)
        .then(resp=>resp.json())
        .then(data => setReview(data))
    }, [reviewId])

    function turnOnEdit(){
        setToggleName(true)
        setInputClass('')
        setEditMode(true);
    }

    //autofocus
    useEffect(() => {
        if (toggleName && inputRef.current) {
            inputRef.current.focus();
        }
    }, [toggleName]);

    return(
        <Col xs={4}>
            {!toggleName ? 
                <Col>  
                    <Stack direction='horizontal'>
                        <p className='mt-3 smaller'>
                            <span className='fw-bold smaller'>
                            Show: {' '}
                            </span>
                            {review?.show}
                        </p>
                        <i as="button" className="ms-2 bi bi-pencil-fill pencil smaller" onClick={turnOnEdit}></i>
                    </Stack>
                </Col> : 
                <Row>
                    <Col xs={8}>
                        <InputGroup>
                            <Form.Control
                                ref={inputRef}
                                type="show"
                                name='show'
                                onChange={formik.handleChange}
                                value={formik.values.show}
                                readOnly={!isEditMode}
                                onBlur={()=>{setEditMode(false)}}
                            />
                        </InputGroup>
                    </Col>
                    <Col xs={1}>
                        <i as="button" className="bi bi-pencil-fill pencil" onClick={turnOnEdit}></i>
                    </Col>
                        
                        {/* <input
                            ref={inputRef}
                            type='show'
                            value={formik.values.show}
                            name="show"
                            readOnly={!isEditMode}
                            className={inputClass}
                            onBlur={()=>{
                                setEditMode(false)
                                setInputClass('border border-0 bg-light fs-4 fw-bold')
                            }}
                            // style={{ width: '40px' }} 
                            onChange={formik.handleChange}
                        /> */}
                      
                        
                </Row>
            }
        </Col>
    )
}

export default EditShowName
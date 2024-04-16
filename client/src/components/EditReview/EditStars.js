import { useState, useEffect, useRef } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'


function EditStars({ reviewId, formik }){

    const inputRef = useRef(null)

    const [review, setReview] = useState({})
    const [toggleStars, setToggleStars] = useState(null)
    const [isEditMode, setEditMode] = useState(false)   
    const [inputClass, setInputClass] = useState('border border-0 bg-light fs-4 fw-bold')


    useEffect(()=>{
        fetch(`/reviews/${reviewId}`)
        .then(resp=>resp.json())
        .then(data => setReview(data))
    }, [reviewId])

    function turnOnEdit(){
        setToggleStars(true)
        setInputClass('')
        setEditMode(true);
    }

    //autofocus
    useEffect(() => {
        if (toggleStars && inputRef.current) {
            inputRef.current.focus();
        }
    }, [toggleStars]);
    


    return(
        <Container>
            <form>
                {!toggleStars ?
                <>
                    <Stack direction='horizontal'>
                        <p className='mt-3'>
                            {review?.stars}
                            <span className='text-warning'>
                            / 5
                            </span>
                        </p>
                        <i className="bi bi-star-fill text-warning ms-2" ></i>
                        <i as="button" className="ms-3 bi bi-pencil-fill pencil" onClick={turnOnEdit}></i>
                    </Stack>
                </> :
                    <Row className='mt-2'>
                        <Col xs={3}>
                            <InputGroup>
                                <Form.Control
                                    ref={inputRef}
                                    type="stars"
                                    name='stars'
                                    onChange={formik.handleChange}
                                    value={formik.values.stars}
                                    readOnly={!isEditMode}
                                    onBlur={()=>{setEditMode(false)}}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={4} className='mt-1'>
                            <Stack direction='horizontal' gap={3}>
                                <p>
                                    <span className='text-warning'>
                                    / 5
                                    </span>
                                </p>
                                <i className="bi bi-star-fill text-warning mb-3" ></i>
                            </Stack>
                        </Col>
                        <Col xs={1} className='mt-1'>
                            <i as="button" className="bi bi-pencil-fill pencil" onClick={turnOnEdit}></i>
                        </Col>
                            {/* <input
                                ref={inputRef}
                                type='stars'
                                value={formik.values.stars}
                                name="stars"
                                readOnly={!isEditMode}
                                className={inputClass}
                                onBlur={()=>{
                                    setEditMode(false)
                                    setInputClass('border border-0 bg-light fs-4 fw-bold')
                                }}
                                style={{ width: '40px' }} 
                                onChange={formik.handleChange}
                            /> */}
                </Row>
                }
            </form>         
        </Container>
    )
}

export default EditStars
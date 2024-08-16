import { useState, useEffect, useRef } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'


function EditReview({ reviewId, formik }){
   

    const inputRef = useRef(null)

    const [reviews, setReviews] = useState({})
    const [toggleReview, setToggleReview] = useState(null)
    const [isEditMode, setEditMode] = useState(false)   
    const [inputClass, setInputClass] = useState('border border-0 bg-light')


    useEffect(()=>{
        fetch(`/api/reviews/${reviewId}`)
        .then(resp=>resp.json())
        .then(data => setReviews(data))
    }, [reviewId])


    function turnOnEdit(){
        setToggleReview(true)
        setInputClass('')
        setEditMode(true);
    }

    useEffect(() => {
        if (toggleReview && inputRef.current) {
            inputRef?.current.focus();
        }
    }, [toggleReview]);
    

    return(
        <Row>
            <Col xs={12}>
                <form>
                {!toggleReview ? 
                    <>
                        <Stack direction='horizontal'>
                            <h5 className="ms-3 fw-bold">{reviews?.review}</h5>
                            <i 
                                as="button" 
                                onClick={turnOnEdit}
                                className="ms-2 bi bi-pencil-fill pencil"
                            ></i>
                        </Stack>
                    </> : 
                    <Row>
                        <Col xs={11}>
                            <InputGroup>
                                <Form.Control
                                    ref={inputRef}
                                    type="review"
                                    name='review'
                                    onChange={formik.handleChange}
                                    value={formik.values.review}
                                    readOnly={!isEditMode}
                                    onBlur={()=>{setEditMode(false)}}
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <i 
                                as="button" 
                                onClick={turnOnEdit}
                                className="ms-2 bi bi-pencil-fill pencil"
                            ></i>
                        </Col>
                        
                    </Row>
                } 
                </form>         
            </Col>
        </Row>
    )
}

export default EditReview
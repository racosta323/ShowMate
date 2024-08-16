import { useState, useEffect, useRef } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'


import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'


function EditShowDate({ formik, reviewId }){

    const inputRef = useRef(null)

    const [review, setReview] = useState({})
    const [toggleDate, setToggleDate] = useState(null)
    const [isEditMode, setEditMode] = useState(false)   
    const [inputClass, setInputClass] = useState('border border-0 bg-light fs-4 fw-bold')


    useEffect(()=>{
        fetch(`/api/reviews/${reviewId}`)
        .then(resp=>resp.json())
        .then(data => setReview(data))
    }, [reviewId])

    function turnOnEdit(){
        setToggleDate(true)
        setInputClass('')
        setEditMode(true);
    }

    //autofocus
    useEffect(() => {
        if (toggleDate && inputRef.current) {
            inputRef.current.focus();
        }
    }, [toggleDate]);

    return(
        <Col xs={4}>
            {!toggleDate ? 
                <Col>  
                    <Stack direction='horizontal'>
                        <p className='mt-3 smaller'>
                            <span className='fw-bold smaller'>
                            Show Date: {' '}
                            </span>
                            {review?.show_date}
                        </p>
                        <i as="button" className="ms-2 bi bi-pencil-fill pencil smaller" onClick={turnOnEdit}></i>
                    </Stack>
                </Col>: 
                <>
                    <Stack direction='horizontal'>
                        <InputGroup>
                            <Form.Control
                                ref={inputRef}
                                type="date"
                                name='show_date'
                                onChange={formik.handleChange}
                                value={formik.values.show_date}
                                readOnly={!isEditMode}
                                onBlur={()=>{setEditMode(false)}}
                            />
                        </InputGroup>
                       
                        <i as="button" className="ms-3 bi bi-pencil-fill pencil" onClick={turnOnEdit}></i>
                     </Stack>
                </>
            }
        </Col>
    )
}

export default EditShowDate
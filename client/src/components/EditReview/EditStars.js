import { useState, useEffect, useRef } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
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
                <>
                     <Stack direction='horizontal'>
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
                        <p className='mt-3'>
                            <span className='text-warning'>
                            / 5
                            </span>
                        </p>
                        <i className="bi bi-star-fill text-warning ms-2" ></i>
                        <i as="button" className="ms-3 bi bi-pencil-fill pencil" onClick={turnOnEdit}></i>
                     </Stack>
                </>
                }
            </form>         
        </Container>
    )
}

export default EditStars
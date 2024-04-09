import { useState, useRef } from 'react'

import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Col from 'react-bootstrap/Col'


function EditStars({ text, formik, reviews }){

    const [isEditMode, setEditMode] = useState(false)   
    const [inputClass, setInputClass] = useState('border border-0 bg-light fs-4 fw-bold')
    

    const inputRef = useRef(null)
    
    function turnOnEdit(){
        setInputClass('')
        setEditMode(true)
        inputRef.current.focus();
    }

    console.log(text)

    return(
        <Container>
            <form>
                
                <div>
                    <Stack direction='horizontal'>
                        <Col className='d-flex justify-content-end ms-5'>
                            <input
                                ref={inputRef}
                                type={text}
                                value={formik.values[text]}
                                name={text}
                                readOnly={!isEditMode}
                                className={inputClass}
                                onBlur={()=>{
                                    setEditMode(false)
                                    setInputClass('border border-0 bg-light fs-4 fw-bold')
                                }}
                                style={{ width: '40px' }} 
                                onChange={formik.handleChange}
                            />
                        </Col>
                       
                        <p className='mt-3'>
                            <span className='text-warning'>
                            / 5
                            </span>
                        </p>
                        <i className="bi bi-star-fill text-warning ms-2" ></i>
                        <i as="button" className="ms-3 bi bi-pencil-fill pencil" onClick={turnOnEdit}></i>
                    </Stack>
                </div>
            </form>         
        </Container>
    )
}

export default EditStars
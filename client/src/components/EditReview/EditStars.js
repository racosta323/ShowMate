import { useState, useRef } from 'react'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


function EditStars({ text, formik, reviews }){

    const [isEditMode, setEditMode] = useState(false)   
    const [inputClass, setInputClass] = useState('border border-0 bg-light')

    const inputRef = useRef(null)
    
    function turnOnEdit(){
        setInputClass('')
        setEditMode(true);
        //autofocus
        inputRef.current.focus();
    }

    let stars = ()=>{
        return(
            <h6 className="text-end mt-3">
                <span className='fw-bold'>
                    {reviews.stars}
                </span> / {' '}
                <span className='text-warning'>
                    5 {' '}
                </span>
                
                {/* {' '} see review */}
            </h6>
            
        )
    }

    return(
        <Container>
            <form>
                <input
                    ref={inputRef}
                    type={text}
                    name={text}
                    value={formik.values[text]}
                    readOnly={!isEditMode}
                    className={inputClass}
                    onBlur={()=>{
                        setEditMode(false)
                        setInputClass('border border-0 bg-light')
                    }}
                    onChange={formik.handleChange}
                    style={{ width: '20px' }} 
                />               
                <i as="button" className="ms-2 bi bi-pencil-fill pencil" onClick={turnOnEdit}></i>
                {/* <i as="button" className="ms-2 bi bi-pencil-fill pencil" onClick={turnOnEdit}></i> */}
            </form>         
        </Container>
    )
}

export default EditStars
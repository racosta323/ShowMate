import { useState, useRef } from 'react'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'


function EditShowDate({ formik, reviews }){

    const [isEditMode, setEditMode] = useState(false)   
    const [inputClass, setInputClass] = useState('border border-0 bg-light smaller')
    

    const inputRef = useRef(null)
    
    function turnOnEdit(){
        setInputClass('')
        setEditMode(true)
        inputRef.current.focus();
    }



    return(
        <Col xs={6}>
            <Stack direction='horizontal'>
                <p className='mt-3'>
                    <span className='fw-bold smaller'>
                    Show Date:
                    </span>
                </p>
                <input
                    ref={inputRef}
                    type="showDate"
                    value={formik.values.showDate}
                    name="showDate"
                    readOnly={!isEditMode}
                    className={inputClass + 'smaller'}
                    onBlur={()=>{
                        setEditMode(false)
                        setInputClass('border border-0 bg-light smaller')
                    }}
                    style={{ width: '40px' }} 
                    onChange={formik.handleChange}
                />
                <i as="button" className="ms-2 bi bi-pencil-fill pencil smaller" onClick={turnOnEdit}></i>
            </Stack>
        </Col>
    )
}

export default EditShowDate
import { useState, useRef } from 'react'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';
import { useFormik } from 'formik'

function Pencil({ prop, text }){

   
    const [isEditMode, setEditMode] = useState(false)   
    const [inputClass, setInputClass] = useState('border border-0 bg-light')

    const inputRef = useRef(null)
    
    function turnOnEdit(){
        setInputClass('')
        setEditMode(true);
        //autofocus
        inputRef.current.focus();
    }

    const formik = useFormik({
        initialValues: {
            subject: prop
        }
    })

    console.log(formik.values.subject)


    return(
        <div className='wrapper'>
           
                
                <span>
                <InputGroup>
                    <Form.Control
                        ref={inputRef}
                        type={text}
                        name={text}
                        value={formik.values.subject}
                        readOnly={!isEditMode}
                        className={inputClass}
                        onBlur={()=>{
                            setEditMode(false)
                            setInputClass('border border-0 bg-light')
                        }}
                        onChange={formik.handleChange}
                    />
                    <InputGroup.Text className='bi bi-pencil-fill pencil border border-0' onClick={turnOnEdit}></InputGroup.Text>
                </InputGroup>
                    {/* <input
                        ref={inputRef}
                        type="text"
                        value={prop}
                        readOnly={!isEditMode}
                        className={inputClass}
                        onBlur={()=>{
                            setEditMode(false)
                            setInputClass('border border-0 bg-light')
                        }}
                    /> */}
                </span>

                {/* <i as="button" className="ms-2 bi bi-pencil-fill pencil" onClick={turnOnEdit}></i> */}
         
        </div>
    )
}

export default Pencil
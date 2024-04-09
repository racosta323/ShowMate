import { useState, useRef } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function EditReview({ formik, reviews }){

    const [isEditMode, setEditMode] = useState(false)   
    const [inputClass, setInputClass] = useState('border border-0 bg-light w-100 h-auto')
    

    const inputRef = useRef(null)
    
    function turnOnEdit(){
        
        setInputClass('')
        setEditMode(true);
        //autofocus
        inputRef.current.focus();
    }


    return(
        <Row>
            <Col xs={12}>
                <form>
                    <input
                        ref={inputRef}
                        type="review"
                        name="review"
                        value={formik.values.review}
                        // text={reviews.review}
                        readOnly={!isEditMode}
                        // maxLine={3}
                        // ellipsis="..."
                        // trimRight
                        // basedOn="letters"
                        className={inputClass}
                        onBlur={()=>{
                            setEditMode(false)
                            setInputClass('border border-0 bg-light w-100 h-auto')
                        }}
                        onChange={formik.handleChange}
                        // className="mb-3 ms-3 lh-sm"
                    />
                    {/* <input
                        ref={inputRef}
                        // type={text}
                        // name={text}
                        // value={formik.values[text]}
                        readOnly={!isEditMode}
                        className={inputClass}
                        onBlur={()=>{
                            setEditMode(false)
                            setInputClass('border border-0 bg-light')
                        }}
                        onChange={formik.handleChange}
                    /> */}
                    <i as="button" className="ms-2 bi bi-pencil-fill pencil" onClick={turnOnEdit}></i>
                </form>         
            </Col>
        </Row>
    )
}

export default EditReview
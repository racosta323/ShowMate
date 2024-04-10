import { useState, useRef } from 'react'



function EditSubject({ text, formik }){

    const [isEditMode, setEditMode] = useState(false)   
    const [inputClass, setInputClass] = useState('border border-0 bg-light')
    
    console.log(formik)

    const inputRef = useRef(null)
    
    function turnOnEdit(){
        
        setInputClass('')
        setEditMode(true);
        //autofocus
        inputRef.current.focus();
    }


    return(
        <div>
            <form>
                <input
                    ref={inputRef}
                    type="text"
                    name={text}
                    value={formik.values[text]}
                    readOnly={!isEditMode}
                    className={inputClass}
                    onBlur={()=>{
                        setEditMode(false)
                        setInputClass('border border-0 bg-light')
                    }}
                    onChange={formik.handleChange}
                />
                <i as="button" className="ms-2 bi bi-pencil-fill pencil" onClick={turnOnEdit}></i>
            </form>         
        </div>
    )
}

export default EditSubject
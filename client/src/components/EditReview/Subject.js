import { useState, useRef } from 'react'

function Subject({ subject }){

    const [isEditMode, setEditMode] = useState(false)   
    const [inputClass, setInputClass] = useState('border border-0')

    const inputRef = useRef(null)
    
    function turnOnEdit(){
        setInputClass('')
        setEditMode(true);
        //autofocus
        inputRef.current.focus();
    }

    return(
        <div className='wrapper'>
            <span>
                <input
                    ref={inputRef}
                    type="text"
                    value={subject}
                    readOnly={!isEditMode}
                    className={inputClass}
                    onBlur={()=>{
                        setEditMode(false)
                        setInputClass('border border-0')
                    }}
                />
            </span>

            <i as="button" className="bi bi-pencil-fill pencil" onClick={turnOnEdit}></i>
            
        </div>
    )
}

export default Subject
import { useState, useEffect, useRef } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useFormik } from 'formik'

function EditReview({ reviewId }){
    const inputRef = useRef(null)

    const { logoutUser, loggedInUser, artists } = useOutletContext()

    const [review, setReview] = useState({})
    const [toggleSubj, setToggleSubj] = useState(null)
    const [toggleStars, setToggleStars] = useState(null)
    const [isEditMode, setEditMode] = useState(false)   
    const [inputClass, setInputClass] = useState('border border-0 bg-light')

    // const params = useParams()
    // const reviewId = params.reviewId
    // const navigate = useNavigate()

    useEffect(()=>{
        fetch(`/reviews/${reviewId}`)
        .then(resp=>resp.json())
        .then(data => setReview(data))
    }, [reviewId])

    console.log(review)

    useEffect(() => {
        formik.setValues({
            ...formik.values,
            subject: review.subject
        });
    }, [review])


    const formik = useFormik({
        initialValues:{
            subject: review?.subject
        },
        onSubmit: async (values) => {
            try{
                const reviewResponse = await fetch(`/reviews/${reviewId}`,{
                    method: 'PATCH',
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify(values, null, 2)
                })
                .then(resp=>resp.json())
                .then(data=>console.log(data))
                .then(window.location.reload())
            } catch(error){

            }
        }
    })

    // console.log(formik.values)
    

    function turnOnEdit(){
        setToggleSubj(true)
        setInputClass('')
        setEditMode(true);
        inputRef?.current.focus()
    }
    
    function handleDelete(){
        fetch(`/reviews/${reviewId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })
        
        // .then(navigate(`/users/${loggedInUser.id}`))
    }
    
    console.log(formik)

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
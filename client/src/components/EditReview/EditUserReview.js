import { useState, useEffect, useRef } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import { useFormik } from 'formik'

function EditUserReview(){
    const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)
    const inputRef = useRef(null)

    const { logoutUser, loggedInUser, artists } = useOutletContext()

    const [reviews, setReviews] = useState({})
    const [toggleSubj, setToggleSubj] = useState(null)
    const [isEditMode, setEditMode] = useState(false)   
    const [inputClass, setInputClass] = useState('border border-0 bg-light')

    const params = useParams()
    const reviewId = params.reviewId

    useEffect(()=>{
        fetch(`/reviews/${reviewId}`)
        .then(resp=>resp.json())
        .then(data => setReviews(data))
    }, [reviewId])

    useEffect(() => {
        formik.setValues({
            ...formik.values,
            subject: reviews.subject
        });
    }, [reviews])


    const formik = useFormik({
        initialValues:{
            subject: reviews.subject
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
    }

    //autofocus
    useEffect(() => {
        if (toggleSubj && inputRef.current) {
            inputRef.current.focus();
        }
    }, [toggleSubj]);
    
    function handleDelete(){
        fetch(`/reviews/${reviewId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })
        .then(window.location.reload())
    }

    return(
        <>
            <Row className='border border-secondary-subtle rounded mt-5'>
                <Row >
                    <Col xs={8} className='mt-3'> 
                        {!toggleSubj ? 
                            <>
                                <Stack direction='horizontal'>
                                    <h5 className="ms-3 fw-bold">{reviews ? reviews.subject : console.log('loading')}</h5>
                                    <i 
                                        as="button" 
                                        onClick={turnOnEdit}
                                        className="ms-2 bi bi-pencil-fill pencil"
                                    ></i>
                                </Stack>
                            </> : 
                            <>
                                <input
                                    ref={inputRef}
                                    type="subject"
                                    name='subject'
                                    onChange={formik.handleChange}
                                    value={formik.values.subject}
                                    readOnly={!isEditMode}
                                    className={inputClass}
                                    onBlur={()=>{
                                        setEditMode(false)
                                        setInputClass('border border-0 bg-light')
                                    }}
                                />
                                <i 
                                    as="button" 
                                    onClick={turnOnEdit}
                                    className="ms-2 bi bi-pencil-fill pencil"
                                ></i>
                            </>
                        }
                        {/* <h5 className="ms-3 fw-bold">{reviews.subject}</h5> */}
                    </Col>
                    <Col> 
                        <h6 className="text-end mt-3">
                            <span className='fw-bold'>
                                4
                            </span> / {' '}
                            <span className='text-warning'>
                                5 {' '}
                            </span>
                            <i className="bi bi-star-fill text-warning" ></i>
                            {/* {' '} see review */}
                        </h6>
                        
                    </Col>
                </Row>
                <Row>
                    <h5 className="ms-3 text-secondary"> Artist: Artist
                        {/* <a href={`/artists/${reviews.artist.id}`} className='link-offset-2 link-underline link-underline-opacity-0'>
                            Artist: {reviews.artist.name}
                        </a> */}
                    </h5>
                    <p className="ms-3 text-secondary smaller">Date Posted: DATE</p>
                    <ResponsiveEllipsis
                        text="review"
                        maxLine={3}
                        ellipsis="..."
                        trimRight
                        basedOn="letters"
                        className="mb-3 ms-3 lh-sm"
                    />
                </Row>
                <Row>
                    <Col>
                        {/* <h6 className="text-end text-secondary smaller">See full review (open when clicked)</h6> */}
                        {/* {userId == loggedInUser.id ? 
                            <p className="text-end text-secondary smaller"> */}
                                edit
                                {/* <a href={`/users/${loggedInUser.id}/edit/${reviews.id}`}>
                                    Edit
                                </a>  */}
                            {/* </p> :  */}
                            {/* <></>} */}
                        {/* <p className="text-end text-secondary smaller">
                            <a href="#">
                                Edit
                            </a> 
                        </p> */}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="smaller">
                            <span  className="fw-bold ms-3">
                                Show: 
                            </span> 
                            4
                        </p>
                    </Col>
                    <Col>
                        <p className="smaller">
                            <span  className="fw-bold ms-3">
                                Show Location: 
                            </span> 
                           Location
                        </p>
                        </Col>
                    <Col>
                        <p className="smaller"> 
                            <span  className="fw-bold ms-3">
                                Show Date: 
                            </span> 
                            Date
                        </p>
                    </Col>
                </Row>     
                <Row>
                    <Col></Col>
                    <Col xs={6} className='d-flex justify-content-end px-5 ms-5'>
                        <Col>
                            <Button className='ms-4' onClick={formik.handleSubmit} variant='secondary'>Submit Edits</Button>
                        </Col>
                        <Col>
                            <Button className='ms-2' onClick={handleDelete} variant='danger'>Delete Review</Button>
                        </Col>
                    </Col>
                </Row>
                
            </Row>
            <hr className='mt-5'></hr>
        </>
    )
}

export default EditUserReview

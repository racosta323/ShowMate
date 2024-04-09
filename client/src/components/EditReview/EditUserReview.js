import { useState, useRef } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import { useFormik } from 'formik'

import EditSubject from './EditSubject'
import EditStars from './EditStars'

function EditUserReview( { reviews }){
    const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

    const [starToggle, setStarToggle] = useState(false)
    const [starEdit, setStarEdit] = useState(false)   
    const [starInputClass, setStarInputClass] = useState('border border-0 bg-light')

    const starInputRef = useRef(null)

    const formik = useFormik({
        initialValues: {
            subject: reviews.subject,
            stars: reviews.stars
        },
        onSubmit: async (values) => {
            try{
                const artistResponse = await fetch(`/reviews/${reviews.id}`,{
                    method: 'PATCH',
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify(values, null, 2)
                })
                .then(resp=>resp.json())
                .then(data=>console.log(data))
            } catch(error){

            }
            // navigate(`/profile/${formik.values.id}`)
            // window.location.reload()
        }
    })

    let stars = ()=>{
        return(
           <>
            <h6 className="text-end mt-3">
                <span className='fw-bold'>
                    {reviews.stars}
                </span> / {' '}
                <span className='text-warning'>
                    5 {' '}
                </span>
                <i className="bi bi-star-fill text-warning" ></i>
                {/* {' '} see review */}
            </h6>
           </>
        )
    }

    function handleEditClick(){
        console.log(starInputRef.current)
        setStarToggle(true)
        setStarInputClass('')
        setStarEdit(true)
        // if (starInputRef != null){
        //     starInputRef.current.focus()
        // }
        console.log(starInputRef.current)
    }


    let renderStars = () =>{
        if (starToggle){
            return (
                <form>
                    <input
                        ref={starInputRef}
                        type="stars"
                        name="stars"
                        value={formik.values["stars"]}
                        readOnly={!starEdit}
                        className={starInputClass}
                        onBlur={()=>{
                            setStarEdit(false)
                            setStarEdit('border border-0 bg-light')
                        }}
                        onChange={formik.handleChange}
                        style={{ width: '20px' }} 
                    />               
                    {/* <i as="button" className="ms-2 bi bi-pencil-fill pencil" onClick={turnOnEdit}></i> */}
                    {/* <i as="button" className="ms-2 bi bi-pencil-fill pencil" onClick={turnOnEdit}></i> */}
                </form>         
                // <EditStars 
                //     text="stars" 
                //     id={reviews.id} 
                //     formik={formik} 
                //     reviews={reviews}
                //     inputRef={starInputRef}
                //     isEditMode={starEdit}
                //     inputClass={starInputClass}
                //     setEditMode={setStarEdit}
                //     setInputClass={setStarInputClass}
                // />
            )
        } else{
            return stars()
        }
    }
   

    return(
        <>
            <Row className='border border-secondary-subtle rounded mt-5 p-2'>
                <Row >
                    <Col>
                        <h5 className="fw-bold">
                            <EditSubject 
                                // prop={reviews.subject} 
                                text="subject" 
                                id={reviews.id} 
                                formik={formik} 
                                // turnOnEdit={turnOnEdit}
                                // inputClass={inputClass}
                                // inputRef={inputRef}
                                // isEditMode={isEditMode}
                                // setEditMode={setEditMode}
                                // setInputClass={setInputClass}
                            />
                        </h5>
                        
                    </Col>
                    <Col xs={4}> 
                        
                          
                            <h5 className="fw-bold">
                                <EditStars
                                    // prop={reviews.subject} 
                                    text="stars" 
                                    id={reviews.id} 
                                    formik={formik}
                                    reviews={reviews} 
                                    // turnOnEdit={turnOnEdit}
                                    // inputClass={inputClass}
                                    // inputRef={inputRef}
                                    // isEditMode={isEditMode}
                                    // setEditMode={setEditMode}
                                    // setInputClass={setInputClass}
                                />
                            </h5>
                                
                            {/* {renderStars()}
                            <i as="button" className="ms-2 bi bi-pencil-fill pencil" onClick={handleEditClick}></i> */}
                
                    </Col>
                </Row>
                <Row>
                    <h5 className="ms-3 text-secondary">
                        <a href={`/artists/${reviews.artist.id}`} className='link-offset-2 link-underline link-underline-opacity-0'>
                            Artist: {reviews.artist.name}
                        </a>
                    </h5>
                    <p className="ms-3 text-secondary smaller">Date Posted: {reviews.created_at}</p>
                    <ResponsiveEllipsis
                        text={reviews.review}
                        maxLine={3}
                        ellipsis="..."
                        trimRight
                        basedOn="letters"
                        className="mb-3 ms-3 lh-sm"
                    />
                </Row>
                <Row>
                    <Col>
                        <h6 className="text-end text-secondary smaller">See full review (open when clicked)</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="smaller">
                            <span  className="fw-bold ms-3">
                                Show: 
                            </span> 
                            {reviews.show} 
                        </p>
                    </Col>
                    <Col>
                        <p className="smaller">
                            <span  className="fw-bold ms-3">
                                Show Location: 
                            </span> 
                            {reviews.location}
                        </p>
                        </Col>
                    <Col>
                        <p className="smaller"> 
                            <span  className="fw-bold ms-3">
                                Show Date: 
                            </span> 
                            {reviews.show_date}
                        </p>
                    </Col>
                </Row>        
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col className='d-flex justify-content-end'>
                        <Button onClick={formik.handleSubmit}>Submit Edits</Button>
                    </Col>
                </Row>
                
            </Row>
            <hr className='mt-5'></hr>
        </>
    )
}

export default EditUserReview

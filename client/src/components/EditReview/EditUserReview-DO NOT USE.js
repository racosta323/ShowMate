import { useState, useRef, useEffect } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import { useFormik } from 'formik'

import EditSubject from './EditSubject'
import EditStars from './EditStars'
import EditShow from './EditShow'
import EditReview from './EditReview'


function EditUserReview( ){
    const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

    const navigate = useNavigate()
    const params = useParams()
    const reviewId = params.reviewId

    const [starToggle, setStarToggle] = useState(false)
    const [starEdit, setStarEdit] = useState(false)   
    const [starInputClass, setStarInputClass] = useState('border border-0 bg-light')
    const [review, setReview] = useState("")


    useEffect(()=>{
        fetch(`/reviews/${reviewId}`)
        .then(resp=>resp.json())
        .then(data => setReview(data))
    }, [reviewId])

    console.log(review.subject)
    
    const { artists, setArtist, show, setShow, handleClose, handleShow, loggedInUser, renderList } = useOutletContext()
    
    const starInputRef = useRef(null)

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

    const formik = useFormik({
        initialValues: {
            subject: review.subject,
            stars: "",
            show: "",
            location: "",
            showDate: "",
            review: ""
            // subject: reviews.subject,
            // stars: reviews.stars,
            // show: reviews.show,
            // location: reviews.location,
            // showDate: reviews.show_date,
            // review: reviews.review
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
            } catch(error){

            }
            // navigate(`/profile/${formik.values.id}`)
            // window.location.reload()
        }
    })

    console.log(formik.values.subject)

    
    return(
        <>
            <Row className='border border-secondary-subtle rounded mt-5 p-2'>
                <Row >
                    <Col>
                        <h5 className="fw-bold">
                            <EditSubject 
                                text="subject" 
                                key={reviewId}
                                formik={formik} 
                            />
                        </h5>
                        
                    </Col>
                    <Col xs={4}> 
                        <h5 className="fw-bold">
                            <EditStars
                                text="stars" 
                                key={reviewId}
                                formik={formik}
                                // reviews={reviews} 
                            />
                        </h5>                
                    </Col>
                </Row>
                <Row>
                    
                    <h5 className="ms-3 text-secondary">
                        {/* <a href={`/artists/${artist.id}`} className='link-offset-2 link-underline link-underline-opacity-0'>
                            Artist: {artist.name}
                        </a> */}
                    </h5>
                    {/* <p className="ms-3 text-secondary smaller">Date Posted: {reviews.created_at}</p> */}
                
                
                    <EditReview
                        // id={artist.id} 
                        formik={formik}
                        // reviews={reviews} 
                    />
                    
                    <Col>
                        
                        {/* <ResponsiveEllipsis
                            text={reviews.review}
                            maxLine={3}
                            ellipsis="..."
                            trimRight
                            basedOn="letters"
                            className="mb-3 ms-3 lh-sm"
                        /> */}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 className="text-end text-secondary smaller">See full review (open when clicked)</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <EditShow 
                            // id={artist.id} 
                            formik={formik}
                            // reviews={reviews} 
                        />
                        {/* <p className="smaller">
                            <span  className="fw-bold ms-3">
                                Show: 
                            </span> 
                            {reviews.show} 
                        </p> */}
                    </Col>
                    {/* <Col>
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
                    </Col> */}
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

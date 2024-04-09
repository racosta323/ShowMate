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
import EditShow from './EditShow'
import EditReview from './EditReview'

function EditUserReview( { reviews }){
    const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

    console.log(reviews)

    const [starToggle, setStarToggle] = useState(false)
    const [starEdit, setStarEdit] = useState(false)   
    const [starInputClass, setStarInputClass] = useState('border border-0 bg-light')

    const starInputRef = useRef(null)

    const formik = useFormik({
        initialValues: {
            subject: reviews.subject,
            stars: reviews.stars,
            show: reviews.show,
            location: reviews.location,
            showDate: reviews.show_date,
            review: reviews.review
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

    
    return(
        <>
            <Row className='border border-secondary-subtle rounded mt-5 p-2'>
                <Row >
                    <Col>
                        <h5 className="fw-bold">
                            <EditSubject 
                                text="subject" 
                                id={reviews.id} 
                                formik={formik} 
                            />
                        </h5>
                        
                    </Col>
                    <Col xs={4}> 
                        <h5 className="fw-bold">
                            <EditStars
                                text="stars" 
                                id={reviews.id} 
                                formik={formik}
                                reviews={reviews} 
                            />
                        </h5>                
                    </Col>
                </Row>
                <Row>
                    
                    <h5 className="ms-3 text-secondary">
                        <a href={`/artists/${reviews.artist.id}`} className='link-offset-2 link-underline link-underline-opacity-0'>
                            Artist: {reviews.artist.name}
                        </a>
                    </h5>
                    <p className="ms-3 text-secondary smaller">Date Posted: {reviews.created_at}</p>
                
                
                    <EditReview
                        id={reviews.id} 
                        formik={formik}
                        reviews={reviews} 
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
                            id={reviews.id} 
                            formik={formik}
                            reviews={reviews} 
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

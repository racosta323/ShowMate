import { useState, useEffect, useRef } from 'react'
import { useNavigate, useOutletContext, useParams, NavLink } from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import { useFormik } from 'formik'
import EditReview from './EditReview'
import EditSubject from './EditSubject'
import EditStars from './EditStars'
import EditShowContainer from './EditShowContainer'

function EditUserReview(){
    const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)
    const inputRef = useRef(null)

    const { loggedInUser } = useOutletContext()

    const [review, setReview] = useState({})

    const params = useParams()
    const reviewId = params.reviewId
    const navigate = useNavigate()

    useEffect(()=>{
        fetch(`/reviews/${reviewId}`)
        .then(resp=>resp.json())
        .then(data => setReview(data))
    }, [reviewId])

    useEffect(() => {
        formik.setValues({
            ...formik.values,
            subject: review.subject,
            stars: review.stars,
            review: review.review,
            show: review.show,
            location: review.location,
            show_date: review.show_date
        });
    }, [review])


    const formik = useFormik({
        initialValues:{
            subject: review.subject,
            stars: review.stars,
            review: review.review,
            show: review.show,
            location: review.location,
            show_date: review.show_date
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

    console.log(formik.values)

    function handleDelete(){
        fetch(`/reviews/${reviewId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })
        
        .then(navigate(`/users/${loggedInUser.id}`))
    }

    

    return(
        <Row className='border border-secondary-subtle rounded'>
            <Row>
                <Col xs={8} className='mt-3'> 
                    <EditSubject reviewId={reviewId} formik={formik}/>
                </Col>
                <Col> 
                    <EditStars reviewId={reviewId} formik={formik}/>
                </Col>
            </Row>
            
            <Row>
                <Col>
                    <h5 className="ms-3 text-secondary"> 
                        <NavLink to={`/artists/${review.artist?.id}`} className='link-offset-2 link-underline link-underline-opacity-0'>
                            Artist: {review.artist?.name}
                        </NavLink>
                    </h5>
                    <p className="ms-3 text-secondary smaller">Date Posted: {review?.created_at}</p>
                </Col>
            </Row>

            <Row>
                <Col>
                    <EditReview reviewId={reviewId} formik={formik}/>
                </Col>
            </Row>
            
            <Row>   
                <Col>
                    <EditShowContainer reviewId={reviewId} formik={formik}/>
                </Col>
            </Row>

            <Row>
                <Col className='d-flex justify-content-end'>
                    <Button className='m-3' onClick={formik.handleSubmit} variant='success'>Submit Edits</Button>
                    <Button className='m-3' onClick={handleDelete} variant='danger'>Delete Review</Button>
                </Col>
            </Row>
        </Row>
    )
}

export default EditUserReview

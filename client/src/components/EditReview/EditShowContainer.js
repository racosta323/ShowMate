import { useState, useRef } from 'react'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'

import EditShowName from './EditShowName'
import EditShowDate from './EditShowDate'
import EditShowLocation from './EditShowLocation'


function EditShowContainer({ formik, reviewId }){


    return(
        <Container>
            <form>
                <Row className='my-3'>
                    <EditShowName reviewId={reviewId} formik={formik}/>
                    <EditShowLocation reviewId={reviewId} formik={formik}/>
                    <EditShowDate reviewId={reviewId} formik={formik}/>
                </Row>
            </form>         
        </Container>
    )
}

export default EditShowContainer
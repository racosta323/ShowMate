import { useState, useRef } from 'react'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'

import EditShowName from './EditShowName'
import EditShowDate from './EditShowDate'
import EditShowLocation from './EditShowLocation'


function EditShow({ formik, reviews }){


    return(
        <Container>
            <form>
                <Row>
                    <Stack direction='horizontal'>
                        <EditShowName formik={formik} reviews={reviews}/>
                        <EditShowLocation formik={formik} reviews={reviews}/>
                        <EditShowDate formik={formik} reviews={reviews}/>
                    </Stack>

                </Row>
            </form>         
        </Container>
    )
}

export default EditShow
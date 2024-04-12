import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useOutletContext, NavLink} from "react-router-dom";

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from 'react-bootstrap/Table'
import Stack from "react-bootstrap/Stack";

import Filters from "./Filters";

function Reviews(){

    const { reviews } = useOutletContext()

    const [ show, setShow ] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    const renderReviews = reviews?.map((review)=>{
        return (
            <tbody key = {review.id}>
                {console.log(review)}
                <tr>
                    <td>{review.id}</td>
                    <td>
                        <Col
                            as={NavLink}
                            to={`/artists/${review.artist.id}`}
                        >
                            {review.artist.name}
                        </Col>
                    </td>
                    <td>{review.artist.genre}</td>
                    <td>{review.show}</td>
                    <td>{review.location}</td>
                    <td>{review.show_date}</td>
                    <td>{review.stars}</td>
                    <td>
                        <Col
                            as={NavLink}
                            to={`/users/${review.user.id}`}
                        >
                            {review.user.username}
                        </Col>
                    </td>
                </tr>
            </tbody>
        )
    })

    

    return (
        <Container>
            <Row></Row>
            <Row className="my-5">
                <Col>
                    <p>Click on an entry to see the review <br/> Click on the filter icon to filter results</p>
                    <Stack direction="horizontal">
                        <i className="bi bi-filter fs-3" as="button" onClick={handleShow}></i>
                        <h3 className="m-4">Filters</h3>
                    </Stack>
                </Col>
            </Row>
            <Row>
                <Col>
                    Chosen Filters Here
                    <Filters show={show} handleClose={handleClose}/>
                </Col>
            </Row>
            <Row className="my-5">
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ARTIST</th>
                            <th>GENRE</th>
                            <th>SHOW</th>
                            <th>SHOW LOCATION</th>
                            <th>SHOW DATE</th>
                            <th>STARS</th>
                            <th>USERNAME</th>
                        </tr>
                    </thead>
                    {renderReviews}
                </Table>
            </Row>
        </Container>
    )
}

export default Reviews
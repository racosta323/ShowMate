import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from 'react-bootstrap/Table'

function Reviews(){

    const { reviews } = useOutletContext()

    const renderReviews = reviews.map((review)=>{
        return (
            <tbody>
                {console.log(review)}
                <tr>
                    <td>{review.id}</td>
                    <td>{review.artist.name}</td>
                    <td>{review.artist.genre}</td>
                    <td>{review.show}</td>
                    <td>{review.location}</td>
                    <td>{review.show_date}</td>
                    <td>{review.stars}</td>
                    <td>{review.user.username}</td>
                </tr>
            </tbody>
        )
    })

    return (
        <Container>
            <Row ></Row>
            <Row className="my-5">
                <Col>
                    Filters
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
                    {/* <tbody>
                        <tr>
                            <td>Table Cell, Row 1</td>
                            <td>Table Cell, Row 1</td>
                            <td>Table Cell, Row 1</td>
                            <td>Table Cell, Row 1</td>
                            <td>Table Cell, Row 1</td>
                            <td>Table Cell, Row 1</td>
                            <td>Table Cell, Row 1</td>
                            <td>Table Cell, Row 1</td>
                        </tr>
                        <tr>
                            <td>Table Cell, Row 2</td>
                            <td>Table Cell, Row 2</td>
                            <td>Table Cell, Row 2</td>
                            <td>Table Cell, Row 2</td>
                            <td>Table Cell, Row 2</td>
                            <td>Table Cell, Row 2</td>
                            <td>Table Cell, Row 2</td>
                            <td>Table Cell, Row 2</td>
                        </tr>
                    </tbody> */}
                    
                </Table>
            </Row>
        </Container>
    )
}

export default Reviews
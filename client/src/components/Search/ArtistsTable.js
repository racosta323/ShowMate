import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useOutletContext, NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from 'react-bootstrap/Table'
import Stack from "react-bootstrap/Stack";

function ArtistsTable(){

    const renderArtists = () => {
        return(
            <tbody>

                <tr>
                    <td>Rank</td>
                    <td>
                        <Col
                            as={NavLink}
                            to='#'
                            // href={`/artists/${review.artist.id}`}
                        >
                            Beyonce
                        </Col>
                    </td>
                    <td>Pop</td>
                    <td>Renaissance</td>
                    <td>D.C.</td>
                    <td>09/2023</td>
                    <td>5</td>
                    <td>
                        <Col
                            as={NavLink}
                            // href={`/users/${review.user.id}`}
                        >
                            {/* {review.user.username} */}
                        </Col>
                    </td>
                </tr>
            </tbody>
        )
    }

    return(
       <>
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
            {renderArtists()}
            </Table>
       
       </>
    )
}

export default ArtistsTable
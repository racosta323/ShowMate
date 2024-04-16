import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from 'react-bootstrap/Table'
import Stack from "react-bootstrap/Stack";
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Filters({ show, handleClose, reviews, handleArtistInput, handleArtistToggle, artistToggle, defaultValue}){

    
    const renderArtistNames = reviews?.reduce((uniqueNames, review) => {
        uniqueNames.add(review.artist.name);
        return uniqueNames;
    }, new Set());
    
    const uniqueArtistNames = Array.from(renderArtistNames);

    

    return(
        <Offcanvas 
            show={show} 
            onHide={handleClose} 
            placement="top" 
            // backdrop="static"
            backdropClassName="bg-tertiary"
        >
            <Row>
              <Col>
                <Offcanvas.Header closeButton aria-label="Hide">
                        <Offcanvas.Title>Sort by options below:</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Form>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Artist"
                                onClick={handleArtistToggle}
                                checked={artistToggle}
                            >
                            </Form.Check>
                            {artistToggle ? 
                                <>
                                    <Form.Select
                                        defaultValue={defaultValue}
                                        onInput={handleArtistInput}
                                        
                                    >
                                        <option>Choose...</option>
                                        {uniqueArtistNames.map((name, index) => (
                                            <option key={index} value={name}>{name}</option>
                                        ))}
                                    </Form.Select>
                                </> : 
                                <>

                                </> 
                            }
                        </Form>
                    </Offcanvas.Body>
              </Col>
            </Row>
           
            <Row className="my-5">
                <Col className='d-flex justify-content-center'>
                    <Button variant="dark">Sort</Button>
                </Col>
            </Row>
        </Offcanvas>
    )
}

export default Filters
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

function Filters({ show, handleClose}){

    const [artist, setArtist] = useState(false)

    function handleClick(event){
        setArtist(event.target.checked)
    }

    console.log(artist)

    return(
        <Offcanvas 
            show={show} 
            onHide={handleClose} 
            placement="top" 
            backdrop="static"
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
                                value={artist}
                                onClick={handleClick}
                            >
                            </Form.Check>
                            {artist ? 
                                <>
                                    <Form.Select>
                                        <option>Choose...</option>
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
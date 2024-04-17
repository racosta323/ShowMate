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



function Filters(
    {   
        show, 
        handleClose, 
        reviews, 
        handleArtistInput, 
        handleArtistToggle, 
        artistToggle, 
        defaultArtistValue,
        genreToggle,
        handleGenreToggle,
        handleGenreInput,
        defaultGenreValue
    }
){

    const filterArtistNames = reviews?.reduce((uniqueNames, review) => {
        uniqueNames.add(review.artist.name);
        return uniqueNames;
    }, new Set());
    
    const uniqueArtistNames = Array.from(filterArtistNames);

    const filterGenres = reviews?.reduce((uniqueGenres, review) => {
        uniqueGenres.add(review.artist.genre);
        return uniqueGenres;
    }, new Set());

    const uniqueGenreNames = Array.from(filterGenres);
    

    return(
        <Offcanvas 
            show={show} 
            onHide={handleClose} 
            placement="top" 
            backdropClassName="bg-tertiary"
        >
            <Row>
              <Col>
                <Offcanvas.Header closeButton aria-label="Hide">
                    <Offcanvas.Title>Sort by options below:</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form>
                        {genreToggle ? <>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Artist"
                                onClick={handleArtistToggle}
                                defaultChecked={artistToggle}
                                disabled
                            >
                            </Form.Check>
                        </>
                        : 
                        <>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Artist"
                                onClick={handleArtistToggle}
                                defaultChecked={artistToggle}
                            >
                            </Form.Check>
                        </>}
                        {artistToggle ? <>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Genre"
                                onClick={handleGenreToggle}
                                defaultChecked={genreToggle}
                                disabled
                            >
                        </Form.Check>
                        </>
                        : 
                        <>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Genre"
                                onClick={handleGenreToggle}
                                defaultChecked={genreToggle}
                            >
                            </Form.Check>
                        </>}
                        {artistToggle ? 
                            <>
                                <Form.Select
                                    defaultArtistValue={defaultArtistValue}
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
                        {genreToggle ? 
                            <>
                                <Form.Select
                                    defaultArtistValue={defaultGenreValue}
                                    onInput={handleGenreInput}
                                >
                                    <option>Choose...</option>
                                    {uniqueGenreNames.map((genre, index) => (
                                        <option key={index} value={genre}>{genre}</option>
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
        </Offcanvas>
    )
}

export default Filters
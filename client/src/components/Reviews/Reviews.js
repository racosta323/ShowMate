import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useOutletContext, NavLink} from "react-router-dom";

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from 'react-bootstrap/Table'
import Stack from "react-bootstrap/Stack"
import Pagination from 'react-bootstrap/Pagination'

import Filters from "./Filters";
import FilterButtons from "./FilterButtons";
import FilteredResults from './FilteredResults'
import PageNumbers from './PageNumbers'


function Reviews(){

    const { reviews } = useOutletContext()

    const [show, setShow] = useState(false)
    const [filteredArtist, setFilteredArtist] = useState(null)
    const [filteredGenre, setFilteredGenre] = useState(null)
    const [artistToggle, setArtistToggle] = useState(false)
    const [genreToggle, setGenreToggle] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [recordsPerPage, setRecordsPerPage] = useState(5)

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = reviews.slice(indexOfFirstRecord, indexOfLastRecord);
   

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const defaultArtistValue = artistToggle ? filteredArtist : "Choose...."
    const defaultGenreValue = genreToggle ? filteredArtist : "Choose...."

    function handleArtistToggle(event){
        setArtistToggle(event.target.checked)
    }

    function handleGenreToggle(event){
        setGenreToggle(event.target.checked)
    }

    function handleGenreInput(event){
        setFilteredGenre(event.target.value)
    }

    function handleFilterClick(){
        setArtistToggle(false)
        setGenreToggle(false)
        setFilteredArtist(null)
        setFilteredGenre(null)
    }

    function handleArtistInput(event){
        setFilteredArtist(event.target.value)
    }



    const renderReviews = currentRecords?.map((review)=>{
        return (
            <tbody key = {review.id}>
                <tr>
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
                    <td>
                        <Col
                            as={NavLink}
                            to={`/review/${review?.id}`}
                        >
                            <p>See Review</p>
                        </Col>
                    </td>
                </tr>
            </tbody>
        )
    })

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(reviews.length / recordsPerPage); i++) {
        pageNumbers.push(
            <Pagination.Item key={i} active={i === currentPage} onClick={() => setCurrentPage(i)}>
                {i}
            </Pagination.Item>
        );
    }

    const filteredArtistResults = reviews?.filter((review)=>{
            return review.artist.name === filteredArtist
    })


    const filteredGenreResults = reviews?.filter((review)=>{
        return review.artist.genre === filteredGenre
    })



    const combinedResults = () => {
        if (artistToggle && defaultArtistValue != "Choose...."){
            return <FilteredResults results={filteredArtistResults}/> 
        } else if (genreToggle && defaultGenreValue != "Choose...."){
            return <FilteredResults results={filteredGenreResults}/>
        } else {
            return renderReviews
        }
    }

    return (
        <Container>
            <Row className="my-5">
                <Col>
                    <p>Click on the filter icon to filter results</p>
                    <Stack direction="horizontal">
                        <i className="bi bi-filter fs-3" as="button" onClick={handleShow}></i>
                        <h3 className="m-4">Filters</h3>
                    </Stack>
                </Col>
            </Row>
            <Row>
                <Col>
                    {artistToggle ? <FilterButtons search={filteredArtist} handleFilterClick={handleFilterClick}/> : <></>}
                    {genreToggle ? <FilterButtons search={filteredGenre} handleFilterClick={handleFilterClick}/> : <></>}
                    {}
                    <Filters 
                        show={show} 
                        handleClose={handleClose} 
                        reviews={reviews} 
                        handleArtistInput={handleArtistInput} 
                        handleArtistToggle={handleArtistToggle}
                        handleGenreToggle={handleGenreToggle}
                        artistToggle={artistToggle}
                        genreToggle={genreToggle}
                        defaultArtistValue={defaultArtistValue}
                        handleGenreInput={handleGenreInput}
                        defaultGenreValue={defaultGenreValue}
                        />
                </Col>
            </Row>
            <Row className="mt-4">
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>ARTIST</th>
                            <th>GENRE</th>
                            <th>SHOW</th>
                            <th>SHOW LOCATION</th>
                            <th>SHOW DATE</th>
                            <th>STARS</th>
                            <th>USERNAME</th>
                            <th>REVIEW</th>
                        </tr>
                    </thead>
                    {combinedResults()}
                </Table>
            </Row>
            <Row>
                <Col className="d-flex justify-content-end">
                    <Pagination>{pageNumbers}</Pagination>
                </Col>
            </Row>
        </Container>
    )
}

export default Reviews
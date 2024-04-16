import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useOutletContext, NavLink} from "react-router-dom";

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from 'react-bootstrap/Table'
import Stack from "react-bootstrap/Stack";

import Filters from "./Filters";
import FilterButtons from "./FilterButtons";
import FilteredResults from './FilteredResults'

function Reviews(){

    const { reviews } = useOutletContext()

    const [show, setShow] = useState(false)
    const [filteredArtist, setFilteredArtist] = useState(null)
    const [filteredGenre, setFilteredGenre] = useState(null)
    const [artistToggle, setArtistToggle] = useState(false)
    const [genreToggle, setGenreToggle] = useState(false)
   

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
    }

    function handleArtistInput(event){
        setFilteredArtist(event.target.value)
    }



    const renderReviews = reviews?.map((review)=>{
        return (
            <tbody key = {review.id}>
                {/* {console.log(review)} */}
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

    //filtered results
    const filteredArtistResults = reviews?.filter((review)=>{
            return review.artist.name === filteredArtist
    })


    const filteredGenreResults = reviews?.filter((review)=>{
        return review.artist.genre === filteredGenre
    })

    console.log(filteredGenreResults)

    const combinedResults = () => {
        if (artistToggle && defaultArtistValue != "Choose...."){
            return <FilteredResults results={filteredArtistResults}/> 
        } else if (genreToggle && defaultGenreValue != "Choose...."){
            return <FilteredResults results={filteredGenreResults}/>
        } else {
            return renderReviews
        }
    }



    const renderFilteredResults = filteredArtistResults?.map((review)=>{
        return(
            <tbody key = {review.id}>
                {/* {console.log(review)} */}
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
    
    console.log(genreToggle)

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
                    {artistToggle ? <FilterButtons search={filteredArtist} handleFilterClick={handleFilterClick}/> : console.log("hello")}
                    {genreToggle ? <FilterButtons search={filteredGenre} handleFilterClick={handleFilterClick}/> : console.log("hello")}
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
                    {combinedResults()}
                    {/* {artistToggle ? <FilteredResults results={filteredArtistResults}/> : renderReviews}
                    {genreToggle? <FilteredResults results={filteredGenreResults}/> : renderReviews} */}
                </Table>
            </Row>
        </Container>
    )
}

export default Reviews
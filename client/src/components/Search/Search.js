import { useState } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import SearchList from './SearchList'
import NoResults from './NoResults'
import CreateProfile from './CreateArtistProfile'
import RecentArtists from './RecentArtists'

import { useLocation } from 'react-router-dom'


function Search({ results, input }) {

    const location = useLocation()


    return (
        <Container className='py-5'>
            <Row className='py-5'>
                <Col xs={8}>
                    <h2 className='fs-1'>Search '{location.state.input}'</h2>
                    <hr className='mb-5'></hr>

                    {/* <NoResults/> */}
                    {(location.state && location.state.results[0]) ?
                        <>
                            <SearchList
                                name={location.state.results[0].name}
                                genre={location.state.results[0].genre}
                                img={location.state.results[0].profile_image}
                                id={location.state.results[0].id}
                            />
                        </> :
                        <>
                            <NoResults />
                        </>
                    }
                    {/* <SearchList/> */}

                    <p className='text-end'>Don't see what you're looking for? </p>

                    <CreateProfile />

                </Col>
                <Col className='py-5'>
                    <Row className='bg-body-secondary p-5 mt-4'>
                        <h2>Recently <br /> Created <br /> Artists</h2>
                        <hr></hr>
                        {/* <Row>
                            <Col>
                                <p>ARTIST NAME</p>
                            </Col>
                            <Col>
                                <p>GENRE</p>
                            </Col>
                        </Row> */}
                        <RecentArtists />
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}

export default Search
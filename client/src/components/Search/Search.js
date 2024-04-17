import { useState, useEffect } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import SearchList from './SearchList'
import NoResults from './NoResults'
import CreateProfile from './CreateArtistProfile'
import RecentArtists from './RecentArtists'

import { useLocation } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
import { shuffle } from 'lodash'


function Search({ results, input }) {

    const location = useLocation()

    const { artists } = useOutletContext()
    const [renderedArtists, setRenderedArtists] = useState([]);

    useEffect(() => {
        if (Array.isArray(artists)) {
            const shuffledArtists = shuffle(artists)
        const rendered = shuffledArtists.slice(0, 5).map(artist => {
            return (<RecentArtists artist={artist} />)
        });
        setRenderedArtists(rendered)
        }
    }, [artists]);

    return (
        <Container className='py-5'>
            <Row className='py-5'>
                <Col xs={8}>
                    <h2 className='fs-1'>Search '{location.state.input}'</h2>
                    <hr className='mb-5'></hr>

                    {(location.state && location.state.results[0]) ?
                        <>
                            <SearchList
                                name={location.state.results[0].name}
                                genre={location.state.results[0].genre}
                                img={location.state.results[0].profile_image}
                                id={location.state.results[0].id}
                                key={location.state.results[0].id}
                            />
                        </> :
                        <>
                            <NoResults />
                        </>
                    }
  

                    <p className='text-end'>Don't see what you're looking for? </p>

                    <CreateProfile />

                </Col>
                <Col className='py-5'>
                    <Row className='bg-body-secondary p-5 mt-4'>
                        <p>Check out...</p>
                        <h2> Other <br /> Artists</h2>
                        <hr></hr>
                        {renderedArtists}
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}

export default Search
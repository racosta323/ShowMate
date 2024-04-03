import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import SearchBar from './SearchBar';
import SearchResultsList from './SearchResultsList';

function SearchBarContainer(){

    const [results, setResults] = useState([])

    return(
        <Row>
            <Col xs={12}>
                <SearchBar setResults={setResults}/>
            </Col>
            <Col xs={4}>
                <SearchResultsList results={results}/>
            </Col>
        </Row>
    )
}

export default SearchBarContainer
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import { useState } from 'react'

import SearchResultsList from './SearchResultsList';

function SearchBar({ setResults }){

    const [input, setInput] = useState("")

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
        
    }

    const fetchData = (value) => {
        let url = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=200&size=200&apikey=fOUwYet5E4mUic5tG4q5w3lY1ZMjyi8k"
        fetch(url)
        .then (resp => resp.json())
        .then(data => {
            const results = data._embedded.events.filter((event)=>{
                return value && event && event.name && event.name.toLowerCase().includes(value)
            })
            setResults(results)
        })
    }

    return(
        <div>
            <Form inline>
                <Row>
                    <Col xs={8}>
                        <Form.Control
                            type="text"
                            placeholder="Search for shows across the US"
                            className="mr-sm-2"
                            data-bs-theme="light"
                            onChange={(e)=>{handleChange(e.target.value)}}
                            // value={value}
                            // onChange={searchChange}
                        />
                        <SearchResultsList />
                    </Col>
    
                    <Col>
                        <Button variant="success" type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default SearchBar
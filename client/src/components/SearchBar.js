import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import { useState } from 'react'


function SearchBar(){

    const [input, setInput] = useState("")
    const [results, setResults] = useState({})

    const handleChange = (value) => {
        setInput(value)
        // fetchData(value)
        
    }


    //navbar search to search through MY db; no findings will prompt user to create profile
    const handleSubmit = (event) => {
        event.preventDefault()
        fetch(`/search/${input}`)
        .then (resp => resp.json())
        .then(data => {
            // const results = data._embedded.events.filter((event)=>{
            //     return value && event && event.name && event.name.toLowerCase().includes(value)
            // })
            setResults(data)
    
        })
    }

    console.log(results)

    //may be able to use if searching my db
    // const fetchData = (input) => {
    //     console.log(input)
    //     // let url = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=200&size=200&apikey=fOUwYet5E4mUic5tG4q5w3lY1ZMjyi8k"
    //     let url = `http://www.theaudiodb.com/api/v1/json/2/search.php?s=${input}`
    //     fetch(`http://www.theaudiodb.com/api/v1/json/2/search.php?s=${input}`)
    //     .then (resp => resp.json())
    //     .then(data => {
    //         // const results = data._embedded.events.filter((event)=>{
    //         //     return value && event && event.name && event.name.toLowerCase().includes(value)
    //         // })
    //         setResults(data)
    //         // setResults(results)
    //     })
    // }

    return(
        <div>
            <Form inline onSubmit={handleSubmit}>
                <Row>
                    <Col xs={8}>
                        <Form.Control
                            type="text"
                            placeholder="Search for shows across the US"
                            className="mr-sm-2 search"
                            data-bs-theme="light"
                            onChange={(e)=>{handleChange(e.target.value)}}
                            // value={value}
                            // onChange={searchChange}
                        />
                        {/* <SearchResultsList /> */}
                    </Col>
    
                    <Col>
                        <Button variant="dark" type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default SearchBar
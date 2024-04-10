import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Search from './Search';


function SearchBar(){

    const navigate = useNavigate()

    const [input, setInput] = useState("")
    const [results, setResults] = useState({})

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
        
    }

    function handleSubmit(){
        navigate('/search', {state:{input:input, results:results}})
    }

    // console.log(input)
    // console.log(results)


    //navbar search to search through MY db; no findings will prompt user to create profile
    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     fetch(`/artists`)
    //     .then (resp => resp.json())
    //     .then(data => {
    //         // const results = data._embedded.events.filter((event)=>{
    //         //     return value && event && event.name && event.name.toLowerCase().includes(value)
    //         // })
    //         console.log(data)
    
    //     })
    // }

    // console.log(results)

    //may be able to use if searching my db
    const fetchData = (input) => {
        
        console.log(input)
        fetch(`/artists`)
        .then (resp => resp.json())
        .then(data => {
            
            const results = data.filter((artist)=>{
                return input && artist && artist.name && artist.name.toLowerCase().includes(input)
            })
            setResults(results)
            console.log(results)
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
                            className="mr-sm-2 search"
                            data-bs-theme="light"
                            onChange={(e)=>{handleChange(e.target.value)}}
                            
                            // onChange={searchChange}
                        />
                        {/* <SearchResultsList /> */}
                    </Col>
    
                    <Col>
                        <Button variant="dark" type="button" onClick={handleSubmit}>Submit</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default SearchBar
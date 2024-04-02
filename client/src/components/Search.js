import { useEffect, useState } from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Search(){

    const [events, setEvents] = useState([])
    const [value, setValue] = useState('')

    let url = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=200&size=200&apikey=fOUwYet5E4mUic5tG4q5w3lY1ZMjyi8k'

    useEffect(()=>{
        fetch(url)
        .then (resp => resp.json())
        .then(data => {
            setEvents(data._embedded.events)
            console.log(data)
            })
    }, [])



    let eventsSearch = () => {
        return events.filter(event => {
            // console.log(event.name)
            const searchTerm = value.toLowerCase()
            const searchName = event.name.toLowerCase()
            return searchTerm && searchName.startsWith(searchTerm)
        }).map((event)=>{
            console.log(event.name)
            return(
                <div className='list-group'>
                    <a href="#" className='list-group-item list-group-item-action' aria-current="true">
                        <div className='d-flex w-100 justify-content-between'>
                            <h5 class="mb-1">{event.name}</h5>
                            <p class="mb-1">Some placeholder content in a paragraph.</p>
                            <small>3 days ago</small>
                        </div>
                    </a>
                </div>
            )
        })
    }

    // let eventsSearch = () => {
    //     return events.map((event)=>{
    //         console.log(event.name)
    //         return(
    //             <div className='list-group'>
    //                 <a href="#" className='list-group-item list-group-item-action' aria-current="true">
    //                     <div className='d-flex w-100 justify-content-between'>
    //                         <h5 class="mb-1">{event.name}</h5>
    //                         <p class="mb-1">Some placeholder content in a paragraph.</p>
    //                         <small>3 days ago</small>
    //                     </div>
    //                 </a>
    //             </div>
    //         )
    //     })
    // }


    const searchChange =(event) => {
        setValue(event.target.value)
    }

    const submitSearch = (searchTerm) => {
        //fetch from api
        console.log(searchTerm)
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
                            value={value}
                            onChange={searchChange}
                        />
                        {eventsSearch()}
                    </Col>
                    <Col>
                        <Button variant="success" type="submit" onClick={()=>submitSearch(value)}>Submit</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default Search
import { NavLink } from "react-router-dom"

import Col from 'react-bootstrap/Col'

function renderFilteredResults({ results }) {

    const filteredResults = results?.map((review) => {
        return (
            
                <tbody key={review.id}>
                    
                        <tr
                            as={NavLink}
                            to={`/artists/${review.artist.id}`}
                        >
                            {/* <td>{review.id}</td> */}
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
                                    to={`/users/${review.user.id}`}
                                >
                                    {review.user.username}
                                </Col>
                            </td>
                        </tr>
                
                </tbody>
            
        )
    })
    return filteredResults
}


export default renderFilteredResults
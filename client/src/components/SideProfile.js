import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function SideProfile({ data }){
    return(
        <Row className='my-2 bg-body-secondary border-start border-5 border-danger p-2'>
            <Col>
                <i className="bi bi-person-circle larger"></i>
                <h2 className='fs-4 fw-bold '>{data.first_name} {data.last_name}</h2>
                <p className='fs-7'>Profile created on: {data.created_at}</p>
            </Col>
        </Row>
    )
}

export default SideProfile
import { useNavigate } from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

function SearchList({ name, genre, img, id }){

    const navigate = useNavigate()

    return(
        <Row 
            className='bg-body-secondary border-start border-5 border-danger p-3'
            as="button"
            onClick={()=>{
                navigate(`/artists/${id}`)
            }}
        >
            <Col>
                <Image
                    src={img}
                    height={100}
                    width={100}
                    roundedCircle
                />
            </Col>
            <Col xs={11}>
                <h2 className='fs-4 fw-bold mt-2 text-center ps-3'>{name}</h2>
                <p className='fs-7 text-center ps-3'>{genre}</p>
            </Col>
        </Row>
    )
}

export default SearchList
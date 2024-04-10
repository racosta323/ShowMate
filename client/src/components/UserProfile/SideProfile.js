import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function SideProfile({ data, logoutUser }){

    function handleLogout(){
        fetch('/logout', {
            method: 'DELETE'
        }).then (resp=>{
            if(resp.ok){
                logoutUser()
            }
        })
    }
    

    return(
        <Row className='my-2 bg-body-secondary border-start border-5 border-danger p-2'>
            <Col>
                <i className="bi bi-person-circle larger"></i>
                <h2 className='fs-4 fw-bold '>{data.first_name} {data.last_name}</h2>
                <h2>{data.username}</h2>
                <p className='fs-7'>Profile created on: {data.created_at}</p>
                <p>
                    <a href="#" onClick={handleLogout} className='link-offset-2 link-underline link-underline-opacity-0'>
                        Logout
                    </a>
                </p>
            </Col>
        </Row>
    )
}

export default SideProfile
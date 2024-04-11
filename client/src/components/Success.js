import { useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Success(props){
    const navigate = useNavigate()

    function handleClick(){
        navigate(`/artists/${props.artistId}/reviews`)
        window.location.reload()
    }

    return(
        <Modal
            {...props}
            size='lg'
            centered
            backdrop="static"
        >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <h4>Success</h4>
                <p>
                    Your entry has been recorded successfully!
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClick}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Success
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

function FilterButtons({ search, handleFilterClick }){
    return(
        <Button
            variant="outline-danger"
            size="sm"
            onClick={handleFilterClick}
        >
           X {search}
        </Button>
    )
}

export default FilterButtons
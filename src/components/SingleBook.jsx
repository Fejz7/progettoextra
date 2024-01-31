import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row"
import  Col  from "react-bootstrap/Col";
import fantasy from '../data/fantasy.json'

const SingleBook = ({ bookIndex}) => {
    const book = fantasy[bookIndex]
    return (
        <Container>
        <Row className="justify-content-center">
            <h1 className="text-center">Fantasy</h1>
            <Col xs={12} md={4} key={book.asin}>
            <Card className="book-cover d-flex flex-column">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
    )
}

export default SingleBook;
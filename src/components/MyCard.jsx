import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import libri from '../data/horror.json'

function MyBooks() {
  return (
    <>
      {libri.map((books) => (
        <Card style={{ width: '18rem' }} className=" m-2" key={books.asin}>
          <Card.Img variant="top" src={books.img} />
          <Card.Body>
            <Card.Title>{books.title}</Card.Title>
            <Card.Text>
              <p>Categoria: {books.category}</p>
            </Card.Text>
            <Card.Text>
              <p>Prezzo: {books.price}€ </p>
            </Card.Text>
            <Button variant="success">Buy</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default MyBooks

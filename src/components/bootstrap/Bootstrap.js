import React, {useState} from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import "./Bootstrap.css"

export const Bootstrap = () => {
  const [ spinner, setSpinner ] = useState(false)

  const orderProduct = () => {
    console.log("I need this!")
  }
  return (
    <>
       <Button onClick={
        () => setSpinner(!spinner)
      }>
            Toggle Spinner
      </Button>
      <section className="cards">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <Card.Body>
            <Card.Title>Dogoneit</Card.Title>
            <Card.Text>
              We deliver packages for you dog!
            </Card.Text>
            <Button variant="outline-success">Order Now!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <Card.Body>
            <Card.Title>Dogoneit</Card.Title>
            <Card.Text>
              We deliver packages for you dog!
            </Card.Text>
            <Button variant="primary">Order Now!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <Card.Body>
            <Card.Title>Dogoneit</Card.Title>
            <Card.Text>
              We deliver packages for you dog!
            </Card.Text>
            <Button variant="info" onClick={
              () => orderProduct()
            }>
              Order Now!
            </Button>
          </Card.Body>
        </Card>
      </section>
      {spinner && <Spinner animation="border" variant="danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>}
    </>
  )
}
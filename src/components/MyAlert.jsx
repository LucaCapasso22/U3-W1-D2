import { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

function MyAlert() {
  const [show, setShow] = useState(true)

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Ciao GGGGGiovane</Alert.Heading>
        <p>
          Benvenuto nella libreria più brutta del web, proprio per questo, la
          userai.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>
    </>
  )
}

export default MyAlert

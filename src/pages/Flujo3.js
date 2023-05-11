import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Commons.css'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

function Flujo3() {

  // Variables
  const [mostrarAlerta, setMostrarAlerta] = useState(false)
  const [response, setResponse] = useState('')
  const [email, setEmail] = useState('')
  const [failResponse, setFailResponse] = useState(false)

  const executeFlux3 = () => {
    axios.post('http://localhost:9094/procesoNUNVTS?email=' + email).then(function (res) {
      setResponse(res.data)
      if (res.data.includes('satisfactoriamente')) {
        setFailResponse(false)
      }
      else {
        setFailResponse(true)
      }
      setMostrarAlerta(true)
    })
  }

  return (
    <>
      <div style={{ marginBottom: 40 }}>
        <h2 className='form-title'>Ejecutar Flujo 3</h2>
        <Form className='my-form'>
        <Form.Group className="mb-3" controlId="flujo-codigo">
            <Form.Label>Email empleado</Form.Label>
            <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          {mostrarAlerta ? <Alert variant={failResponse ? 'danger' : 'success'} onClose={() => setMostrarAlerta(false)} dismissible>{response}</Alert> : null}
        
          <Button variant="primary" onClick={() => executeFlux3()}>
            Ejecutar
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Flujo3
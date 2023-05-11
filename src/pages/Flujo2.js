import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Commons.css'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

function Flujo2() {

  // Variables
  const [mostrarAlerta, setMostrarAlerta] = useState(false)
  const [response, setResponse] = useState('')
  const [failResponse, setFailResponse] = useState(false)

  const executeFlux2 = () => {
    axios.post('http://localhost:9093/procesoNENV').then(function (res) {
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
        <h2 className='form-title'>Ejecutar Flujo 2</h2>
        <Form className='my-form'>
          <Form.Group className="mb-3" controlId="flujo-key">
            <Form.Label>MuleSoft está configurado para usar la Api Key 'secreto'. Recuerda que esta esté presente en tu base de datos</Form.Label>
          </Form.Group>

          {mostrarAlerta ? <Alert variant={failResponse ? 'danger' : 'success'} onClose={() => setMostrarAlerta(false)} dismissible>{response}</Alert> : null}
        
          <Button variant="primary" onClick={() => executeFlux2()}>
            Ejecutar
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Flujo2
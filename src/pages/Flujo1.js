import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Commons.css'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

function Flujo1() {

  // Variables
  const [mostrarAlerta, setMostrarAlerta] = useState(false)
  const [response, setResponse] = useState('')
  const [failResponse, setFailResponse] = useState(false)
  const [codigo, setCodigo] = useState(0)
  const [descripcion, setDescripcion] = useState('')
  const [operacion, setOperacion] = useState('')

  // Dropdown items
  const dropdownItems = [
    { value: 'consultar', label: 'Consultar' },
    { value: 'modificar', label: 'Modificar' },
    { value: 'crear', label: 'Crear' },
    { value: 'eliminar', label: 'Eliminar' }
  ];

  const executeFlux1 = () => {
    const xmldata = '<datos><codigo>' + codigo + '</codigo><descripcion>' + descripcion + '</descripcion><operacion>' + operacion + '</operacion></datos>'
    const config = {
      headers: { 'Content-Type': 'application/xml' }
    }

    axios.post('http://localhost:9092/ejercicio1', xmldata, config).then(function (res) {
      setResponse(res.data)
      if (res.data.includes('exito')) {
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
        <h2 className='form-title'>Ejecutar Flujo 1</h2>
        <Form className='my-form'>
          <Form.Group className="mb-3" controlId="flujo-codigo">
            <Form.Label>Código</Form.Label>
            <Form.Control type="number" onChange={(e) => setCodigo(parseInt(e.target.value))} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="flujo-nombre">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control type="text" onChange={(e) => setDescripcion(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="flujo-operacion">
            <Form.Label>Operacion</Form.Label>
            <Form.Select onChange={(e) => setOperacion(e.target.value)}>
              {dropdownItems.map((item) => (
                <option key={item.value} value={item.value}>{item.label}</option>
              ))}
            </Form.Select>
          </Form.Group>

          {mostrarAlerta ? <Alert variant={failResponse ? 'danger' : 'success'} onClose={() => setMostrarAlerta(false)} dismissible>{response}</Alert> : null}
        
          <Button variant="primary" onClick={() => executeFlux1()}>
            Ejecutar
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Flujo1
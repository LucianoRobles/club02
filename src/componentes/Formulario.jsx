import { useState,Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {v4 as uuid} from 'uuid';


const Formulario = ({agregarAsociado}) => {
    //Hook
    const [socio, editarSocio] = useState({
        nombre:"",
        dni:"",
        email:"",
    });
    
    const {nombre,dni,email,acept} = socio;
    
    const [error, setError] = useState(false);
    //Funciones
    

    const handleChange = (e) => {
        editarSocio({
            ...socio,
            [e.target.name] : e.target.value,
        })
    };

    const submitForm = (e) => {
        e.preventDefault();
                
        if (nombre.trim() === "" || dni.trim() === "" || email.trim() === ""){
            setError(true)
            return;
        }
        setError(false);
        socio.id = uuid();
        agregarAsociado(socio);
        editarSocio({
            nombre:"",
            dni:"",
            email:"",
        });
        //console.log("Usuario agregado");
        
    };

    return (
        <Fragment>  
        <Form onSubmit = {submitForm}>
            <Form.Group>
                <Form.Label>Nombre Socio</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Nombre/s Apellido/s" 
                    name="nombre"
                    onChange= {handleChange} 
                    value={nombre}
                    />
                <Form.Text>
                Usa el mismo que figura en tu dni 😉.
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Dni</Form.Label>
                <Form.Control 
                type="number" 
                placeholder="Dni o Ruc" 
                name="dni"
                onChange= {handleChange}
                value= {dni}
                />
                <Form.Text>
                Argentinos Dni - Peruanos Ruc.
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Correo</Form.Label>
                <Form.Control 
                type="email" 
                placeholder="ejemplo@yahoo.com" 
                name="email"
                onChange= {handleChange}
                value= {email}
                />
                <Form.Text>
                Escribi tu mail completo por favor 😋.
                </Form.Text>
            </Form.Group>
            <br/>          
            <Button 
                variant="outline-success" 
                type="submit"

            >
                Ingresar Socio
            </Button>
        </Form>
        <br></br>
        {
            error ? <h4> Completa todos los campos </h4> : null
        }
        
        </Fragment>
    );
}
 
export default Formulario;

import React, { Fragment } from 'react';
import {Row,Col,Badge,Button} from 'react-bootstrap';

const Socio = ({socio, borrarSocio}) => {
    return (  
        <Fragment>
            <Badge bg="success" >            
                <Col>Id: {socio.id}</Col>
                <Col>Nombre: {socio.nombre}</Col>                      
                <Col>Dni: {socio.dni}</Col>            
                <Col>Email: {socio.email}</Col>
                <br />
                <Button 
                    variant="outline-light"
                    size="sm"
                    onClick={()=> borrarSocio(socio.id)}
                >
                Eliminar Socio
                </Button>
            </Badge>
        </Fragment>
    );
}
 
export default Socio;
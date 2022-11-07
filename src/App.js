import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import { Fragment, useState, useEffect } from 'react';
import Formulario from './componentes/Formulario';
import HeaderForm from './componentes/HeaderForm';
import FooterForm from './componentes/FooterForm';
import Socio from './componentes/Socio';

function App() {
  
  

  let sociosIniciales = JSON.parse(localStorage.getItem('asociados'));
  if (!sociosIniciales) {
    sociosIniciales = [];
  };

  const [asociados,editarAsociados] = useState(sociosIniciales);

  //Hook
  

  useEffect(
    () => {
      if(sociosIniciales){
        localStorage.setItem('asociados', JSON.stringify(asociados))
      } else {
        localStorage.setItem('asociados', JSON.stringify([]));
      }
      
      console.log("Cambio el estado")
      
    }, [sociosIniciales]
  );
 
  //Funciones
  const agregarAsociado = (socio) => {
    editarAsociados([
      ...asociados,
      socio
    ])
  };
  
  const borrarSocio = (id) => {
        const listaFiltrada = asociados.filter(socio => socio.id !== id);
        editarAsociados(listaFiltrada);
  };
  
  //Vars and Lets
  let titulo2 = asociados.length === 0 ? "Esperando socios" : "Listado de socios";
  
  


  return (
    <Fragment>      
      <Container fluid>
        <HeaderForm/>
        <Row>
          <Col>
            <Formulario
            agregarAsociado = {agregarAsociado}
            />          
          </Col>
          <Col>
          {titulo2}
          <br/>
          {asociados.map(socio =>
            <Socio
              socio = {socio}
              key = {socio.id}
              borrarSocio = {borrarSocio}
            />
            )}
          </Col>
        </Row>
        <FooterForm
        />
    </Container>
    </Fragment>
  );
}

export default App;

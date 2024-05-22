import  { useState } from 'react';
import Habitacion from './Habitacion';
import arreglo from '../assets/habitaciones.json';
import Boton from '../Boton';
import Header from '../Header';
import { Link } from 'react-router-dom';
import BotonWhatsApp from '../BotonWhatsApp';
import '../index.css'
import Portada from '../portada';
import Descripcion from '../Descripcion';
import Maps from '../maps';

function Root() {

  const [setSeleccion] = useState({
    id: 0,
    descripcion: "",
    valor: 0,
    valor2: 0,
    urlImg: ""
  });
  
  
  const clicKHandler= (id,descripcion,valor,valor2,urlImg)=> {
    setSeleccion({
      id,descripcion,valor,valor2,urlImg
    })
  }
  
const listaHabitaciones = arreglo.map(({id,descripcion,valor,valor2,urlImg})=>(
  
  <div key={id} className='col-md-4 '>
    <Habitacion
      urlImg={urlImg}
      descripcion={descripcion}
      valor={valor}
      valor2={valor2}
      id={id}
    />
     
    <Link to={{ pathname: "/habitacion/" + id, state: { habitacion: { id, descripcion, valor, urlImg } } }} >
        <Boton  onClick={clicKHandler.bind(null, id,descripcion,valor,urlImg)} />
    </Link>
    
  </div>
))

  return (

    <div>
      <div>
      <Header /> 
      <Portada />
      <Descripcion />
      </div>  
      <div className="container-fluid d-flex row btn-contenedor" style={{ marginTop: '120px' }}>
        {listaHabitaciones}
      </div>
      <Maps />
      <BotonWhatsApp />
    </div>
  );
}

export default Root;

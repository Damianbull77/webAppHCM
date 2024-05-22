import PropTypes from 'prop-types';
import Habitacion from './Habitacion';
import arreglo from '../assets/habitaciones.json';
import { useParams } from 'react-router-dom';
import Header from '../Header'
import './DetalleHabitacion.css'

function DetalleHabitacion() {
  const {id} = useParams();  
  const habitacionId = Number(id);
  console.log(habitacionId)
  const habitacion = arreglo.find((habitacion) => habitacion.id === habitacionId);

  if (!habitacion) {
    return <div>Habitación no encontrada</div>;
  }

  return (
    <div className='container-padre'>
      <Header />  
      <div className='container'>
        <Habitacion className ='habitacion'
          urlImg={habitacion.urlImg}
          descripcion={habitacion.descripcion}
          valor={habitacion.valor}
          valor2={habitacion.valor2}
        />
      </div>
      
    </div>
  );
}

Habitacion.propTypes = {
  urlImg: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  valor: PropTypes.number.isRequired,
  valor2: PropTypes.number.isRequired,
};

export default DetalleHabitacion;

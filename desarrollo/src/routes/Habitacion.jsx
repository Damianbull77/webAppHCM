
import PropTypes from 'prop-types';
import '../header.css';
import '../index.css';

function Habitacion(props) {
  return (
    <div className="text-center">
      <div className='justify-content-center align-items-center'>
        <img className="img-habitacion border rounded-5 mw-100 max-height-80 img-fluid m-2" src={props.urlImg} alt="Habitación Hotel Casa Modelia" />
        <h3 className="title-habitacion text-center  fw-bold"> {props.descripcion}</h3>
        <p className="text-center  text-secondary fw-bold" style={{ color: '#a5a5a5' }}>1 Huésped $ {props.valor}</p>
        <p className="text-center  text-secondary fw-bold" style={{ color: '#a5a5a5' }}>2 Huéspedes $ {props.valor2}</p>
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

export default Habitacion;

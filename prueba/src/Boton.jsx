import PropTypes from 'prop-types';
import './index.css'


export default function Boton(props) {
    const handleClick = (event) => {
        event.stopPropagation(); // Detener la propagación del evento
        props.onClick(); // Llamar a la función de clic proporcionada por las props
    };
    return (
        <div className='btn-contenedor'>
            <button onClick={handleClick} className="btn-habitacion fw-bold" >Conocer</button>
        </div>
    );
}


Boton.propTypes = {
    onClick: PropTypes.func.isRequired
};
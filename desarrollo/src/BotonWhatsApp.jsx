import '@fortawesome/fontawesome-svg-core/styles.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 
import './BotonWhatsApp.css';

export default function BotonWhatsApp() {
    return (
        <div>
            <a href="https://wa.me/3123717801?text=Hola,%20quisiera%20realizar%20una%20reserva" className="btn-wsp" target="_blank" rel="noreferrer">
                <span className="icon-container">
                    <FontAwesomeIcon icon={faWhatsapp} className="heartbeat" />
                </span>
            </a>
        </div>
    );
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugSaucer, faUtensils, faMartiniGlass, faDumbbell, faTaxi} from '@fortawesome/free-solid-svg-icons'; 
import './descripcion.css'

export default function Descripcion(){
    return(
        <div className="principal">
            <div className="descripcion">
                <p>
                    Bienvenido a Hotel Casa Modelia, tu hogar lejos de casa ubicado en el corazón del prestigioso barrio Modelia al occidente de
                    Bogotá. A solo 4 kilómetros del aeropuerto y a 4 kilometros del terminal de transportes salitre y a 400 metros del centro comercial Hayuelos, 
                    nuestro hotel cuenta con 22 habitaciones, restaurante bar y Gimnacio. Disfruta de un ambiente familiar y accede a una gran variedad de comercios locales. 
                    Ya sea por negocios o placer, Hotel Casa Modelia te ofrece una estancia inolvidable en una de las mejores zonas de la ciudad. 
                    ¡Te esperamos con los brazos abiertos!
                </p>
            </div>
            <div className="zonas-sociales">
                <section>
                    <h3><FontAwesomeIcon icon={faMugSaucer} /> Desayuno</h3>
                    <p>De lunes a viernes (07:30 - 9:30 am)</p>
                    <p>sabados y domingos (07:00 - 10:00 am)</p>
                    <p>Incluido en todas las reservas</p>
                </section>
                <section>
                    <h3><FontAwesomeIcon icon={faMartiniGlass}/> Bar</h3>
                    <p>Acceso al bar a partir de las 02:00 pm</p>
                </section>
                <section>
                    <h3><FontAwesomeIcon icon={faUtensils}/> Restaurante</h3>
                    <p>El servicio de restaurante se encuentra sujeto a reserva</p>
                </section>
                <section>
                    <h3><FontAwesomeIcon icon={faDumbbell}/> Gimnasio</h3>
                    <p>Ejercítate mientras disfrutas de la mejor estadía</p>
                </section>
                <section>
                    <h3><FontAwesomeIcon icon={faTaxi}/> Transporte</h3>
                    <p>Ofrecemos servicio de transporte in-out.</p>
                </section>
            </div>
        </div>
    )
}

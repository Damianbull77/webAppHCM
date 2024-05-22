import { useRouteError, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './error.css'
import  logo from './assets/logoHotelCasaModelia.png'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const style ={
    padding: '5px',
    'borderRadius': '60px',
    height:'150px'
}

  return (
    <div id="error-page" className="text-center mw-100 row pt-100 col-12">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/' className="container-btn"><button className="back-error-btn">Back to the Hotel</button></Link>
      <Link to="/" className="logotipo">
        <img  
          style={style}             
          src={logo}
          alt="Hotel Casa Modelia"
        />
      </Link>

    </div>
  );
}
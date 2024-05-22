import { Link } from "react-router-dom";

export default function Prueba() {

    const pruebas =[ 1,2,3,4,5];

    return(
      <div>
        {pruebas.map((prueba)=>(
            <Link key={prueba} to={`/pruebas/${prueba}`}>
                prueba {prueba}
            </Link>
        ))}
      </div>
    );
}

import { Button, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import  logo from './assets/logoHotelCasaModelia.png'
import './header.css'



function Header(){

    const style ={
        padding: '5px',
        'borderRadius': '60px',
        height:'80px'
    }
    
    return (
        <div className='container bg-info custom-container'>
            
            <div  className='row' >
                <Navbar bg="dark" variant='dark'expand="lg" className='fixed-top px-4'>
                <Nav.Link href='/'> 
                        <img
                        style={style}
                        src={logo}
                        className="d-inline-block align-top"
                        alt="Hotel Casa Modelia"
                        />
                </Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Conocenos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Club Casa Modelia</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Turismo</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Servicios Adicionales</NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                            <Button variant="outline-success">Registrate</Button>
                        </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
        
    )
}


export default Header

import { Navbar ,Container ,Nav ,NavDropdown} from 'react-bootstrap';
import { navLinks } from '../src/data/index.js';
import { NavLink } from 'react-router-dom';
import { useState ,useEffect } from 'react'

const NavbarWeb = () => {
     const [ changeColor, setChangeColor ] = useState(false);
    const changeBackgroundColor = () => {
      if(window.scrollY > 10 ){
        setChangeColor(true);
      }else{
        setChangeColor(false);
      }
    };
  
  useEffect(() => {
    changeBackgroundColor();
    
    window.addEventListener("scroll",  changeBackgroundColor );
  });
  
  return(
    <>
    <div>
    <Navbar expand="lg" className={changeColor ? "color-active" : ""} >
      <Container>
        <Navbar.Brand href="#home"> <span>
        Ertand.</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
          {navLinks.map((link) => {
            return(
              <div key={link.id} className="nav-link">
                <NavLink to={link.path} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  } end >{link.text}</NavLink>
              </div>
            )
          })}
          </Nav>
              <div className="text-center">
                <a className="btn btn-outline-danger">Join us Now</a>
              </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
    );
}
export default NavbarWeb
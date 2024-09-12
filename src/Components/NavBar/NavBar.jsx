import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "./../../../public/img/logo.png";
import './NavBar.css'
import MakeBtn from "../MakeBtn/MakeBtn";
const NavBar = () => {
  return (
    <>
      <Navbar style={{fontFamily : 'var(--third-font)'}} expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand style={{flexGrow : '1'}} href="#">
            <img className="Mk-logo" style={{ width: "120px" }} src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <div className="d-flex justify-content-end">
            <Navbar.Collapse className="justify-content-end" id="navbarScroll">
              <Nav style={{ fontSize: "14px", fontWeight: "500" }} navbarScroll>
                <Nav.Link className="p-3" href="#home">
                  HOME
                </Nav.Link>
                <Nav.Link className="p-3" href="#about">
                  ABOUT
                </Nav.Link>
                <Nav.Link className="p-3" href="#action2">
                  SERVICES
                </Nav.Link>
                <Nav.Link className="p-3" href="#action2">
                  DEPATMENTS
                </Nav.Link>
                <Nav.Link className="p-3" href="#action2">
                  DOCTORS
                </Nav.Link>
                <NavDropdown
                  className="p-2"
                  title="DROPDOWN"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action3">DropDown</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="p-3" href="#contact">
                  CONTACT
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
           <MakeBtn/>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

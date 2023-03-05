import { useKeycloak } from "@react-keycloak/web";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const NavbarCustom = () => {
  const { keycloak } = useKeycloak();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Music App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/playlists">
                Playlists
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link
              as="span"
              className={styles.logout}
              onClick={() => keycloak.logout()}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarCustom;

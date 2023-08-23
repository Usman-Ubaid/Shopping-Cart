import { Navbar as NavbarBs, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Cart from "../assets/Cart";

const Navbar = () => {
  return (
    <>
      <NavbarBs className="shadow-sm">
        <Container>
          <Nav>
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink}>
              Store
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
              About
            </Nav.Link>
          </Nav>
          <Button
            variant="outline-secondary"
            className="cart-button rounded-circle"
          >
            <Cart />
            <div className="bg-danger rounded-circle text-light cart-count">
              1
            </div>
          </Button>
        </Container>
      </NavbarBs>
    </>
  );
};

export default Navbar;

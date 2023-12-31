import { Navbar as NavbarBs, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../hooks/ShoppingCartContext/useShoppingCart";
import Cart from "../assets/Cart";

const Navbar = () => {
  const { cartQuantity, openCart } = useShoppingCart();
  return (
    <>
      <NavbarBs className="shadow-sm">
        <Container>
          <Nav>
            <Nav.Link to="/" as={NavLink}>
              Store
            </Nav.Link>
          </Nav>
          {cartQuantity > 0 && (
            <Button
              variant="outline-secondary"
              className="cart-button rounded-circle"
              onClick={openCart}
            >
              <Cart />
              <div className="bg-danger rounded-circle text-light cart-count">
                {cartQuantity}
              </div>
            </Button>
          )}
        </Container>
      </NavbarBs>
    </>
  );
};

export default Navbar;

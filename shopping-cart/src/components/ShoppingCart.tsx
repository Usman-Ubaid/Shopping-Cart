import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../hooks/ShoppingCartContext/useShoppingCart";

const ShoppingCart = () => {
  const { closeCart, isOpen } = useShoppingCart();

  return (
    <>
      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Some placeholder text.</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ShoppingCart;

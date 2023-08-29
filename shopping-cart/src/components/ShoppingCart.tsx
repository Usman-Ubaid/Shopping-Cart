import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../hooks/useShoppingCart";

const ShoppingCart = () => {
  const { closeCart, isOpen } = useShoppingCart();
  //   const [show, setShow] = useState(false);

  //   const handleOpen = () => setShow(true);
  //   const handleClose = () => setShow(false);

  return (
    <>
      <Offcanvas show={isOpen} onHide={closeCart}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>OffCanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Some placeholder text.</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ShoppingCart;

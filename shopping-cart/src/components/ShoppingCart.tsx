import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../hooks/ShoppingCartContext/useShoppingCart";
import { useFetchData } from "../hooks/FetchDataContext/useFetchData";
import CartItem from "./CartItem";
import { currencyFormatter } from "../utils/currencyFormatter";

const ShoppingCart = () => {
  const { closeCart, isOpen, cartItems } = useShoppingCart();
  const { data } = useFetchData();

  return (
    <>
      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto">
              <h4>
                Total:{" "}
                <span>
                  {currencyFormatter(
                    cartItems.reduce((total, cartItem) => {
                      const item = data.find((elem) => elem.id === cartItem.id);
                      return total + (item?.price || 0) * cartItem.quantity;
                    }, 0)
                  )}
                </span>
              </h4>
            </div>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ShoppingCart;

import { useShoppingCart } from "../hooks/ShoppingCartContext/useShoppingCart";
import { useFetchData } from "../hooks/FetchDataContext/useFetchData";
import { Stack, CloseButton } from "react-bootstrap/";
import { currencyFormatter } from "../utils/currencyFormatter";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeItem } = useShoppingCart();
  const { data } = useFetchData();

  const item = data.find((elem) => elem.id === id);
  if (item == null) return null;

  return (
    <Stack gap={3}>
      <div className="d-flex align-items-center ">
        <img className="cart-img" src={item.image} />
        <div className="me-auto ms-2" style={{ fontSize: "0.8rem" }}>
          {item.title}{" "}
          {quantity > 1 && <span className="text-muted">(x{quantity}) </span>}{" "}
          <p className="text-muted">{currencyFormatter(item.price)}</p>
        </div>

        <p className="my-auto mx-2" style={{ fontSize: "0.9rem" }}>
          {currencyFormatter(quantity * item.price)}
        </p>
        <CloseButton onClick={() => removeItem(item.id)} />
      </div>
    </Stack>
  );
};

export default CartItem;

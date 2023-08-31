import { Card, Button } from "react-bootstrap";
import { currencyFormatter } from "../utils/currencyFormatter";
import { useShoppingCart } from "../hooks/ShoppingCartContext/useShoppingCart";

type StoreItemProps = {
  image: string;
  price: number;
  title: string;
  id: number;
};

const StoreItem = ({ image, price, title, id }: StoreItemProps) => {
  const {
    getItemQuantity,
    removeItem,
    decreaseItemQuantity,
    increaseItemQuantity,
    addToCart,
  } = useShoppingCart();

  return (
    <Card className="d-flex h-100">
      <Card.Img variant="top" src={image} className="card-img" />
      <Card.Body className="d-flex flex-column g-3">
        <Card.Title className="fs-6 d-flex justify-content-between align-items-baseline">
          <span className="w-75 me-3">{title}</span>
          <span>{currencyFormatter(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {getItemQuantity(id) === 0 ? (
            <Button
              onClick={() => addToCart(id)}
              variant="primary"
              className="w-100"
            >
              + Add to Cart
            </Button>
          ) : (
            <div className="d-flex flex-column align-items-center">
              <div className="my-2 d-flex justify-content-center align-items-center">
                <Button
                  onClick={() => decreaseItemQuantity(id)}
                  variant="primary"
                >
                  -
                </Button>
                <span className="mx-2">{`${getItemQuantity(id)} in cart`}</span>
                <Button
                  variant="primary"
                  onClick={() => increaseItemQuantity(id)}
                >
                  +
                </Button>
              </div>
              <Button variant="danger" size="sm" onClick={() => removeItem(id)}>
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;

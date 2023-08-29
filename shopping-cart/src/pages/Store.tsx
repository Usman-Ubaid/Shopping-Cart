import { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { currencyFormatter } from "../utils/currencyFormatter";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

type CartItemProps = {
  id: number;
  quantity: number;
};

const Store = () => {
  const [data, setData] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const handleAddToCart = (id: number) => {
    const itemIndex = cartItems.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
      setCartItems([...cartItems, { id, quantity: 1 }]);
    } else {
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    }
  };

  const increaseItemQuantity = (getItem: { id: number }) => {
    const itemIndex = cartItems.findIndex((item) => item.id === getItem.id);
    const updatedCartItem = [...cartItems];
    updatedCartItem[itemIndex].quantity += 1;
    setCartItems(updatedCartItem);
  };

  const decreaseItemQuantity = (getItem: { id: number }) => {
    const itemIndex = cartItems.findIndex((item) => item.id === getItem.id);
    const updatedCartItem = [...cartItems];
    updatedCartItem[itemIndex].quantity -= 1;
    setCartItems(updatedCartItem);
  };

  const fetchData = async () => {
    try {
      const fetchData = await fetch("https://fakestoreapi.com/products");
      const response = await fetchData.json();
      setData(response);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="mt-4 ">Store</h1>
      <Row xs={1} md={2} lg={4}>
        {data?.map((item) => (
          <Col key={item.id} className="g-3 mb-5">
            <Card className="d-flex h-100">
              <Card.Img variant="top" src={item.image} className="card-img" />
              <Card.Body className="d-flex flex-column g-3">
                <Card.Title className="fs-6 d-flex justify-content-between align-items-baseline">
                  <span className="w-75 me-3">{item.title}</span>
                  <span>{currencyFormatter(item.price)}</span>
                </Card.Title>
                <div className="mt-auto">
                  {getItemQuantity(item.id) === 0 ? (
                    <Button
                      onClick={() => handleAddToCart(item.id)}
                      variant="primary"
                      className="w-100"
                    >
                      + Add to Cart
                    </Button>
                  ) : (
                    <div className="d-flex flex-column align-items-center">
                      <div className="my-2 d-flex justify-content-center align-items-center">
                        <Button
                          onClick={() => decreaseItemQuantity(item)}
                          variant="primary"
                        >
                          -
                        </Button>
                        <span className="mx-2">{`${getItemQuantity(
                          item.id
                        )} in cart`}</span>
                        <Button
                          variant="primary"
                          onClick={() => increaseItemQuantity(item)}
                        >
                          +
                        </Button>
                      </div>
                      <Button variant="danger" size="sm">
                        Remove
                      </Button>
                    </div>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;

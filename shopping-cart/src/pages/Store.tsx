import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { currencyFormatter } from "../utils/currencyFormatter";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

const Store = () => {
  const [data, setData] = useState<Product[]>([]);

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
    console.log(data);
  }, []);

  return (
    <>
      <h1 className="mt-4 ">Store</h1>
      <Row xs={1} md={2} lg={4}>
        {data?.map((item) => (
          <Col key={item.id} className="g-3 mb-5">
            <Card className="d-flex" style={{ height: "100%" }}>
              <Card.Img variant="top" src={item.image} className="card-img" />
              <Card.Body>
                <Card.Title className="fs-6 d-flex justify-content-between align-items-baseline">
                  <span className="w-75">{item.title}</span>
                  <span>{currencyFormatter(item.price)}</span>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;

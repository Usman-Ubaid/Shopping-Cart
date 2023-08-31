import { Row, Col } from "react-bootstrap";
import { useFetchData } from "../hooks/FetchDataContext/useFetchData";
import StoreItem from "../components/StoreItem";

const Store = () => {
  const { data } = useFetchData();

  return (
    <>
      <h1 className="mt-4 ">Store </h1>
      <Row xs={1} md={2} lg={4}>
        {data?.map((item) => (
          <Col key={item.id} className="g-3 mb-5">
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;

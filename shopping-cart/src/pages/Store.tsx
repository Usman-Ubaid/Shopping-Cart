import { useState, useEffect } from "react";

const Store = () => {
  const [data, setData] = useState([]);
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
      <h1>Store</h1>

      <div>
        {data.map((item, index) => (
          <p key={index}>{item.title}</p>
        ))}
      </div>
    </>
  );
};

export default Store;

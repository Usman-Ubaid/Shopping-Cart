export const fetchData = async () => {
  try {
    return await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
    // const response = await fetch("https://fakestoreapi.com/products");
    // const data = await response.json();
  } catch (error) {
    console.log("Error fetching data", error);
  }
};

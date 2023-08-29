export const fetchData = async () => {
  try {
    return await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
  } catch (error) {
    console.log("Error fetching data", error);
  }
};

import { createContext, ReactNode, useState, useEffect } from "react";
import { fetchData } from "../../utils/fetchData";

type FetchDataProviderProps = {
  children: ReactNode;
};

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

type FetchedDataContextValue = {
  data: Product[];
};

export const FetchDataContext = createContext({} as FetchedDataContextValue);

export const FetchDataProvider = ({ children }: FetchDataProviderProps) => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    fetchData().then((res) => setData(res));
  }, []);

  return (
    <FetchDataContext.Provider value={{ data }}>
      {children}
    </FetchDataContext.Provider>
  );
};

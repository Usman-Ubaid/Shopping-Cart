import { useContext } from "react";
import { FetchDataContext } from "./FetchDataContext";

export const useFetchData = () => {
  return useContext(FetchDataContext);
};

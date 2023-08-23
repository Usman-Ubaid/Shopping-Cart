import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Store from "../pages/Store";

type Route = {
  id: number;
  page: JSX.Element;
  path: string;
};

const AppRoutes = () => {
  const routes: Route[] = [
    { id: 1, page: <Home />, path: "/" },
    { id: 2, page: <Store />, path: "/store" },
    { id: 3, page: <About />, path: "/about" },
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.id} path={route.path} element={route.page} />
      ))}
    </Routes>
  );
};

export default AppRoutes;

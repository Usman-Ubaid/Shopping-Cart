import { Routes, Route } from "react-router-dom";
import Store from "../pages/Store";

type Route = {
  id: number;
  page: JSX.Element;
  path: string;
};

const AppRoutes = () => {
  const routes: Route[] = [{ id: 2, page: <Store />, path: "/" }];

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.id} path={route.path} element={route.page} />
      ))}
    </Routes>
  );
};

export default AppRoutes;

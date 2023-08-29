import { Container } from "react-bootstrap";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./hooks/ShoppingCartContext/ShoppingCartContext";
import { FetchDataProvider } from "./hooks/FetchDataContext/FetchDataContext";
import "./App.css";

function App() {
  return (
    <FetchDataProvider>
      <ShoppingCartProvider>
        <Navbar />
        <Container>
          <AppRoutes />
        </Container>
      </ShoppingCartProvider>
    </FetchDataProvider>
  );
}

export default App;

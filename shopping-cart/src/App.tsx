import { Container } from "react-bootstrap";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./hooks/ShoppingCartContext";
import "./App.css";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container>
        <AppRoutes />
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;

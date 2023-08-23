import { Container } from "react-bootstrap";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <AppRoutes />
      </Container>
    </>
  );
}

export default App;

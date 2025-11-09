import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar/";
import Error from "./components/Error";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <Box sx={{ mt: 10, mb: 10 }}>
      <NavBar />
      <Container sx={{ p: 0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artwork/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;

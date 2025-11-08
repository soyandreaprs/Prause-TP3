import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NavBar from "./components/NavBar/";
import { Box, Container } from "@mui/material";


function App() {

  return (
    <Box sx={{gap: 20}} >
      <NavBar />
      <Container sx={{}} >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Container>
    </Box>
  )
}

export default App

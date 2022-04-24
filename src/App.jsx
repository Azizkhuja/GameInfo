import Header from "./components/Header/Header";
import MainHead from "./components/MainHead/MainHead";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import "swiper/css/bundle";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Box sx={{ backgroundColor: "#1C1E22" }}>
        <Header />
        <MainHead />
        <Box sx={{ backgroundColor: "#2A2E33" }}>
          <Cards />
        </Box>
        <Footer />
      </Box>
    </div>
  );
}

export default App;

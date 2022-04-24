import Header from "./components/Header/Header";
import MainHead from "./components/MainHead/MainHead";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import "swiper/css/bundle";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Box sx={{ backgroundColor: "#1C1E22" }}>
        <Header />
        <MainHead />
      </Box>
    </div>
  );
}

export default App;

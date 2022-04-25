import Header from "../Header/Header";
import MainHead from "..//MainHead/MainHead";

import Box from "@mui/material/Box";
import Cards from "..//Cards/Cards";
import Footer from "..//Footer/Footer";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#1C1E22" }}>
      <Header />
      <MainHead />
      <Box sx={{ backgroundColor: "#2A2E33" }}>
        <Cards />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;

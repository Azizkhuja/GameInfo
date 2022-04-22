import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SwiperHead from "../Swiper/SwiperHead";

const MainHead = () => {
  return (
    <Box sx={{ flexGrow: 1, height: 300 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ paddingTop: 0 }}>
          <SwiperHead />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainHead;

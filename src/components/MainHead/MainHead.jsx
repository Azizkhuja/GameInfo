import { Grid, Container, Box, Typography, Button } from "@mui/material";
import SwiperHead from "../Swiper/SwiperHead";

const MainHead = () => {
  return (
    <Box sx={{ flexGrow: 1, height: 300 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ paddingTop: 0 }}>
          <Container
            sx={{
              textAlign: "center",
              padding: 10,
              backgroundColor: "#1C1E22",
            }}
          >
            <Typography variant="h4" sx={{ color: "#AAAAAA" }}>
              Find & track the best{" "}
              <span style={{ color: "#48ACFF" }}>free-to-play</span> games!
            </Typography>
            <Typography variant="h6" sx={{ color: "#798287", marginBottom: 2 }}>
              Track what you've played and search for what to play next! Plus
              get free premium loot!
            </Typography>
            <Button variant="contained" sx={{ marginRight: 1 }}>
              Get Start!
            </Button>
            <Button variant="outlined">Browse Games</Button>
          </Container>
          {/* <SwiperHead /> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainHead;

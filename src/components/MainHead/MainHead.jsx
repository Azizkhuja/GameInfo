import { Grid, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const MainHead = () => {
  return (
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
            Track what you've played and search for what to play next! Plus get
            free premium loot!
          </Typography>
          <Button variant="contained" sx={{ marginRight: 1 }}>
            <Link to="/gamelist">Get Start!</Link>
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "#AAAAAA", borderColor: "#AAAAAA" }}
          >
            <Link to="/gamelist"> Browse Games</Link>
          </Button>
        </Container>
      </Grid>
    </Grid>
  );
};

export default MainHead;

import {
  Grid,
  Typography,
  Card,
  CardMedia,
  Container,
  Divider,
} from "@mui/material";

import ReadMore from "./ReadMore";
const noData =
  "Sorry at the moment we don't have a informatiom about this game or please check later!";

const GameListInfoRight = ({ gameInfoRight }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container>
          <Typography
            variant="h3"
            sx={{
              backgroundColor: "#1C1E22",
              color: "#fff",
              textAlign: "center",
              padding: 1,
            }}
          >
            {gameInfoRight.title || noData}
          </Typography>

          <br />

          {/* Screenshots */}
          <Typography variant="h5" sx={{ marginBottom: 1 }}>
            {gameInfoRight.title} Screenshots
          </Typography>
          <Divider />
          <Grid container spacing={2}>
            {gameInfoRight.screenshots?.map((screenshot) => (
              <Grid item xs={3} key={screenshot.id}>
                <Card>
                  <CardMedia
                    component="img"
                    image={screenshot.image}
                    alt={screenshot.image}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
          <br />
          {/* Minimum System Requirements */}
          <Typography variant="h5">Minimum System Requirements</Typography>
          <Grid
            container
            sx={{
              backgroundColor: "#1C1E22",
              padding: 1,
              borderRadius: 1,
              color: "#fff",
            }}
          >
            <Grid item xs={5} sx={{ marginBottom: 1 }}>
              <Typography className="muted">OS</Typography>
              <Typography>
                {gameInfoRight.minimum_system_requirements?.os}
              </Typography>
            </Grid>
            <Grid item xs={7} sx={{ marginBottom: 1 }}>
              <Typography className="muted">Processor</Typography>
              <Typography>
                {gameInfoRight.minimum_system_requirements?.processor}
              </Typography>
            </Grid>
            <Grid item xs={5} sx={{ marginBottom: 1 }}>
              <Typography className="muted">Memory</Typography>
              <Typography>
                {gameInfoRight.minimum_system_requirements?.memory}
              </Typography>
            </Grid>
            <Grid item xs={7} sx={{ marginBottom: 1 }}>
              <Typography className="muted">Graphics</Typography>
              <Typography>
                {gameInfoRight.minimum_system_requirements?.graphics}
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography className="muted">Storage</Typography>
              <Typography>
                {gameInfoRight.minimum_system_requirements?.storage}
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography className="muted">Additional Notes</Typography>
              <Typography>
                Specifications may change during development
              </Typography>
            </Grid>
          </Grid>
          {/* About */}
          <Typography sx={{ marginBottom: 1 }} variant="h5">
            About {gameInfoRight.title}
          </Typography>
          <Divider />
          <Typography variant="body1" sx={{ marginBottom: 3 }}>
            <ReadMore>{gameInfoRight.description}</ReadMore>
          </Typography>
        </Container>
      </Grid>
    </Grid>
  );
};

export default GameListInfoRight;

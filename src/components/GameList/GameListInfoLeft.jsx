import {
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  Divider,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
const GameListInfoLeft = ({ gameInfoLeft }) => {
  console.log(gameInfoLeft);
  return (
    <Grid>
      <Grid item xs={12}>
        <Card sx={{ marginBottom: 2 }}>
          <CardMedia
            component="img"
            image={gameInfoLeft.thumbnail}
            alt="green iguana"
          />
        </Card>
        <Button
          sx={{ display: "block", textAlign: "center", marginBottom: 2 }}
          variant="contained"
          href={gameInfoLeft.game_url}
          target="_blank"
        >
          PLAY NOW
        </Button>

        {/* Additional info */}
        <Typography variant="h5">Additional Information</Typography>
        <span>
          <InfoIcon sx={{ marginRight: 0.5, paddingTop: 1 }} />
          Note Gamefy not offer optional in-game purchases.
        </span>
        <Divider />
        <Grid
          container
          sx={{
            marginTop: 2,
            marginBottom: 2,
            backgroundColor: "#1C1E22",
            color: "#fff",
            padding: 1,
            borderRadius: 1,
          }}
        >
          <Grid item xs={4}>
            <Typography>Title</Typography>
            <Typography>{gameInfoLeft.title}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Developer</Typography>
            <Typography>{gameInfoLeft.developer}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Publisher</Typography>
            <Typography>{gameInfoLeft.publisher}</Typography>
          </Grid>
          <Grid item xs={4} sx={{ marginTop: 2 }}>
            <Typography>Release Date</Typography>
            <Typography>{gameInfoLeft.release_date}</Typography>
          </Grid>
          <Grid item xs={4} sx={{ marginTop: 2 }}>
            <Typography>Genre</Typography>
            <Typography>{gameInfoLeft.genre}</Typography>
          </Grid>
          <Grid item xs={4} sx={{ marginTop: 2 }}>
            <Typography>Platform</Typography>
            <Typography>{gameInfoLeft.platform}</Typography>
          </Grid>
        </Grid>
        <Typography>{gameInfoLeft.short_description}</Typography>
        <Divider />
        <br />

        {/* FAQ */}
        <Typography>
          Disclosure: Gamefy works closely with publishers and developers to
          offer a free and rewarding experience. In order to keep everything
          free to use we may sometimes earn a small commission from some
          partners. Find more info in our{" "}
          <a href="https://www.freetogame.com/faq">FAQ</a> page.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default GameListInfoLeft;
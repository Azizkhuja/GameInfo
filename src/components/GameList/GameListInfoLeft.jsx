import { Grid, Typography, Button, Card, CardMedia } from "@mui/material";

const GameListInfoLeft = ({ gameInfoLeft }) => {
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
        <Typography>{gameInfoLeft.short_description}</Typography>
        {/* <Chip label={gameInfo} /> */}
      </Grid>
    </Grid>
  );
};

export default GameListInfoLeft;

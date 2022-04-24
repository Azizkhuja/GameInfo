import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Button, CardActionArea } from "@mui/material";

const CardItem = ({ title, thumbnail, genre, game_url }) => {
  return (
    <Card sx={{ maxWidth: 345, padding: 1, marginBottom: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={thumbnail}
          alt={thumbnail}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Chip label={genre} variant="outlined" sx={{ marginRight: 1 }} />
      <Button variant="contained" target="_blank" href={game_url}>
        Free
      </Button>
    </Card>
  );
};

export default CardItem;

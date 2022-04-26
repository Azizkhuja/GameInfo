import {
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  Container,
  Divider,
} from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import InfoIcon from "@mui/icons-material/Info";

const test = {
  id: 5,
  title: "Crossout",
  thumbnail: "https://www.freetogame.com/g/5/thumbnail.jpg",
  status: "Live",
  short_description: "A post-apocalyptic MMO vehicle combat game! ",
  description:
    "Crossout is a free to play post-apocalyptic MMO vehicle combat game! Gaijin Entertainment is taking the vehicular multiplayer shooter genre full gear with Crossout.\r\n\r\nFollowing the double catastrophes of a failed genetic testing project and an alien invasion, players are thrown into a wasteland world not unlike that of Mad Max. The harsh, post-apocalyptic terrain of Crossout forces players to build and customize their vehicles to fight and endure the elements and other players. Hunker down in the in-game Workshop and use the countless parts earned in battle to craft a formidable death machine capable of laying waste to opponents.\r\n\r\nWeapons in Crossout range from roof-mounted miniguns to vehicular chainsaws and everything in between the player can imagine. But combat isn’t all there is to Crossout. The in-game economy is driven by the players, allowing them to trade the parts they’ve earned with one another to craft stronger, pitiless, machines. Vehicles in Crossout must be strong, for the damage a vehicle takes in battle will affect its performance. And when the enemy is charging with a vehicle-mounted powerdrill, peak performance is everything.  Crossout is everything players looking for the post-apocalyptic vehicular warfare experience could possibly want. Find a vehicle and turn it into a death-spitting chariot of war!",
  game_url: "https://www.freetogame.com/open/crossout",
  genre: "Shooter",
  platform: "Windows",
  publisher: "Targem",
  developer: "Gaijin",
  release_date: "2017-05-30",
  freetogame_profile_url: "https://www.freetogame.com/crossout",
  minimum_system_requirements: {
    os: null,
    processor: null,
    memory: null,
    graphics: null,
    storage: null,
  },
  screenshots: [
    {
      id: 22,
      image: "https://www.freetogame.com/g/5/Crossout-1.jpg",
    },
    {
      id: 23,
      image: "https://www.freetogame.com/g/5/Crossout-2.jpg",
    },
    {
      id: 24,
      image: "https://www.freetogame.com/g/5/Crossout-3.jpg",
    },
    {
      id: 25,
      image: "https://www.freetogame.com/g/5/Crossout-4.jpg",
    },
  ],
};

const GameListInfoRight = ({ gameInfoRight }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container>
          <Typography
            variant="h3"
            sx={{
              backgroundColor: "#AAAAAA",
              color: "#fff",
              textAlign: "center",
              padding: 1,
              marginBottom: 2,
            }}
          >
            {gameInfoRight.title}
          </Typography>
          <Typography sx={{ marginBottom: 1 }} variant="h5">
            About {gameInfoRight.title}
          </Typography>
          <Divider />
          <Typography sx={{ marginBottom: 3 }}>
            {gameInfoRight.description}
          </Typography>
          <Divider />

          {/* FAQ */}
          <Typography>
            Disclosure: Gamefy works closely with publishers and developers to
            offer a free and rewarding experience. In order to keep everything
            free to use we may sometimes earn a small commission from some
            partners. Find more info in our{" "}
            <a href="https://www.freetogame.com/faq">FAQ</a> page.
          </Typography>
          <br />

          {/* Additional info */}
          <Typography variant="h5">Additional Information</Typography>
          <span>
            <InfoIcon sx={{ marginRight: 0.5, paddingTop: 1 }} />
            Please note this Gamefy may not offer optional in-game purchases.
          </span>
          <Divider />
          <Grid container sx={{ marginTop: 2 }}>
            <Grid item xs={4}>
              <Typography>Title</Typography>
              <Typography>{gameInfoRight.title}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Developer</Typography>
              <Typography>{gameInfoRight.developer}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Publisher</Typography>
              <Typography>{gameInfoRight.publisher}</Typography>
            </Grid>
            <Grid item xs={4} sx={{ marginTop: 2 }}>
              <Typography>Release Date</Typography>
              <Typography>{gameInfoRight.release_date}</Typography>
            </Grid>
            <Grid item xs={4} sx={{ marginTop: 2 }}>
              <Typography>Genre</Typography>
              <Typography>{gameInfoRight.genre}</Typography>
            </Grid>
            <Grid item xs={4} sx={{ marginTop: 2 }}>
              <Typography>Platform</Typography>
              <Typography>{gameInfoRight.platform}</Typography>
            </Grid>
          </Grid>

          {/* Screenshots */}
          <Typography sx={{ marginTop: 3, marginBottom: 1 }}>
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
        </Container>
      </Grid>
    </Grid>
  );
};

export default GameListInfoRight;

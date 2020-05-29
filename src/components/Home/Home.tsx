import React from "react";

import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Event, LocationOn, Group } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Box pt={10}>
          <Typography variant="h1" align="center">
            Šifrovačka Aquila
          </Typography>
        </Box>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary" disabled>
                Registrácia už čoskoro
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" href="/rules">
                Pravidlá
              </Button>
            </Grid>
          </Grid>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4} md={4}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Event style={{ fontSize: 50 }} />
                <Typography variant="h4">8. augusta</Typography>
                <Typography variant="h6" align="center">
                  od 9:00 do 19:00
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <LocationOn style={{ fontSize: 50 }} />
                <Typography variant="h4">Kdekoľvek</Typography>
                <Typography variant="h6" align="center">
                  ale nebude to v pohodlí domova
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Group style={{ fontSize: 50 }} />
                <Typography variant="h4">4 členné tímy</Typography>
                <Typography variant="h6" align="center">
                  (maximálne)
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

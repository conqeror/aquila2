import React from "react";
import {
  makeStyles,
  TextField,
  Button,
  Container,
  Box,
  Typography,
  FormGroup,
  Grid,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import {
  useGetMyTeamQuery,
  useUpdateTeamMutation,
} from "../../generated/graphql";
import { writeStorage } from "@rehooks/local-storage";
import { useHistory } from "react-router-dom";
import { client } from "../../apolloClient";
import { useFetch } from "use-http";

type FormData = {
  password: string;
  newPassword: string;
  email: string;
  member1: string;
  member2: string;
  member3: string;
  member4: string;
  location: string;
};

const useStyles = makeStyles((theme) => ({
  textField: {
    width: 300,
    margin: theme.spacing(1),
  },
  formGroup: {
    alignItems: "center",
  },
  button: {
    marginBottom: theme.spacing(2),
  },
}));

export const MyTeam: React.FC = () => {
  const classes = useStyles();
  const { register, getValues } = useForm<FormData>();

  const { data, loading, error } = useGetMyTeamQuery();
  const [updateTeam, { loading: loadingTeam }] = useUpdateTeamMutation();

  const { post } = useFetch(
    "https://cors-anywhere.herokuapp.com/https://aquila-auth.herokuapp.com/changePassword"
  );

  const history = useHistory();

  if (!data || loading || error) {
    return <div />;
  }

  const team = data.my_team[0];

  const onSubmit = async (): Promise<void> => {
    const data = getValues();
    if (!team.id || loadingTeam) return;
    await Promise.all([
      updateTeam({
        variables: {
          id: team.id,
          data: {
            email: data.email,
            location: data.location,
            member1: data.member1,
            member2: data.member2,
            member3: data.member3,
            member4: data.member4,
          },
        },
      }),
    ]);
    client.reFetchObservableQueries();
    history.replace("/teams");
  };

  const handleLogout = (): void => {
    writeStorage("authToken", "");
    client.clearStore();
    history.replace("/");
  };

  const handleChangePassword = async (): Promise<void> => {
    const data = getValues();

    try {
      const response = await post({
        username: team.name,
        password: data.password,
        newPassword: data.newPassword,
      });
      if (response.success) {
        history.replace("/teams");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Box pt={5}>
        <Typography variant="h2" gutterBottom align="center">
          Môj tím
        </Typography>
        <Typography variant="h4" gutterBottom align="center">
          {team.name}
        </Typography>
        <Grid item xs={12}>
          <FormGroup className={classes.formGroup}>
            <div className={classes.button}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
            <div>
              <Typography variant="h5" gutterBottom align="center">
                Zmena hesla
              </Typography>
            </div>
            <div>
              <TextField
                inputRef={register}
                className={classes.textField}
                id="password"
                name="password"
                variant="outlined"
                type="password"
                label="Aktuálne heslo"
                defaultValue=""
              />
            </div>
            <div>
              <TextField
                inputRef={register}
                className={classes.textField}
                id="newPassword"
                name="newPassword"
                variant="outlined"
                type="password"
                label="Nové heslo"
                defaultValue=""
              />
            </div>
            <div className={classes.button}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleChangePassword}
              >
                Zmeň heslo
              </Button>
            </div>
            <div>
              <Typography variant="h5" gutterBottom align="center">
                Zmena údajov
              </Typography>
            </div>
            <div>
              <TextField
                inputRef={register}
                className={classes.textField}
                id="email"
                name="email"
                variant="outlined"
                label="Kontaktný email"
                defaultValue={team.email}
              />
            </div>
            <div>
              <TextField
                inputRef={register}
                className={classes.textField}
                id="member1"
                name="member1"
                variant="outlined"
                label="Člen 1"
                defaultValue={team.member1}
              />
            </div>
            <div>
              <TextField
                inputRef={register}
                className={classes.textField}
                id="member2"
                name="member2"
                variant="outlined"
                label="Člen 2"
                defaultValue={team.member2}
              />
            </div>
            <div>
              <TextField
                inputRef={register}
                className={classes.textField}
                id="member3"
                name="member3"
                variant="outlined"
                label="Člen 3"
                defaultValue={team.member3}
              />
            </div>
            <div>
              <TextField
                inputRef={register}
                className={classes.textField}
                id="member4"
                name="member4"
                variant="outlined"
                label="Člen 4"
                defaultValue={team.member4}
              />
            </div>
            <div>
              <p>Kde sa chcete hrať? (mesto, súradnice,...)</p>
              <TextField
                inputRef={register}
                className={classes.textField}
                id="location"
                name="location"
                variant="outlined"
                label="Lokalita"
                defaultValue={team.location}
              />
            </div>
            <div>
              <Button variant="contained" color="primary" onClick={onSubmit}>
                Zmeň údaje!
              </Button>
            </div>
          </FormGroup>
        </Grid>
      </Box>
    </Container>
  );
};

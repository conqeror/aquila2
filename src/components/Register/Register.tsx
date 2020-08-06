import React from "react";
import {
  makeStyles,
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  FormGroup,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import useFetch from "use-http";
import { useRegisterMutation } from "../../generated/graphql";
import { writeStorage } from "@rehooks/local-storage";
import { useHistory } from "react-router-dom";

type FormData = {
  teamName: string;
  email: string;
  password: string;
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
}));

export const Register: React.FC = () => {
  const classes = useStyles();
  const { register, getValues } = useForm<FormData>();
  const { post } = useFetch(
    "https://cors-anywhere.herokuapp.com/https://aquila-auth.herokuapp.com/signup"
  );
  const [registerTeam] = useRegisterMutation();
  const history = useHistory();

  const onSubmit = async (): Promise<void> => {
    const data = getValues();
    const authResponse = await post({
      username: data.teamName,
      password: data.password,
      confirmPassword: data.password,
    });
    if (authResponse.token) {
      writeStorage("authToken", authResponse.token);
    }

    await registerTeam({
      variables: {
        data: {
          id: String(authResponse.id),
          name: data.teamName,
          email: data.email,
          member1: data.member1,
          member2: data.member2,
          member3: data.member3,
          member4: data.member4,
          location: data.location,
        },
      },
    });
    history.replace("/");
  };

  return (
    <Container>
      <Box pt={5}>
        <Typography variant="h2" gutterBottom align="center">
          Registrácia
        </Typography>
        <Grid item xs={12}>
          <FormGroup className={classes.formGroup}>
            <div>
              <TextField
                inputRef={register}
                className={classes.textField}
                id="teamName"
                name="teamName"
                variant="outlined"
                label="Názov tímu"
              />
            </div>
            <div>
              <TextField
                inputRef={register}
                className={classes.textField}
                type="password"
                id="password"
                name="password"
                variant="outlined"
                label="Heslo"
              />
            </div>
            <div>
              <TextField
                inputRef={register}
                className={classes.textField}
                id="email"
                name="email"
                variant="outlined"
                label="Kontaktný email"
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
              />
            </div>
            <div>
              <Button variant="contained" color="primary" onClick={onSubmit}>
                Registruj!
              </Button>
            </div>
          </FormGroup>
        </Grid>
      </Box>
    </Container>
  );
};

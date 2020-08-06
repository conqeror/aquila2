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
import useFetch from "use-http";
import { useHistory } from "react-router-dom";
import { writeStorage } from "@rehooks/local-storage";

type FormData = {
  teamName: string;
  password: string;
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

export const Login: React.FC = () => {
  const classes = useStyles();
  const { register, getValues } = useForm<FormData>();
  const { post } = useFetch(
    "https://cors-anywhere.herokuapp.com/https://aquila-auth.herokuapp.com/login"
  );
  const history = useHistory();

  const onSubmit = async (): Promise<void> => {
    const data = getValues();
    try {
      const authResponse = await post({
        username: data.teamName,
        password: data.password,
      });
      if (authResponse.token) {
        writeStorage("authToken", authResponse.token);
      }
      history.replace("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container>
      <Box pt={5}>
        <Typography variant="h2" gutterBottom align="center">
          Login
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
              <Button variant="contained" color="primary" onClick={onSubmit}>
                Login
              </Button>
            </div>
          </FormGroup>
        </Grid>
      </Box>
    </Container>
  );
};

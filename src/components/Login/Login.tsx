import React from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import useFetch from "use-http";
import { useAuthToken } from "../../state/authToken";

type FormData = {
  teamName: string;
  password: string;
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export const Login: React.FC = () => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm<FormData>();
  const { setToken } = useAuthToken();
  const { post } = useFetch(
    "https://cors-anywhere.herokuapp.com/https://aquila-auth.herokuapp.com/login"
  );

  const onSubmit = async (data: FormData): Promise<void> => {
    const authResponse = await post({
      username: data.teamName,
      password: data.password,
    });
    setToken(authResponse.token);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextField
          inputRef={register}
          id="teamName"
          name="teamName"
          variant="outlined"
          label="Názov tímu"
        />
      </div>
      <div>
        <TextField
          inputRef={register}
          id="password"
          name="password"
          variant="outlined"
          label="Heslo"
        />
      </div>
      <div>
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
};

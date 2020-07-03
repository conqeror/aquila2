import React from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import useFetch from "use-http";
import { useRegisterMutation } from "../../generated/graphql";
import { useAuthToken } from "../../state/authToken";

type FormData = {
  teamName: string;
  email: string;
  password: string;
  member1: string;
  member2: string;
  member3: string;
  member4: string;
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export const Register: React.FC = () => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm<FormData>();
  const { post } = useFetch(
    "https://cors-anywhere.herokuapp.com/https://aquila-auth.herokuapp.com/signup"
  );
  const [registerTeam] = useRegisterMutation();
  const { setToken } = useAuthToken();

  const onSubmit = async (data: FormData): Promise<void> => {
    const authResponse = await post({
      username: data.teamName,
      password: data.password,
      confirmPassword: data.password,
    });
    setToken(authResponse.token);
    registerTeam({
      variables: {
        id: String(authResponse.id),
        name: data.teamName,
        email: data.email,
        members: [
          { name: data.member1 },
          { name: data.member2 },
          { name: data.member3 },
          { name: data.member4 },
        ],
      },
    });
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
        <TextField
          inputRef={register}
          id="email"
          name="email"
          variant="outlined"
          label="Kontaktný email"
        />
      </div>
      <div>
        <TextField
          inputRef={register}
          id="member1"
          name="member1"
          variant="outlined"
          label="Člen 1"
        />
      </div>
      <div>
        <TextField
          inputRef={register}
          id="member2"
          name="member2"
          variant="outlined"
          label="Člen 2"
        />
      </div>
      <div>
        <TextField
          inputRef={register}
          id="member3"
          name="member3"
          variant="outlined"
          label="Člen 3"
        />
      </div>
      <div>
        <TextField
          inputRef={register}
          id="member4"
          name="member4"
          variant="outlined"
          label="Člen 4"
        />
      </div>
      <div>
        <Button variant="contained" color="primary" type="submit">
          Registruj!
        </Button>
      </div>
    </form>
  );
};

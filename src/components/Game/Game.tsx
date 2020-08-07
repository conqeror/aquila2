/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  makeStyles,
  TextField,
  Button,
  Container,
  Box,
  Typography,
  FormGroup,
  Grid,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@material-ui/core";
import {
  useGetMyTeamStatusQuery,
  useArriveMutation,
  useTakeHintMutation,
  useTakeSolutionMutation,
  useTrySolveMutation,
} from "../../generated/graphql";
import { client } from "../../apolloClient";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import _ from "lodash";
import { getDistance } from "geolib";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: 300,
    margin: theme.spacing(1),
  },
  formGroup: {
    alignItems: "center",
  },
}));

type FormData = {
  code: string;
};

export const Game: React.FC = () => {
  const classes = useStyles();
  const { register, getValues } = useForm<FormData>();
  const [arrive, { loading: arriveLoading }] = useArriveMutation();
  const [takeHint, { loading: takeHintLoading }] = useTakeHintMutation();
  const [
    takeSolution,
    { loading: takeSolutionLoading },
  ] = useTakeSolutionMutation();
  const [trySolve, { loading: trySolveLoading }] = useTrySolveMutation();
  const { data, loading, error } = useGetMyTeamStatusQuery();

  const [location, setLocation] = useState<
    [undefined | number, undefined | number]
  >([undefined, undefined]);
  const [distance, setDistance] = useState<undefined | number>(undefined);
  const [hintModalOpen, setHintModalOpen] = useState(false);
  const [solutionModalOpen, setSolutionModalOpen] = useState(false);

  if (!data || loading || error) {
    return <div />;
  }

  const team = data.my_team[0];

  const { status } = team;

  const onTrySolve = async (): Promise<void> => {
    const data = getValues();
    await trySolve({
      variables: { solution: _.deburr(data.code).toLowerCase() },
    });
    client.reFetchObservableQueries();
  };

  const onArrive = async (): Promise<void> => {
    if (!navigator.geolocation || !status?.next_cipher_coordinates) {
      return;
    } else {
      const [targetLan, targetLon] = status.next_cipher_coordinates.split(",");
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const distance = getDistance(
            {
              latitude: Number(targetLan.slice(0, -1)),
              longitude: Number(targetLon.slice(0, -1)),
            },
            {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            }
          );
          if (distance < 50) {
            await arrive();
            client.reFetchObservableQueries();
          } else {
            setLocation([position.coords.latitude, position.coords.longitude]);
            setDistance(distance);
          }
        },
        () => {
          setLocation([undefined, undefined]);
          setDistance(undefined);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 10000,
          timeout: 5000,
        }
      );
    }
  };

  const onTakeHint = async (): Promise<void> => {
    await takeHint();
    client.reFetchObservableQueries();
  };

  const onTakeSolution = async (): Promise<void> => {
    await takeSolution();
    client.reFetchObservableQueries();
  };

  return (
    <>
      <Container>
        <Box pt={5}>
          <Typography variant="h2" gutterBottom align="center">
            Hra
          </Typography>
          <Typography variant="h4" gutterBottom align="center">
            Tím {team.name}
          </Typography>
          {status?.next_cipher_coordinates ? (
            <>
              <Typography variant="h4" gutterBottom align="center">
                Presun na šifru číslo{" "}
                {status?.current_cipher_number !== undefined &&
                  status.current_cipher_number + 1}
              </Typography>
              <Typography variant="h5" gutterBottom align="center">
                Súradnice ďalšej šifry: {status?.next_cipher_coordinates}
              </Typography>
            </>
          ) : (
            <Typography variant="h4" gutterBottom align="center">
              Šifra {status?.current_cipher_number}:{" "}
              {status?.current_cipher_code}
            </Typography>
          )}
          <Grid item xs={12}>
            <FormGroup className={classes.formGroup}>
              {status?.next_cipher_coordinates ? (
                <>
                  {location[0] && location[1] && (
                    <Typography variant="h5" gutterBottom align="center">
                      Tvoja posledná poloha: {location[0]}N, {location[1]}E (
                      {distance} metrov ďaleko)
                    </Typography>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={onArrive}
                    disabled={arriveLoading}
                  >
                    Over polohu!
                  </Button>
                </>
              ) : (
                <>
                  <div>
                    <TextField
                      inputRef={register}
                      className={classes.textField}
                      id="code"
                      name="code"
                      variant="outlined"
                      label="Riešenie"
                    />
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={onTrySolve}
                      disabled={trySolveLoading}
                    >
                      Odovzdať riešenie
                    </Button>
                  </div>
                </>
              )}
              {!status?.next_cipher_coordinates && (
                <>
                  <div style={{ marginTop: 30 }}>
                    <Typography variant="h4" gutterBottom align="center">
                      Hint
                    </Typography>
                  </div>
                  {status?.hint_text ? (
                    <div>
                      <Typography gutterBottom align="center">
                        Hint: {status.hint_text}
                      </Typography>
                    </div>
                  ) : (
                    <>
                      <Typography gutterBottom align="center">
                        Hint si môžete zobrať v čase{" "}
                        {status?.next_hint_time &&
                          format(
                            new Date(Number(status.next_hint_time)),
                            "k:mm:ss"
                          )}
                        .
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          setHintModalOpen(true);
                        }}
                        disabled={takeHintLoading}
                      >
                        Chcem hint
                      </Button>
                    </>
                  )}
                  <div style={{ marginTop: 30 }}>
                    <Typography variant="h4" gutterBottom align="center">
                      Riešenie
                    </Typography>
                  </div>
                  {status?.solution_text ? (
                    <div>
                      <Typography gutterBottom align="center">
                        Riešenie: {status.solution_text}
                      </Typography>
                    </div>
                  ) : (
                    <>
                      <Typography gutterBottom align="center">
                        Riešenie si môžete zobrať v čase{" "}
                        {status?.next_solution_time &&
                          format(
                            new Date(Number(status.next_solution_time)),
                            "k:mm:ss"
                          )}
                        .
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          setSolutionModalOpen(true);
                        }}
                        disabled={takeSolutionLoading}
                      >
                        Chcem riešenie
                      </Button>
                    </>
                  )}
                </>
              )}
            </FormGroup>
          </Grid>
        </Box>
      </Container>
      <Dialog
        open={hintModalOpen}
        onClose={() => {
          setHintModalOpen(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Naozaj si chcete zobrať hint?
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={() => {
              setHintModalOpen(false);
            }}
            color="primary"
          >
            Nie
          </Button>
          <Button onClick={onTakeHint} color="primary" autoFocus>
            Áno
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={solutionModalOpen}
        onClose={() => {
          setSolutionModalOpen(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Naozaj si chcete zobrať riešenie?
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={() => {
              setSolutionModalOpen(false);
            }}
            color="primary"
          >
            Nie
          </Button>
          <Button onClick={onTakeSolution} color="primary" autoFocus>
            Áno
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

import React from "react";
import { useGetPublicTeamsQuery } from "../../generated/graphql";
import {
  Table,
  TableRow,
  Paper,
  TableCell,
  TableHead,
  TableBody,
  makeStyles,
  Typography,
  Box,
  Container,
} from "@material-ui/core";
import _ from "lodash";

const useStyles = makeStyles({
  table: {
    maxWidth: 700,
    minWidth: 300,
    margin: "auto",
  },
});

export const Teams: React.FC = () => {
  const { data, loading, error } = useGetPublicTeamsQuery();
  const classes = useStyles();

  if (error || loading || !data) {
    return <div />;
  }

  const teams = data.teams_public.map((team) => {
    const members = _.compact([
      team.member1,
      team.member2,
      team.member3,
      team.member4,
    ]);
    return {
      id: team.id,
      name: team.name,
      members: members.join(", "),
    };
  });

  return (
    <Container>
      <Box pt={5}>
        <Typography variant="h2" gutterBottom align="center">
          Prihlásené tímy
        </Typography>
        <Table
          aria-label="simple table"
          className={classes.table}
          component={Paper}
        >
          <TableHead>
            <TableRow>
              <TableCell>Názov tímu</TableCell>
              <TableCell align="right">Členovia</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teams.map((team) => (
              <TableRow key={team.id || ""}>
                <TableCell component="th" scope="row">
                  {team.name}
                </TableCell>
                <TableCell align="right">{team.members}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};

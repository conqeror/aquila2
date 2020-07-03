import React from "react";
import { useGetPublicTeamsQuery } from "../../generated/graphql";
import {
  TableContainer,
  Table,
  TableRow,
  Paper,
  TableCell,
  TableHead,
  TableBody,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const Teams: React.FC = () => {
  const { data, loading, error } = useGetPublicTeamsQuery();
  const classes = useStyles();

  if (error || loading || !data) {
    return <div />;
  }

  const teams = data.teams_public.map((team) => ({
    id: team.id,
    name: team.name,
    members: team.members.map((member) => member.name).join(", "),
  }));

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Teamname</TableCell>
            <TableCell align="right">Members</TableCell>
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
    </TableContainer>
  );
};

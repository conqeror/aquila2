import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Tabs, Tab, AppBar, makeStyles, Theme } from "@material-ui/core";
import { Home } from "./components/Home/Home";
import { Rules } from "./components/Rules/Rules";
import { Teams } from "./components/Teams/Teams";
import { Register } from "./components/Register/Register";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apolloClient";
import { Login } from "./components/Login/Login";
import { MyTeam } from "./components/MyTeam/MyTeam";
import useLocalStorage from "@rehooks/local-storage";
import { Game } from "./components/Game/Game";

const allTabs = [
  "/",
  "/rules",
  "/teams",
  "/register",
  "/login",
  "/team",
  "/game",
];

const REGISTRATION_ENABLED = false;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const App: React.FC = () => {
  const classes = useStyles();
  const [token] = useLocalStorage("authToken");
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route
          path="/"
          render={({ location }): React.ReactElement => (
            <div className={classes.root}>
              <AppBar position="sticky">
                <Tabs
                  value={location.pathname}
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  <Tab
                    label="Domov"
                    value="/"
                    component={Link}
                    to={allTabs[0]}
                  />
                  <Tab
                    label="Pravidlá"
                    value="/rules"
                    component={Link}
                    to={allTabs[1]}
                  />
                  <Tab
                    label="Prihlasené tímy"
                    value="/teams"
                    component={Link}
                    to={allTabs[2]}
                  />
                  {!token && REGISTRATION_ENABLED && (
                    <Tab
                      label="Registrácia"
                      value="/register"
                      component={Link}
                      to={allTabs[3]}
                    />
                  )}
                  {!token && (
                    <Tab
                      label="Login"
                      value="/login"
                      component={Link}
                      to={allTabs[4]}
                    />
                  )}
                  {token && (
                    <Tab
                      label="Team"
                      value="/team"
                      component={Link}
                      to={allTabs[5]}
                    />
                  )}
                  {token && (
                    <Tab
                      label="Hra"
                      value="/game"
                      component={Link}
                      to={allTabs[6]}
                    />
                  )}
                </Tabs>
              </AppBar>
              <Switch>
                <Route path={allTabs[1]} render={() => <Rules />} />
                <Route path={allTabs[2]} render={() => <Teams />} />
                <Route path={allTabs[3]} render={() => <Register />} />
                <Route path={allTabs[4]} render={() => <Login />} />
                <Route path={allTabs[5]} render={() => <MyTeam />} />
                <Route path={allTabs[6]} render={() => <Game />} />
                <Route path={allTabs[0]} render={() => <Home />} />
              </Switch>
            </div>
          )}
        />
      </Router>
    </ApolloProvider>
  );
};

export default App;

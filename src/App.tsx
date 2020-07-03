import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Tabs,
  Tab,
  AppBar,
  makeStyles,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import { Home } from "./components/Home/Home";
import { Rules } from "./components/Rules/Rules";
import { Teams } from "./components/Teams/Teams";
import { Register } from "./components/Register/Register";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./apolloClient";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Login } from "./components/Login/Login";
import { useAuthToken } from "./state/authToken";

const allTabs = ["/", "/rules", "/teams", "/register", "/login"];

const REGISTRATION_ENABLED = true;

const App: React.FC = () => {
  const { token } = useAuthToken();
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route
          path="/"
          render={({ location }): React.ReactElement => (
            <>
              <AppBar position="sticky">
                <Tabs value={location.pathname}>
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
                  {REGISTRATION_ENABLED && (
                    <Tab
                      label="Prihlasené tímy"
                      value="/teams"
                      component={Link}
                      to={allTabs[2]}
                    />
                  )}
                  {REGISTRATION_ENABLED && (
                    <Tab
                      label="Registrácia"
                      value="/register"
                      component={Link}
                      to={allTabs[3]}
                    />
                  )}
                  {REGISTRATION_ENABLED && (
                    <Tab
                      label="Login"
                      value="/login"
                      component={Link}
                      to={allTabs[4]}
                    />
                  )}
                </Tabs>
                <MenuItem>
                  <IconButton color="inherit">
                    <AccountCircle />
                  </IconButton>
                  <p>{token}</p>
                </MenuItem>
              </AppBar>
              <Switch>
                <Route path={allTabs[1]} render={() => <Rules />} />
                <Route path={allTabs[2]} render={() => <Teams />} />
                <Route path={allTabs[3]} render={() => <Register />} />
                <Route path={allTabs[4]} render={() => <Login />} />
                <Route path={allTabs[0]} render={() => <Home />} />
                <div>Logged in as</div>
              </Switch>
            </>
          )}
        />
      </Router>
    </ApolloProvider>
  );
};

export default App;

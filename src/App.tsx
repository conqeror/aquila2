import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Tabs, Tab, AppBar, MenuItem, IconButton } from "@material-ui/core";
import { Home } from "./components/Home/Home";
import { Rules } from "./components/Rules/Rules";
import { Teams } from "./components/Teams/Teams";
import { Register } from "./components/Register/Register";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apolloClient";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Login } from "./components/Login/Login";
import { MyTeam } from "./components/MyTeam/MyTeam";
import useLocalStorage from "@rehooks/local-storage";

const allTabs = ["/", "/rules", "/teams", "/register", "/login", "/team"];

const App: React.FC = () => {
  const [token] = useLocalStorage("authToken");
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
                  <Tab
                    label="Prihlasené tímy"
                    value="/teams"
                    component={Link}
                    to={allTabs[2]}
                  />
                  {!token && (
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
                </Tabs>
              </AppBar>
              <Switch>
                <Route path={allTabs[1]} render={() => <Rules />} />
                <Route path={allTabs[2]} render={() => <Teams />} />
                <Route path={allTabs[3]} render={() => <Register />} />
                <Route path={allTabs[4]} render={() => <Login />} />
                <Route path={allTabs[5]} render={() => <MyTeam />} />
                <Route path={allTabs[0]} render={() => <Home />} />
              </Switch>
            </>
          )}
        />
      </Router>
    </ApolloProvider>
  );
};

export default App;

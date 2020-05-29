import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { Home } from "./components/Home/Home";
import { Rules } from "./components/Rules/Rules";
import { Teams } from "./components/Teams/Teams";

const allTabs = ["/", "/rules", "/teams"];

const REGISTRATION_ENABLED = false;

const App: React.FC = () => (
  <Router>
    <Route
      path="/"
      render={({ location }) => (
        <>
          <AppBar position="sticky">
            <Tabs value={location.pathname}>
              <Tab label="Domov" value="/" component={Link} to={allTabs[0]} />
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
            </Tabs>
          </AppBar>
          <Switch>
            <Route path={allTabs[1]} render={() => <Rules />} />
            <Route path={allTabs[2]} render={() => <Teams />} />
            <Route path={allTabs[0]} render={() => <Home />} />
          </Switch>
        </>
      )}
    />
  </Router>
);

export default App;

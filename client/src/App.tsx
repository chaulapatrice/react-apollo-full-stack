import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import People from "./components/people/People";
import PersonDetails from "./components/people/PersonDetails";
function App() {
  return (
    <div>
        <Router>
          <Switch>
          <Route path="/" exact component={People} />
          <Route path="/people/:name" component={PersonDetails} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;

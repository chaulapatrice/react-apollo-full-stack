import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import People from "./components/people/People";
import SearchPeople from "./components/people/SearchPeople";
import PersonDetails from "./components/people/PersonDetails";
function App() {
  return (
    <div>
      <Router basename="/index.html">
        <Switch>
          <Route path="/" exact component={People} />
          <Route path="/people/:name" component={PersonDetails} />
          <Route path="/search" component={SearchPeople} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

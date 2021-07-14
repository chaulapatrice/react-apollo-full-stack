import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import People from "./components/people/People";
import PersonDetails from "./components/people/PersonDetails";
function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={People} />
        <Route path="/people/:id" component={PersonDetails} />
      </Router>
    </div>
  );
}

export default App;

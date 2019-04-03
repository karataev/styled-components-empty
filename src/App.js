import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import BugPage from "./pages/BugPage";
import HomePage from "./pages/HomePage";

const Root = styled.div`
border: 1px solid black;
`;

export default function App() {

  return (
    <Root>
      <Router>
        <div>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/bug">Click me</Link></p>

          <Route path="/" exact component={HomePage} />
          <Route path="/bug" component={BugPage} />
        </div>
      </Router>
    </Root>
  );
}

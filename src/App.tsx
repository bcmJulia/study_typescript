import React from 'react';
import { Route, Switch } from 'react-router';
import Join from './pages/Join';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Join} />
        <Route path="/join" component={Join} />
      </Switch>
    </div>
  );
}

export default App;

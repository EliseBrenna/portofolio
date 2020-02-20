import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Work} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </HashRouter>
  );
}

export default App;

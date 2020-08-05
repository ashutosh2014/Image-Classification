import React from 'react';
import './App.css';
import { Footer, MainFile, Header, Resnet } from './Components'
import { BrowserRouter as Router,Switch, Route, Redirect } from 'react-router-dom';


function App() {
  return (
  <Router>
      <Header />
        <Switch>
          <Route path="/resnet" exact>
            <Resnet />
          </Route>
          <Route path="/identify" exact>
            <Resnet />
          </Route>
          <Route path="/" exact>
            <MainFile />
          </Route>
          <Route path="*" render={() => (<Redirect to="/" />)} />

        </Switch>
      <Footer />
    </Router>
  );
}

export default App;

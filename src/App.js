import React from "react";
import "./App.css";
import { Header, Home, TopPanel, Cart, Contact } from "./Components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            {/*<Search />*/}
            <TopPanel />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignupPage";
import Pricing from "./pages/PricingPage";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pricing" exact component={Pricing} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;

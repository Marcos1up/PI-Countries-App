import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/Landing";
import CountryDetails from "./components/CountryDetails/CountryDetails";
/*import CreateActivity from "./components/Form/FormActivity.jsx"; */
import Navbar from "./components/Nav/NavBar";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Navbar} />
      <Route exact path="/home" component={Home} />
      <Route path="/countries/:id" component={CountryDetails} />
      {/* <Route path="/activity" component={CreateActivity} /> */}
    </div>
  );
}

export default App;

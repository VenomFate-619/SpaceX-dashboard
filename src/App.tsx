import React from "react";
import "./app.css";
import "./assets/hamburgers.min.css"
import Home from "./pages/home/Home";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/about/About";
import LaunchesPage from "./pages/launches/LaunchesPage";
import Vehicles from "./pages/vehicles/Vehicles";
import LaunchById from "./pages/launchById/LaunchById";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/launch/:id" component={LaunchById} />
          <Route path="/launches" component={LaunchesPage}/>
          <Route path="/vehicles" component={Vehicles} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </>
  );
};

export default App;

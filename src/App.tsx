import React from "react";
import "./app.css";
import "./assets/hamburgers.min.css"
import Home from "./pages/home/Home";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
      
    </>
  );
};

export default App;

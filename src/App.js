import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  const [mode, setMode] = useState("light");
  //alert is an object here
  const [alert, setAlert] = useState(null);





  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            {/* use exact keyword to exact matching path */}
            <Route exact path="/about" >
              <About />
            </Route>
            <Route exact path="/" >
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

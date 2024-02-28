import logo from "./logo.svg";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "sucess");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "sucess");
    }
  };
  return (
    <>
    <Router>
      <NavBar
        title="React_Project"
        aboutPrj="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
        <Route path='/about' exact element={<About/>} />
          <Route path="/" exact
            element={<TextForm
              heading="Enter the Text"
              mode={mode}
              showAlert={showAlert}
              />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;

import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);
  function switchMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#252c33";
      document.body.style.color = "white";
      setBtnText("Enable Light Mode");
      handleAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setBtnText("Enable Dark Mode");
      handleAlert("Light Mode Enabled", "success");
    }
  }
  function handleAlert(message, type) {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Navbar
        title="Text Utils"
        mode={mode}
        switchMode={switchMode}
        btnText={btnText}
      />
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          heading="Enter the text below to analyse"
          mode={mode}
          handleAlert={handleAlert}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
// import Alert from "./components/Alert";
// import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  let [mode, setmode] = useState("light");
  //   let [alert, setalert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      setmode("dark");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setmode("light");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          item1="Home"
          item2="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Routes>
          <Route path="/" element={<TextForm mode={mode} />}></Route>

          <Route path="/about" element={<About mode={mode}></About>}></Route>
        </Routes>
      </Router>

      {/* <TextForm mode={mode}></TextForm> */}
      {/* <About mode = {mode}> </About> */}

      {/* <Alert Alert= "Copied to clipboard!" mode= {mode}/> */}
    </>
  );
}

export default App;

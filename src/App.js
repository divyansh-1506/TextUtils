import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
// import About from './components/About';

function App() {
  let [mode, setmode] = useState("light");

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
  }
  return (
    <>
      <Navbar title="TextUtils" item1="Home" item2="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert Alert= "This is an alert" mode= {mode}/>
      <TextForm mode = {mode}/>
      {/* <About/> */}
    </>
  );
}

export default App;

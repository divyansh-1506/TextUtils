import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // const[mode, setmode] = useState('light');

  // Utility functions

  // Uppercase click
  const upperClick = () => {
    let c = text.toUpperCase();
    setText(c);
  };

  // Lowercase click logic
  const lowerClick = () => {
    let c = text.toLowerCase();
    setText(c);
  };

  // Copy text logic
  const handleCopy = () => {
    var text = document.getElementById("mytext");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
  };

  //   General use functions
  const clearText = () => {
    setText("");
  };

  const wordCount = () => {
    return text.split(" ").filter((element)=>{return element.length!==0}).length;
  };

  //Onchange function is mandatory in textbox to notice and reflect changes or typed text
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-5">
        <h1>Enter text to analyze</h1>
        <div className="mb-3">
          {/* <label htmlFor="MyForm" className="form-label"></label> */}
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="mytext"
            placeholder="Start Typing"
            rows="6"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "darkgrey",
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            {" "}
          </textarea>
        </div>

        <button className="btn btn-primary" onClick={upperClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={lowerClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={clearText}>
          Clear
        </button>
        {/* <button className="btn btn-primary" onClick={handleOnClick}>Convert to Uppercase</button> */}

        <h4 className="my-4">Text Summary</h4>
        <p>
          {wordCount()} word(s) and {text.length} character(s)
        </p>
        <p>{wordCount() * 0.004} minutes read </p>

        <h4 className="my-4">Preview Text</h4>
        {/* <div</div> */}
        <p className="p-3 bg-dark bg-opacity-10 border border-dark border-start-1 rounded">
          {text.length === 0 ? "Type something to preview" : text}
        </p>
      </div>
    </>
  );
}

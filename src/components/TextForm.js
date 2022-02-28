import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("Enter the text here");

  const ChangeHandler = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleDownClick = () => {
    setText(text.toLowerCase());
  };
  const handleClearClick = () => {
    setText("");
  };
   const handleExtraSpaces = () => {
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "));
   };
  return (
    <>
      <div
        className="container"
        style={{
          color: `${props.mode === "light" ? "black" : "white"}`,
        }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: `${
                props.mode === "light" ? "white" : "#6c757d"
              }`,
              color: `${props.mode === "light" ? "black" : "white"}`,
            }}
            onChange={ChangeHandler}
          ></textarea>
        </div>
        <button className="btn btn-info " onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-info mx-3" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-info mx-3" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-info mx-3" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <hr />
      <div
        className="container my-3"
        style={{
          color: `${props.mode === "light" ? "black" : "white"}`,
        }}
      >
        <h1>Your text Summary</h1>

        <p>
          Total {text.split(" ").length} words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the Textbox to preview it"}</p>
      </div>
    </>
  );
};

export default TextForm;

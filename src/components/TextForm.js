import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("Enter the text here");

  const ChangeHandler = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    if (text.length > 0) {
      setText(text.toUpperCase());
      props.showAlert("Converted to UpperCase Successfully", "success");
    } else{
          props.showAlert("Please Enter Something in the Textbox", "warning");
    }
  };
  const handleDownClick = () => {
    if (text.length > 0) {
      setText(text.toLowerCase());
      props.showAlert("Converted to LowerCase Successfully", "success");
    } else {
       props.showAlert("Please Enter Something in the Textbox", "warning");
    }
  };
  const handleClearClick = () => {
    if (text.length > 0) {
      setText("");
      props.showAlert("Clear text Successfully", "success");
    } else {
       props.showAlert("Please Enter Something in the Textbox", "warning");
    }
  };
  const handleExtraSpaces = () => {
    if (text.length > 0) {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Space remove Successfully", "success");
    } else {
       props.showAlert("Please Enter Something in the Textbox", "warning");
    }
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
          {`Total ${text.length > 0 ?text.trim().split(" ").length:0} words and ${text.length} Characters`}
        </p>
        <p>{text.length>0 ? 0.008 * text.trim().split(" ").length:0} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the Textbox to preview it"}</p>
      </div>
    </>
  );
};

export default TextForm;

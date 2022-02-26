import React,{useState} from 'react'

const TextForm = (props) => {


    const [text, setText] = useState("Enter the text here");

    const ChangeHandler = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {
        setText(text.toUpperCase());
    }
    const handleDownClick = () => {
      setText(text.toLowerCase());
    };
  return (
    <div>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="8"
          onChange={ChangeHandler}
        ></textarea>
      </div>
      <button className="btn btn-primary " onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary " onClick={handleDownClick}>
        Convert to LowerCase
      </button>
    </div>
  );
}

export default TextForm
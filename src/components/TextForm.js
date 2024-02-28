import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UPPERCASE was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleLowClick = () => {
    console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleOnChange = (event) => {
    console.log("OnChange was clicked");
    setText(event.target.value);
  };
  const handleClrClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };
  const handleCopyClick = () => {
    var text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Text Copied!", "success");
  };

  const [text, setText] = useState("Enter the Text");
  return (
    <>
      <div className="container" style={{color: props.mode=== 'dark'?'white':'#042743'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{backgroundColor: props.mode=== 'dark'?'#042743':'white', color:props.mode==='dark'?'white':'grey'}}
            onChange={handleOnChange}
            id="MyBox"
            rows="9"
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2"
          onClick={handleUpClick} /*Concept of eventHandling*/
        >
          Convert to UPPERCASE
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleLowClick} /*Concept of eventHandling*/
        >
          Convert to lowercase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleClrClick} /*Concept of eventHandling*/
        >
          Clear
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleCopyClick} /*Concept of eventHandling*/
        >
          Copy Text
        </button>
      </div>

      <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>Read in: {0.008 * text.split(" ").length} mins</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the text to Preview"}</p>
      </div>
    </>
  );
}

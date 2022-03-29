import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  function convertToUpperCase() {
    setText(text.toUpperCase());
  }
  function convertToLowerCase() {
    setText(text.toLowerCase());
  }
  function handleOnChange(event) {
    setText(event.target.value);
  }
  function clearText() {
    setText("");
  }

  function convertToTitleCase() {
    const titleCase = [];
    text.split(" ").forEach((word) => {
      titleCase.push(
        word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
      );
    });
    setText(titleCase.join(" "));
  }

  function convertToSentenceCase() {
    const sentenceCase = [];
    text.split(".").forEach((sentence) => {
      sentenceCase.push(
        sentence.trim().charAt(0).toUpperCase() +
          sentence.trim().substring(1).toLowerCase()
      );
    });
    setText(sentenceCase.join(". "));
  }

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="8"
            onChange={handleOnChange}
            value={text}
          ></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={convertToUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary m-2" onClick={convertToLowerCase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary m-2" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-primary m-2" onClick={convertToTitleCase}>
          Convert to Title-case
        </button>{" "}
        <button className="btn btn-primary m-2" onClick={convertToSentenceCase}>
          Convert to Sentence-case
        </button>
      </div>
      <div className="container">
        <h2>Your Text Summary</h2>
        <p>
          {text.trim().split(" ").length} words. {text.length} characters.
        </p>
        <p>
          It will take approx {0.004 * (text.split(" ").length - 1)} minutes to
          read.
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

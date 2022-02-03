import React, { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [enable, setEnable] = useState("Dark-Mode");
  const [style, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const toggle = () => {
    if (style.backgroundColor === "white") {
      setStyle({
        backgroundColor: "black",
        color: "white",
      });
      setEnable("Enable-Mode");
    } else {
      setStyle({ color: "black", backgroundColor: "white" });
      setEnable("Dark-Mode");
    }
  };
  const abc = (e) => {
    const text = e.target.value;
    setData(text);
  };

  const convertUpper = () => {
    let newText = data.toUpperCase();
    setData(newText);
  };
  const convertLower = () => {
    let lowerText = data.toLowerCase();
    setData(lowerText);
  };
  const clearHandler = () => {
    let clearText = "";
    setData(clearText);
  };
  const handlerCopy = () => {
    var text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const removeExtraSpaceHandler = () => {
    var newText = data.split(/[ ]+/);
    setData(newText.join(" "));
  };

  return (
    <div>
      <h2>Words And Characters Counter App</h2>
      <textarea
        style={style}
        id="textBox"
        placeholder="Start typing, or copy and paste your document here... "
        value={data}
        onChange={abc}
      ></textarea>
      <br />
      <button onClick={convertUpper}>UpperCase</button>
      <button onClick={convertLower}>LowerCase</button>
      <button onClick={handlerCopy}>Copy</button>
      <button onClick={removeExtraSpaceHandler}>RemoveExtraSpace</button>
      <button onClick={clearHandler}>Clear</button>
      <button onClick={toggle} >{enable}</button>
      <p>Total Charactesr : {data.trim().length}</p>
      <p>Total Words : {data.split(" ").length-1}</p>
      <p>how much time to read p/w: {0.08 * data.trim().length} ms</p>
      <hr/> 
      <h2>Preview</h2>
      <p>{data}</p>
    </div>
  );
}

export default App;
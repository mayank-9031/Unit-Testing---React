import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [ChangedText, setChangedText] = useState(false);

  const changeHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h1>Hello World! </h1>
      {!ChangedText && <Output>It's good to see you</Output>}
      {ChangedText && <Output>Changed!</Output>}
      <button height="30px" onClick={changeHandler}></button>
    </div>
  );
};

export default Greeting;

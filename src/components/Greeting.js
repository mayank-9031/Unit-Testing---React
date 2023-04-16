import React, { useState } from "react";

const Greeting = () => {
  const [ChangedText, setChangedText] = useState(false);

  const changeHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h1>Hello World! </h1>
      {!ChangedText && <p>It's good to see you</p>}
      {ChangedText && <p>Changed!</p>}
      <button height="30px" onClick={changeHandler}></button>
    </div>
  );
};

export default Greeting;

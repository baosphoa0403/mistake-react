import React, { useEffect, useState } from "react";

export default function SetStateCallbackFunction() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);

  const handleOnclick = () => {
    console.log("");
    setText((text) => {
      return text + "a";
    });
    setText((text) => {
      return text + "b";
    });
    setText((text) => {
      return text + "c";
    });
  };
  useEffect(() => {
    console.info("number useEffect : " + number);
  }, [number]);

  const handleOnclickNumber = () => {
    setNumber((number) => {
      return number + 1;
    });
    // setNumber((number) => {
    //   return number + 4;
    // });
    console.log(number);
  };
  return (
    <div>
      SetStateCallbackFunction
      <p>
        text:s{text} - {number}
      </p>
      <button onClick={handleOnclickNumber}>click change number</button>
      <button onClick={handleOnclick}>click change text</button>
    </div>
  );
}

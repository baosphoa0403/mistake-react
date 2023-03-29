import React, { useEffect, useState } from "react";
import ParentMemo from "./Memo/Memo";
import ReferentialEquality from "./ReferentialEquality/ReferentialEquality";
import SetStateCallbackFunction from "./SetStateCallbackFunction/SetStateCallbackFunction";
import UsingStateNotNeed from "./UsingStateNotNeed/UsingStateNotNeed";

export default function Beginner() {
  const [student, setStudent] = useState({ name: "bảo", age: 3 });
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log("useEffect run");
  // }, [student.age, student.name]);

  // useEffect(() => {
  //   console.log("useEffect run");
  // }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  console.log("render");

  return (
    <div>
      {" "}
      {/* <UsingStateNotNeed />
      <SetStateCallbackFunction /> */}
      {/* <ReferentialEquality /> */}
      {/* <ParentMemo /> */}
      {count}
      <button
        onClick={() => {
          setStudent({ name: "bảo", age: 3 });
        }}
      >
        set student
      </button>
      {/* <button
        onClick={() => {
          setCount(0);
        }}
      >
        set count
      </button> */}
    </div>
  );
}

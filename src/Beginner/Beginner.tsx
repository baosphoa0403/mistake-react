import React from "react";
import ReferentialEquality from "./ReferentialEquality/ReferentialEquality";
import SetStateCallbackFunction from "./SetStateCallbackFunction/SetStateCallbackFunction";
import UsingStateNotNeed from "./UsingStateNotNeed/UsingStateNotNeed";

export default function Beginner() {
  return (
    <div>
      {" "}
      {/* <UsingStateNotNeed />
      <SetStateCallbackFunction /> */}
      <ReferentialEquality />
    </div>
  );
}

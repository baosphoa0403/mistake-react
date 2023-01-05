import React, { memo } from "react";

function Child() {
  const abc = () => {
    console.log("abc");
  };
  console.log("re-render child");

  return <div>child</div>;
}
export default memo(Child);

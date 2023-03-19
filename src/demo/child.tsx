import React, { memo } from "react";

function Child({ bindingNumber }: { bindingNumber: () => string }) {
  console.log("child run");

  return <div>Child - {bindingNumber()}</div>;
}
export default memo(Child);

// higher order component

// mounting update unmounting 
import React, { memo } from "react";
interface IChildMemo {
  onClickCallBack: () => void;
  //   first: number;
}
function ChildMemo({ onClickCallBack }: IChildMemo) {
  console.log("render child");

  return <div>ChildMemo</div>;
}

const ChildMemoized = memo(ChildMemo);
// dùng use memo để chặn việc component child render unnecessary

export default ChildMemoized;

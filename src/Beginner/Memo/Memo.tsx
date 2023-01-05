import React, { useCallback, useMemo, useState } from "react";
import ChildMemoized from "./ChildMemo";

export default function ParentMemo() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  console.log("render parent");
  const changeFirst = () => {
    setFirst((prev) => prev + 1);
  };
  const changeSecond = () => {
    setSecond((prev) => prev + 1);
  };
  // nhưng khi pass props là 1 function onClickCallBack vào mà ở component cha ta setState thì component cha
  // re-render thì sẽ tạo ra 1 function onClickCallBack mới sau đó pass props vào component con thì lúc nào
  // memo sẽ đi so sánh vùng nhớ thấy rằng 2 vùng nhớ onClickCallBack khác nhau nên component child sẽ re-render
  // ==> SOLUTION: dùng useCallback để
  const onClickCallBack = useCallback(() => {
    console.log("haha");
  }, []);

  const calculate = useMemo(() => {
    console.log("calculate run");
    // mỗi khi first tăng thì component rerender lại dẫn đến hàm calculate dc call trong hàm build
    // sẽ re-render lại vì vậy để tránh re-render unnecessary thì
    // bọc calculate vào useMemo
    return second + 2 + " bảo đẹp trai";
  }, [second]);

  return (
    <div>
      Memo - {first}
      <ChildMemoized
        onClickCallBack={onClickCallBack}
        // first={first}
      />
      <button className="btn btn-primary" onClick={changeFirst}>
        Tăng First
      </button>
      <h1>{calculate}</h1>
      <button className="btn btn-primary" onClick={changeSecond}>
        Tăng Second
      </button>
    </div>
  );
}

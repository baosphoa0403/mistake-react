import React, { useCallback, useEffect, useMemo, useState } from "react";
import Child from "./child";

export default function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  console.log("parent run");

  const handleClick = () => {
    setCount((prev: number): number => prev + 1);
  };

  //   const bindingNumber = useCallback((): string => {
  //     return new Date().toLocaleDateString();
  //   }, []);

  const sum = useMemo(() => {
    console.log("run sum");

    return [1, 2, 3].reduce((total, item) => {
      return total + item;
    }, 0);
  }, []);

  // câu hỏi
  const [student, setStudent] = useState({ name: "toàn", age: 20 });

  useEffect(() => {
    console.log("run useffect with student ");
  }, [student]);

  return (
    <div>
      Parent-
      {sum}
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={handleClick}>click count</button>
      {/* <Child bindingNumber={bindingNumber} /> */}
    </div>
  );
}

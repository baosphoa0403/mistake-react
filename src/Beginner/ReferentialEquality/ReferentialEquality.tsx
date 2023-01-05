import React, { useState } from "react";

export default function ReferentialEquality() {
  const [mySelf, setMySelf] = useState<{ name: string; age: number }>({
    name: "David",
    age: 30,
  });

  const changeNameToJohn = () => {
    if (mySelf.name === "David") {
      setMySelf({ ...mySelf, name: "John" });
    } else {
      setMySelf({ ...mySelf, name: "David" });
    }
  };

  console.log("re-render");

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12" style={{ textAlign: "center", padding: 30 }}>
          <h1>
            Hello, {mySelf.name} - {mySelf.age}
          </h1>
          <p>
            My name is {mySelf.name} and I am {mySelf.age} years of age.
          </p>
          <button className="btn btn-primary" onClick={changeNameToJohn}>
            Change My Name To John
          </button>
        </div>
      </div>
    </div>
  );
}

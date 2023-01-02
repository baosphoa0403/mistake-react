import React, { useRef, useState } from "react";

export default function UsingStateNotNeed() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const submit = (e: any) => {
    e.preventDefault();

    console.table({
      emailRef: emailRef.current?.value,
      passwordRef: passwordRef.current?.value,
    });
  };
  return (
    <div>
      <h1>Using State When you don't need</h1>

      <form onSubmit={submit}>
        <div>
          {" "}
          <label htmlFor="">email</label>
          <input ref={emailRef} />
        </div>
        <div>
          {" "}
          <label htmlFor="">password</label>
          <input ref={passwordRef} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

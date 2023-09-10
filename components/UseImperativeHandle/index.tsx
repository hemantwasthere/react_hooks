"use client";

import { useRef } from "react";

import Button from "./Button";

const UseImperativeHandle = () => {
  const buttonRef = useRef<{ alterToggle: () => void } | null>(null);

  return (
    <div>
      <h1 className="h1">UseImperativeHandle</h1>

      <div className="flex items-center gap-5 my-3">
        <button
          className="btn"
          onClick={() => {
            buttonRef?.current?.alterToggle();
          }}
        >
          Button from parent
        </button>

        <Button ref={buttonRef} />
      </div>
    </div>
  );
};

export default UseImperativeHandle;

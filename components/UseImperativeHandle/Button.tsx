"use client";

import { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((_, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle: () => setToggle(!toggle),
  }));

  return (
    <div className="relative">
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Button from child
      </button>
      {toggle && (
        <p className="p absolute top-20 right-[100%] left-[-50%] ">Toggled</p>
      )}
    </div>
  );
});

Button.displayName = "Button";

export default Button;

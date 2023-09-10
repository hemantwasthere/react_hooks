"use client";

import { useReducer } from "react";

interface IState {
  count: number;
  showText: boolean;
}

const reducer = (state: IState, action: { type: string }) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    case "SHOW_TEXT":
      return { ...state, showText: !state.showText };

    default:
      return state;
  }
};

const initialState = {
  count: 0,
  showText: false,
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1 className="h1">UseReducerHook</h1>

      <h3 className="h3">{state.count}</h3>

      <div className="flex gap-5">
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: "INCREMENT" }), dispatch({ type: "SHOW_TEXT" });
          }}
        >
          increment & toggle show text
        </button>
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: "DECREMENT" }), dispatch({ type: "SHOW_TEXT" });
          }}
        >
          decrement & toggle show text
        </button>
      </div>

      {state.showText && <p className="p">This is some text</p>}
    </div>
  );
};

export default UseReducerHook;

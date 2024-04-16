import React, { useState } from "react";

export function Counter() {
  // let count = 0;
  const [count, setCount] = useState(5);

  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };

  // const handleDecrement = () => {
  //   setCount(count - 1);
  // };
  return (
    <>
      <div>
        <h1> Counter </h1>
        <p> Count is : {count} </p>
      </div>
      <div>
        {/* <button onClick={handleIncrement}> Increment </button>
        <button onClick={handleDecrement}> Decrement </button> */}

        <button onClick={() => setCount(count + 1)}> Increment </button>
        <button onClick={() => setCount(count - 1)}> Decrement </button>
      </div>
    </>
  );
}

import * as React from "react";
function Counter() {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    // alert("increment");
    setCount(count+1);
  };
  const decrement = () => {
    // alert("decrement");
    setCount(count-1);
  };
  return (
    <div>
      countersample
      <div id="demo"></div>
      <button type="button" onClick={() => increment()} class="column">
        +
      </button>
      {count}
      <button type="button" onClick={() => decrement()} class="column">
        -
      </button>
      <div>
        <label className=""></label>
        <input type="number" />
      </div>
      <button type="button" onclick="clearDisplay()" class="column">
        Clear
      </button>
    </div>
  );
}

export default Counter;

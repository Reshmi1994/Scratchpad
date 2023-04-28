import * as React from "react";

function Welcome(props) {
  const [message, setMessage] = React.useState("hello");
  setTimeout(() => {
    setMessage("bye");
  }, 10000);
  return (
    <p>
      welcome {props.name} {message}
    </p>
  );
}

export default Welcome;

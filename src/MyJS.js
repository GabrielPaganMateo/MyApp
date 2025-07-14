import React from "react";

function MyJS() {
    const element = React.createElement(
  'h1',
  { style: { color: 'blue' } },
  'Hello, world!'
);
return element;
}

export default MyJS;
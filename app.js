import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = () => <h1 id="heading">Namaste Ashish from JSX!</h1>;

const HeadingComponent = () => {
  return (
    <div id="container">
      {jsxHeading}
      <h1 id="heading">Namaste Ashish from functional component!</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
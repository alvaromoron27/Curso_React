import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="container-main">
    <div id="titlePage">
      <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 14 14"><g fill="none"><g clipPath="url(#IconifyId191380fd1d7b468fc1)"><path fill="currentColor" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"/></g><defs><clipPath id="IconifyId191380fd1d7b468fc1"><path fill="#fff" d="M0 0h14v14H0z"/></clipPath></defs></g></svg>
    </div>
    <div className="TwitterFollowCards">
      <App />
    </div>
  </div>
);

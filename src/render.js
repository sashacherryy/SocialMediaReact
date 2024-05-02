import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost } from "./redux/state";
import state from "./redux/state";
import { updateNewPostText } from "./redux/state";

let root = ReactDOM.createRoot(document.getElementById("root"));

export let reRenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </React.StrictMode>
  );
};

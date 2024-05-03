import "./index.css";
import reportWebVitals from "./reportWebVitals";
import state from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { addPost, updateNewPostText, subscriber } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () => {
  root.render(
    <BrowserRouter>
      <App
        appState={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </BrowserRouter>
  );
};

renderApp();

subscriber(renderApp);

reportWebVitals();

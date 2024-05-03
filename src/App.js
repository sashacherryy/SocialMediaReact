import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {  Routes, Route } from "react-router-dom";

function App(props) {
  return (
      <div className="app-wrapper">
        <Header />
        <div className="content">
          <Nav state={props.appState.sideBar} />
          <Routes>
            <Route
              path="/"
              element={
                <Profile
                  profilePage={props.appState.profilePage}
                  newPostText={props.appState.profilePage.newPostText}
                  addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText}
                />
              }
            />
            <Route
              path="/dialogs"
              element={<Dialogs state={props.appState.dialogsPage} />}
            />
          </Routes>
        </div>
      </div>
  );
}

export default App;

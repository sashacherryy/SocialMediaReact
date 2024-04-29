import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="content">
          <Nav />
          <Routes>
            <Route path="/profile" element={<Profile />} /> 
            <Route path="/dialogs" element={<Dialogs />} /> 
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

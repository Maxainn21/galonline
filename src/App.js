import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./parts/Logform";
import Register from "./parts/Regform";
import Search from "./parts/Search";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

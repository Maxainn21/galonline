import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./parts/Logform";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

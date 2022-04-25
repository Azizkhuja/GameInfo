import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import "./App.css";
import GameList from "./components/GameList/GameList";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gamelist" element={<GameList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

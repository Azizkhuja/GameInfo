import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import "./App.css";
import GameList from "./components/GameList/GameList";
import Home from "./components/Home/Home";
import GameListInfo from "./components/GameList/GameListInfo";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gamelist" element={<GameList />} />
          <Route path="/gamelist/:id" element={<GameListInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

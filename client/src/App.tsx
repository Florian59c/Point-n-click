import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./screens/outGameScreens/Home";
import BestPlayers from "./screens/outGameScreens/BestPlayers";
import Login from "./screens/outGameScreens/Login";
import Register from "./screens/outGameScreens/Register";
import Prologue from "./screens/outGameScreens/Prologue";
import StartPage from "./screens/inGameScreens/StartPage";
import Desktop from "./screens/inGameScreens/Desktop";
import MailBox from "./screens/inGameScreens/MailBox";
import PwdGenerator from "./screens/inGameScreens/PwdGenerator";
import FinalFile from "./screens/inGameScreens/FinalFile";
import Epilogue from "./screens/outGameScreens/Epilogue";
import NotFound from "./screens/outGameScreens/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/prologue" element={<Prologue />} />
        <Route path="/start-page" element={<StartPage />} />
        <Route path="/desktop" element={<Desktop />} />
        <Route path="/mail-box" element={<MailBox />} />
        <Route path="/password-generator" element={<PwdGenerator />} />
        <Route path="/final-file" element={<FinalFile />} />
        <Route path="/epilogue" element={<Epilogue />} />
        <Route path="/best-players" element={<BestPlayers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

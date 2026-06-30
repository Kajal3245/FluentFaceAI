import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import Conversation from "./pages/Conversation/Conversation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/conversation" element={<Conversation />} />
    </Routes>
  );
}

export default App;
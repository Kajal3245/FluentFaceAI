import { useNavigate } from "react-router-dom";
import "../../styles/landing.css";

function LandingPage() {

  const navigate = useNavigate();

  return (
    <div className="landing-page">

      <h1>FluentFace AI</h1>

      <img
  src="/images/abhishek_closed.png"
  alt="Abhishek"
  className="landing-avatar"
/>

<h2>Meet Abhishek</h2>

      <p>
        Practice English with your personal AI tutor.
      </p>

      <button
        className="start-btn"
        onClick={() => navigate("/conversation")}
      >
        🎤 Start Speaking
      </button>

    </div>
  );
}

export default LandingPage;
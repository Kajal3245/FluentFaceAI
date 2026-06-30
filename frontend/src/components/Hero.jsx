import { useNavigate } from "react-router-dom";
import "../styles/landing.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Speak English Like
          <br />
          You're Talking
          <br />
          To A Real Human
        </h1>

        <p>
          Practice English with an AI Human that listens,
          corrects mistakes instantly, and helps you become
          fluent naturally.
        </p>

        <div className="hero-buttons">

          <button
            className="start-btn"
            onClick={() => navigate("/conversation")}
          >
            Start Speaking
          </button>

          <button className="demo-btn">
            Watch Demo
          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="avatar-placeholder">

          <img
            src="/images/emma.png"
            alt="Tiya AI"
            className="avatar-image"
          />

          <h2>Tiya AI</h2>

          <p>Your Personal English Coach</p>

          <div className="status">
            🟢 Online
          </div>

          <div className="speech-box">
            <p>
              💬 Hi! I'm Tiya.
              <br />
              Let's practice English together.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
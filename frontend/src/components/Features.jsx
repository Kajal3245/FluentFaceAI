import "../styles/features.css";

function Features() {
  return (
    <section className="features">

      <h2>Why Choose FluentFace AI?</h2>

      <div className="feature-grid">

        <div className="feature-card">
          <div className="icon">🤖</div>
          <h3>AI Human Avatar</h3>
          <p>Practice English with a realistic AI tutor.</p>
        </div>

        <div className="feature-card">
          <div className="icon">🎤</div>
          <h3>Grammar Correction</h3>
          <p>Get corrected instantly while speaking.</p>
        </div>

        <div className="feature-card">
          <div className="icon">💼</div>
          <h3>Interview Practice</h3>
          <p>Prepare for HR and technical interviews.</p>
        </div>

        <div className="feature-card">
          <div className="icon">🌍</div>
          <h3>IELTS Preparation</h3>
          <p>Improve your speaking band score.</p>
        </div>

        <div className="feature-card">
          <div className="icon">📊</div>
          <h3>Analytics</h3>
          <p>Track your fluency and confidence.</p>
        </div>

        <div className="feature-card">
          <div className="icon">🗣️</div>
          <h3>Daily Conversation</h3>
          <p>Practice English every day with AI.</p>
        </div>

      </div>

    </section>
  );
}

export default Features;
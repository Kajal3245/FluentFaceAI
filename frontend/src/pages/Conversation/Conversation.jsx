import { useEffect, useRef, useState } from "react";
import { askAI, speakWithAbhishek } from "../../services/api";
import AIAvatar from "../../components/AIAvatar/AIAvatar";
import "./Conversation.css";

function Conversation() {

  const [isListening, setIsListening] = useState(false);
  const [loading, setLoading] = useState(false);

  const [avatarState, setAvatarState] = useState("idle");

  const [userSentence, setUserSentence] = useState("");
  const [correctSentence, setCorrectSentence] = useState("");
  const [explanation, setExplanation] = useState("");
  const [grammarScore, setGrammarScore] = useState(0);
  const [nextQuestion, setNextQuestion] = useState("");

  const recognitionRef = useRef(null);

  useEffect(() => {

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
      setAvatarState("listening");
    };

    recognition.onend = () => {
      setIsListening(false);

      if (!loading) {
        setAvatarState("idle");
      }
    };

    recognition.onerror = () => {
      setIsListening(false);
      setAvatarState("idle");
    };

    recognition.onresult = async (event) => {

      const transcript = event.results[0][0].transcript;

      setAvatarState("thinking");

      setLoading(true);

      try {

        const result = await askAI(transcript);

        setUserSentence(result.wrong_sentence);
        setCorrectSentence(result.correct_sentence);
        setExplanation(result.explanation);
        setGrammarScore(result.grammar_score);
        setNextQuestion(result.next_question);

        setAvatarState("speaking");

await speakWithAbhishek(result.voice_reply);

setAvatarState("idle");

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    recognitionRef.current = recognition;

  }, []);

  const startListening = () => {

    recognitionRef.current?.start();

  };

  const stopListening = () => {

    recognitionRef.current?.stop();

  };
    return (
    <div className="conversation-page">

      <div className="top-bar">
        <h2>FluentFace AI</h2>
      </div>

      <div className="main-container">

        {/* LEFT PANEL */}

        <div className="left-panel">

          <AIAvatar
            state={avatarState}
            speaking={avatarState === "speaking"}
          />

          <h2 className="tiya-name">Abhishek</h2>

          <div className="online">
            🟢 Online
          </div>

          <p className="welcome">
            Hi 👋
            <br />
            I'm your personal English Speaking Tutor.
            <br />
            Speak naturally and I'll correct your grammar.
          </p>

        </div>

        {/* RIGHT PANEL */}

        <div className="right-panel">

          <button
            className={`mic-btn ${isListening ? "listening" : ""}`}
            onClick={
              isListening
                ? stopListening
                : startListening
            }
            disabled={loading}
          >
            {
              loading
                ? "🤖 Thinking..."
                : isListening
                ? "🎙 Listening..."
                : "🎤 Start Speaking"
            }
          </button>

          <div className="result-container">

            <div className="result-card">
              <h3>❌ Your Sentence</h3>
              <p>
                {userSentence || "Speak something..."}
              </p>
            </div>

            <div className="result-card">
              <h3>✅ Correct Sentence</h3>
              <p>
                {correctSentence || "Waiting for correction..."}
              </p>
            </div>

            <div className="result-card">
              <h3>💡 Explanation</h3>
              <p>
                {explanation || "Grammar explanation will appear here."}
              </p>
            </div>

            <div className="result-card score-card">
              <h3>⭐ Grammar Score</h3>

              <h1>
                {grammarScore}%
              </h1>

            </div>

            <div className="result-card">
              <h3>❓ Next Question</h3>
              <p>
                {nextQuestion || "Tiya will continue the conversation here."}
              </p>
            </div>

          </div>
                  </div>

      </div>

    </div>

  );

}

export default Conversation;
const API_URL = "https://fluentfaceai-production.up.railway.app";

export async function askAI(message) {
  try {
    const response = await fetch(`${API_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.error);
    }

    return result.data;

  } catch (error) {

    console.error(error);

    return {
      wrong_sentence: "",
      correct_sentence: "",
      explanation: "Unable to connect to AI.",
      grammar_score: 0,
      next_question: "",
      voice_reply: "Sorry, I couldn't connect to the server."
    };

  }
}
export async function speakWithAbhishek(text) {

    return new Promise((resolve) => {

        window.speechSynthesis.cancel();

        const speech = new SpeechSynthesisUtterance(text);

        speech.lang = "en-US";
        speech.rate = 0.95;
        speech.pitch = 0.8;

        const voices = window.speechSynthesis.getVoices();

        const maleVoice =
            voices.find(v => v.name.includes("David")) ||
            voices.find(v => v.name.includes("Mark")) ||
            voices.find(v => v.name.includes("Microsoft")) ||
            voices[0];

        if (maleVoice) {
            speech.voice = maleVoice;
        }

        speech.onend = () => resolve();

        window.speechSynthesis.speak(speech);

    });

}
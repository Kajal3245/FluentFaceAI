from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import google.generativeai as genai
import json
import os

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("GEMINI_API_KEY not found.")

genai.configure(api_key=api_key)


model = genai.GenerativeModel("gemini-2.5-flash")

app = FastAPI(title="FluentFace AI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str


@app.get("/")
def home():
    return {"message": "FluentFace AI Backend Running 🚀"}


@app.post("/chat")
def chat(request: ChatRequest):

    prompt = f"""
You are Abhishek.

You are a friendly male AI English Tutor.

Never behave like ChatGPT.

Always reply ONLY in valid JSON.

Return exactly this format:

{{
    "wrong_sentence":"",
    "correct_sentence":"",
    "explanation":"",
    "grammar_score":0,
    "next_question":"",
    "voice_reply":""
}}

Rules:

1. Check grammar.

2. If the sentence is wrong,
fill wrong_sentence with the user's sentence.

3. Put the corrected sentence in correct_sentence.

4. Explain the mistake in one short sentence.

5. Give grammar score out of 100.

6. Ask ONE follow-up question.

7. voice_reply should sound like a real English teacher.

User sentence:

{request.message}
"""

    try:

        response = model.generate_content(prompt)

        text = response.text.strip()

        if text.startswith("```json"):
            text = text.replace("```json", "").replace("```", "").strip()

            data = json.loads(text)

        return {
            "success": True,
            "data": data
        }

    except Exception as e:

        return {
            "success": False,
            "error": str(e)
        }








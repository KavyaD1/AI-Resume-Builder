import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Check API key
console.log("API KEY LOADED:", !!process.env.GEMINI_API_KEY);

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});


// -------------------- 1. RESUME SUMMARY --------------------
app.get("/test-ai", async (req, res) => {
  try {
    const prompt = `
You are an expert ATS resume writer.

Write a professional resume summary for a software developer.

STRICT RULES:
- 6 to 8 full sentences
- Do NOT write one-line answers
- Include JavaScript, React, Node.js, Python
- ATS friendly
- Professional tone
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.send(text);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// -------------------- 2. ROLES + OTHER OPTIONS --------------------
app.get("/roles", async (req, res) => {
  try {
    const prompt = `
You are an AI career advisor.

A candidate has skills in:
JavaScript, React, Node.js, Python.

TASK:
Generate career suggestions in TWO PARTS:

========================
PART 1: MAIN ROLES (5)
========================
Give 5 standard job roles:
For each:
- Role Name
- 1–2 line description
- Required skills

========================
PART 2: OTHER OPTIONS (CUSTOM/FLEXIBLE ROLES)
========================
Give 4–5 alternative roles such as:
- freelance roles
- startup roles
- remote roles
- emerging tech roles
- unconventional tech roles

For each:
- Role Name
- Why it is suitable

END WITH:
"If you want a custom role, ask: Suggest role for ___ domain"
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.send(text);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// -------------------- ROOT --------------------
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});


// -------------------- START SERVER --------------------
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
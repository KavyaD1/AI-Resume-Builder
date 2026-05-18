import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

console.log("API KEY LOADED:", !!process.env.GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ✅ FIXED MODEL (IMPORTANT)
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

// ---------------- TEST AI ----------------
app.get("/test-ai", async (req, res) => {
  try {
    const prompt = `
Write a professional ATS resume summary.

RULES:
- 6 to 8 full sentences
- No bullet points
- Include JavaScript, React, Node.js, Python
- Strong professional tone
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.send(text);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

// ---------------- ROLE API ----------------
app.get("/roles", async (req, res) => {
  try {
    const prompt = `
Suggest job roles for a developer skilled in:
JavaScript, React, Node.js, Python.

Give:
1. Main roles (5)
2. Other flexible roles (freelance, startup, remote, etc.)
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.send(text);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------- SERVER ----------------
app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
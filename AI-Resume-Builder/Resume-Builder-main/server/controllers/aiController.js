import genAI from "../configs/ai.js";

export const uploadResume = async (req, res) => {
  try {
    const { resumeText } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Summarize this resume:\n${resumeText}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({
      summary: text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error generating summary" });
  }
};
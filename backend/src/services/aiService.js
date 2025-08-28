import axios from "axios";

export async function analyzeTextWithGemini(text) {
  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
      {
        contents: [
          {
            parts: [
              { text: `Analyze the following social media content and suggest engagement improvements:\n\n${text}` }
            ]
          }
        ]
      },
      {
        headers: { "Content-Type": "application/json" },
        params: { key: process.env.GEMINI_API_KEY },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Gemini API error:", error.response?.data || error.message);
    return { error: "Failed to analyze text with Gemini" };
  }
}

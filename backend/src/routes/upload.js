import express from "express";
import multer from "multer";
import { extractTextFromPDF } from "../services/pdfService.js";
import { extractTextFromImage } from "../services/ocrService.js";
import { analyzeTextWithGemini } from "../services/aiService.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });


router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    let extractedText = "";

    if (file.mimetype === "application/pdf") {
      extractedText = await extractTextFromPDF(file.path);
    } else if (file.mimetype.startsWith("image/")) {
      extractedText = await extractTextFromImage(file.path);
    } else {
      return res.status(400).json({ error: "Unsupported file type" });
    }

    if (!extractedText.trim()) {
      return res.status(400).json({ error: "No text extracted from file" });
    }

    const analysis = await analyzeTextWithGemini(extractedText);

    res.json({
      extractedText,
      analysis,
    });
  } catch (err) {
    console.error("Error in upload route:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;

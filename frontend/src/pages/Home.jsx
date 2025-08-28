import React, { useState } from "react";
import FileUploader from "../components/FileUploader";

function cleanAISuggestions(text) {
  if (!text) return "";

  let cleaned = text.replace(/\*/g, "").trim();
  const lines = cleaned
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
  return lines;
}

export default function Home() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-6 flex items-center justify-center">
      <div className="w-full max-w-4xl space-y-8">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg">
            📊 Social Media Analyzer
          </h1>
          <p className="mt-3 text-gray-700 text-lg">
            Upload your content and get{" "}
            <span className="font-semibold">AI-powered</span> engagement tips ✨
          </p>
        </header>

        <div className="bg-white/70 backdrop-blur-md shadow-2xl rounded-3xl p-8 border border-white/50">
          <FileUploader onResult={setResult} />
        </div>

        {result && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200">
              <h2 className="text-xl font-bold text-indigo-700 mb-3 flex items-center gap-2">
                📄 Extracted Text
              </h2>
              <p className="text-sm text-gray-700 whitespace-pre-wrap max-h-60 overflow-y-auto leading-relaxed">
                {result.extractedText}
              </p>
            </div>

            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px] rounded-2xl shadow-xl">
              <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl">
                <h2 className="text-xl font-bold text-indigo-700 mb-3 flex items-center gap-2">
                  ✨ AI Suggestions
                </h2>
                <div className="space-y-3 text-gray-800 text-sm leading-relaxed">
                  {cleanAISuggestions(
                    result.analysis?.candidates?.[0]?.content?.parts?.[0]?.text
                  ).map((line, idx) => (
                    <p
                      key={idx}
                      className="p-3 rounded-lg bg-gray-50 hover:bg-indigo-50 transition"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

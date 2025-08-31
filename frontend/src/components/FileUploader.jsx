import React, { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export default function FileUploader({ onResult }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("");

  const onDrop = async (acceptedFiles) => {
    setError("");
    if (acceptedFiles.length === 0) return;

    const file = acceptedFiles[0];
    setFileName(file.name);

    if (file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const res = await axios.post(`${API_BASE_URL}/api/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      onResult(res.data);
    } catch (err) {
      console.error(err);
      setError("❌ Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`transition-all duration-300 border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer
        ${isDragActive ? "border-indigo-500 bg-indigo-50" : "border-gray-300 bg-gray-50 hover:bg-gray-100"}`}
      >
        <input {...getInputProps()} />
        {loading ? (
          <p className="text-indigo-600 font-medium animate-pulse">
            ⏳ Uploading & analyzing...
          </p>
        ) : (
          <p className="text-gray-700 text-lg">
            📂 <span className="font-semibold">Drag & drop</span> a file here <br />
            or <span className="text-indigo-600 underline">click to browse</span>
          </p>
        )}
        {error && <p className="text-red-500 mt-3">{error}</p>}
      </div>
      {fileName && (
        <div className="bg-white/70 backdrop-blur-md border border-gray-200 shadow-md rounded-xl p-4 flex items-center gap-4">
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="h-20 w-20 object-cover rounded-lg border"
            />
          ) : (
            <div className="h-20 w-20 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-lg text-3xl font-bold">
              📄
            </div>
          )}
          <div className="flex-1">
            <p className="font-medium text-gray-800">{fileName}</p>
            <p className="text-sm text-gray-500">
              {preview ? "Image Preview" : "PDF File"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

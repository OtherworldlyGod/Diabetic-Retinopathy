import { useState } from "react";
import { predictImage } from "../api/backend";
import "../styles/upload.css";

function Upload() {
const [leftEye, setLeftEye] = useState(null);
const [rightEye, setRightEye] = useState(null);

const [leftPreview, setLeftPreview] = useState(null);
const [rightPreview, setRightPreview] = useState(null);

const [result, setResult] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const handleFileChange = (e, eye) => {
  const file = e.target.files[0];
  if (!file) return;

  if (eye === "left") {
    setLeftEye(file);
    setLeftPreview(URL.createObjectURL(file));
  } else {
    setRightEye(file);
    setRightPreview(URL.createObjectURL(file));
  }

  setResult(null);
  setError("");
};
const SEVERITY_COLORS = {
  "No DR": "#16a34a",
  "Mild": "#84cc16",
  "Moderate": "#f59e0b",
  "Severe": "#f97316",
  "Proliferative": "#dc2626",
};

function getSeverityColor(label) {
  return SEVERITY_COLORS[label] || "#6b7280";
}



  const handleSubmit = async () => {
  if (!leftEye || !rightEye) {
    setError("Please upload both left and right retinal images");
    return;
  }

  setLoading(true);
  setError("");

  try {
    // TEMP: send only one image for now
    // Later backend can accept both
    const data = await predictImage(leftEye);
    setResult(data);
  } catch {
    setError("Prediction failed. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="upload-page">
      <div className="upload-card">
        <h2>Diabetic Retinopathy Detection</h2>
        <p className="subtitle">
          Upload a retinal fundus image for automated analysis
        </p>

        <div className="eye-upload-grid">
  <label className="upload-box">
    {leftPreview ? (
      <img src={leftPreview} alt="Left eye" className="preview-image" />
    ) : (
      <span>Upload Left Eye</span>
    )}
    <input
      type="file"
      accept="image/*"
      hidden
      onChange={(e) => handleFileChange(e, "left")}
    />
  </label>

  <label className="upload-box">
    {rightPreview ? (
      <img src={rightPreview} alt="Right eye" className="preview-image" />
    ) : (
      <span>Upload Right Eye</span>
    )}
    <input
      type="file"
      accept="image/*"
      hidden
      onChange={(e) => handleFileChange(e, "right")}
    />
  </label>
</div>


        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Analyzing..." : "Predict"}
        </button>

        {error && <p className="error">{error}</p>}

       {result && (
  <div className="result-card">
    <div
      className="severity-badge"
      style={{ background: getSeverityColor(result.predicted_class) }}
    >
      {result.predicted_class}
    </div>

    <div className="confidence-section">
      <span>Confidence</span>
      <div className="confidence-bar">
        <div
          className="confidence-fill"
          style={{ width: `${result.confidence * 100}%` }}
        />
      </div>
      <span className="confidence-value">
        {(result.confidence * 100).toFixed(2)}%
      </span>
    </div>

    <p className="result-note">{result.disclaimer}</p>
  </div>
)}

      </div>
    </div>
  );
}

export default Upload;

import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-page">
      {/* Hero */}
      <section className="home-hero">
        <h1>Diabetic Retinopathy Screening System</h1>
        <p>
          An AI-assisted system designed to support early analysis of retinal
          fundus images for diabetic retinopathy screening.
        </p>

        <Link to="/upload" className="home-cta">
          Start Screening
        </Link>
      </section>

      {/* Features */}
      <section className="home-features">
        <div className="feature-card">
          <h3>Bilateral Image Upload</h3>
          <p>
            Supports left and right eye retinal images to align with real
            clinical screening workflows.
          </p>
        </div>

        <div className="feature-card">
          <h3>AI-Assisted Analysis</h3>
          <p>
            Uses a deep learning model to estimate diabetic retinopathy severity
            levels.
          </p>
        </div>

        <div className="feature-card">
          <h3>System-Oriented Design</h3>
          <p>
            Built with a modular architecture separating frontend, backend, and
            ML inference services.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="home-disclaimer">
        <p>
          This tool is intended for educational and research purposes and does
          not replace professional medical diagnosis.
        </p>
      </section>
    </div>
  );
}

export default Home;

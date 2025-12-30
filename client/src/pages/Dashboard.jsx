import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>
      <p className="dashboard-subtitle">
        Overview of diabetic retinopathy screening activity
      </p>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Scans</h3>
          <p>128</p>
        </div>

        <div className="stat-card">
          <h3>No DR</h3>
          <p>62</p>
        </div>

        <div className="stat-card">
          <h3>Moderate+</h3>
          <p>38</p>
        </div>
      </div>

      <div className="chart-card">
        <h3>Severity Distribution</h3>

        <div className="severity-row">
          <span>No DR</span>
          <div className="bar"><div style={{ width: "48%" }} /></div>
        </div>

        <div className="severity-row">
          <span>Mild</span>
          <div className="bar"><div style={{ width: "18%" }} /></div>
        </div>

        <div className="severity-row">
          <span>Moderate</span>
          <div className="bar"><div style={{ width: "22%" }} /></div>
        </div>

        <div className="severity-row">
          <span>Severe+</span>
          <div className="bar"><div style={{ width: "12%" }} /></div>
        </div>
      </div>

      <p className="dashboard-note">
        *Live statistics will be populated once backend persistence is enabled.
      </p>
    </div>
  );
}

export default Dashboard;

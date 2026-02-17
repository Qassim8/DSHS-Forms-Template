import { useState } from "react";
import logo from "/logo.png";

/* =========================
   Types
========================= */
type ReportData = {
  clientName: string;
  caseManagerName: string;
  providerName: string;
  agencyName: string;
  dateRange: string;

  referralRecommendations: string;
  referralDate: string;
};

/* =========================
   Mock values
========================= */
const reportData: ReportData = {
  clientName: "Louis Harry Noah",
  caseManagerName: "Sarah Jenkins",
  providerName: "John Anderson",
  agencyName: "Elite Care Services LLC",
  dateRange: "11-10-2025 to 02-10-2026",

  referralRecommendations:
    "Recommend behavioral therapy follow-up and educational skills assessment through care coordinator.",
  referralDate: "02-10-2026",
};

const SHInitialReport = () => {
  /* =========================
     State
  ========================= */
  const [formData, setFormData] = useState<Record<string, string | boolean>>(
    {},
  );

  /* =========================
     Change handler
  ========================= */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, type } = e.target;
    const value =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="main-wrapper">
      {/* =========================
         Header
      ========================= */}
      <header className="form-header">
        <img src={logo} alt="Logo" className="header-logo" />
        <div className="header-text">
          <p>DEVELOPMENTAL DISABILITIES ADMINISTRATION (DDA)</p>
          <h1>Initial Life Skills Plan</h1>
        </div>
      </header>

      <div className="form-content-border">
        {/* =========================
           Top Fields
        ========================= */}
        <section className="info-grid">
          <div className="input-group">
            <label>CLIENT NAME</label>
            <div className="input-group-content">
              <div className="input-group-field" />
              <div className="input-group-value">/ {reportData.clientName}</div>
            </div>
          </div>

          <div className="input-group">
            <label>CASE MANAGER NAME</label>
            <div className="input-group-content">
              <div className="input-group-field" />
              <div className="input-group-value">
                / {reportData.caseManagerName}
              </div>
            </div>
          </div>
        </section>

        <section className="second-info-grid">
          <div className="input-group">
            <label>PROVIDER NAME</label>
            <div className="input-group-content">
              <div className="input-group-field" />
              <div className="input-group-value">
                / {reportData.providerName}
              </div>
            </div>
          </div>

          <div className="input-group">
            <label>PROVIDER AGENCY NAME</label>
            <div className="input-group-content">
              <div className="input-group-field" />
              <div className="input-group-value">/ {reportData.agencyName}</div>
            </div>
          </div>

          <div className="input-group">
            <label>DATE RANGE FOR THIS REPORT</label>
            <div className="input-group-content">
              <div className="input-group-field" />
              <div className="input-group-value">/ {reportData.dateRange}</div>
            </div>
          </div>
        </section>
        {/* ===== End Top Fields ===== */}

        {/* =========================
           Life Skills Categories
        ========================= */}
        <section className="checkbox-section">
          <h3>Indicate the targeted categories of Life Skills</h3>

          <div className="checkbox-grid">
            {[
              "Self-Empowerment",
              "Safety Awareness and Self-Advocacy",
              "Interpersonal Effectiveness",
              "Coping Strategies",
              "Managing Daily Tasks",
            ].map((cat, i) => (
              <label key={i}>
                <input
                  type="checkbox"
                  name={`life_skill_${i}`}
                  onChange={handleChange}
                />
                {cat}
              </label>
            ))}
          </div>
        </section>

        {/* =========================
           Goals Section
        ========================= */}
        <section className="goals-section">
          <div className="summarize-goal">
            <div className="left-summarize-goal">
              <h3 className="goals-section-title">
                SMART goal(s) and objective(s)
              </h3>

              <p className="goals-section-subtitle">
                No more than three goals per plan
              </p>

              <div className="goals">
                {[1, 2, 3].map((n) => (
                  <div className="goal" key={n}>
                    <h4 className="goal-title">Goal {n}</h4>
                    <div className="goal-text">
                      <input type="text" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="right-summarize-goal">
              <h3 className="right-summarize-goal-title">
                SMART goal definition
              </h3>
              <ul>
                <li>Specific</li>
                <li>Measurable</li>
                <li>Achievable</li>
                <li>Relevant</li>
                <li>Time-bound</li>
              </ul>
            </div>
          </div>

          {/* Frequency */}
          <div>
            <h3 className="goals-section-title">
              Service frequency and duration
            </h3>

            <div className="goals">
              {[1, 2, 3].map((n) => (
                <div className="goal" key={n}>
                  <h4 className="goal-title">Goal {n}</h4>
                  <div className="goal-text">
                    <input type="text" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Methods */}
          <div>
            <h3 className="goals-section-title">Methods and techniques</h3>

            <div className="goals">
              {[1, 2, 3].map((n) => (
                <div className="goal" key={n}>
                  <h4 className="goal-title">Goal {n}</h4>
                  <div className="goal-text">
                    <input type="text" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
           Referral Recommendations
        ========================= */}
        <section className="text-areas">
          <label>Referral recommendations</label>

          {/* Printable value */}
          <div className="print-text-block">
            {reportData.referralRecommendations}
          </div>

          {/* Editable placeholder */}
          <textarea name="referral_recommendations" onChange={handleChange} />

          {/* Printable DATE */}
          <div className="input-group mt-3">
            <label>DATE</label>
            <div className="input-group-content">
              <div className="input-group-field" />
              <div className="input-group-value">
                / {reportData.referralDate}
              </div>
            </div>
          </div>
        </section>

        {/* =========================
           Signatures
        ========================= */}
        <footer>
          <h3 className="sign-title">Signatures</h3>

          <div className="grid-sig">
            {["CLIENT", "LEGAL REPRESENTATIVE", "PROVIDER"].map((t) => (
              <div className="signature-section" key={t}>
                <div className="sig-box">
                  <label>{t} SIGNATURE</label>
                  <div className="sig-field"></div>
                </div>

                <div className="sig-box">
                  <label>DATE</label>
                  <div className="sig-field"></div>
                </div>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SHInitialReport;

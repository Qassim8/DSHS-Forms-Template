import { useState } from "react";
import logo from "/logo.png";

/* =========================
   Types
========================= */
type CEReportData = {
  participantsName: string;
  providerName: string;
  caseManagerName: string;
  date: string;
  referralRecommendations: string;
};

type FormState = Record<string, string | boolean>;

/* =========================
   Mock Values
========================= */
const reportData: CEReportData = {
  participantsName: "Louis Harry Noah",
  providerName: "John Anderson",
  caseManagerName: "Sarah Jenkins",
  date: "02-10-2026",
  referralRecommendations:
    "Client may benefit from behavioral therapy follow-up and vocational training referral.",
};

const IntialCEReport = () => {
  /* =========================
     State
  ========================= */
  const [formData, setFormData] = useState<FormState>({});

  /* =========================
     Change Handlers
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
          <h1>Initial Community Engagement Plan</h1>
        </div>
      </header>

      <div className="form-content-border">
        {/* =========================
           Top Fields
        ========================= */}
        <section className="info-grid">
          <div className="input-group">
            <label>WAIVER PARTICIPANT'S NAME</label>
            <div className="input-group-content">
              <div className="input-group-field" />
              <div className="input-group-value">
                / {reportData.participantsName}
              </div>
            </div>
          </div>

          <div className="input-group">
            <label>PROVIDER'S NAME</label>
            <div className="input-group-content">
              <div className="input-group-field" />
              <div className="input-group-value">
                / {reportData.providerName}
              </div>
            </div>
          </div>
        </section>

        <section className="info-grid">
          <div className="input-group">
            <label>CASE MANAGER'S NAME</label>
            <div className="input-group-content">
              <div className="input-group-field" />
              <div className="input-group-value">
                / {reportData.caseManagerName}
              </div>
            </div>
          </div>

          <div className="input-group">
            <label>DATE PLAN WAS WRITTEN OR REVISED</label>
            <div className="input-group-content">
              <div className="input-group-field" />
              <div className="input-group-value">/ {reportData.date}</div>
            </div>
          </div>
        </section>

        {/* =========================
           Goals Section
        ========================= */}
        <section className="goals-section">
          {/* SMART Goals */}
          <div>
            <h3 className="goals-section-title">
              SMART goal(s) and objective(s)
            </h3>
            <p className="goals-section-subtitle">
              Describe the goal(s) and objective(s) addressed as they appear in
              Policy 4.14. No more than three goals per plan.
            </p>

            <div className="goals">
              {[1, 2, 3].map((n) => (
                <div className="goal" key={`smart-${n}`}>
                  <h4 className="goal-title">Goal {n}</h4>
                  <div className="goal-text">
                    <input type="text" name={`smart_goal_${n}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frequency */}
          <div>
            <h3 className="goals-section-title">
              How often is the service provided
            </h3>
            <p className="goals-section-subtitle">Frequency of service:</p>

            <div className="goals">
              {[1, 2, 3].map((n) => (
                <div className="goal" key={`freq-${n}`}>
                  <h4 className="goal-title">Goal {n}</h4>
                  <div className="goal-text">
                    <input type="text" name={`frequency_${n}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div>
            <p className="goals-section-subtitle">
              Expected duration of service:
            </p>

            <div className="goals">
              {[1, 2, 3].map((n) => (
                <div className="goal" key={`duration-${n}`}>
                  <h4 className="goal-title">Goal {n}</h4>
                  <div className="goal-text">
                    <input type="text" name={`duration_${n}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Measurement */}
          <div>
            <h3 className="goals-section-title">
              How is progress measured and how will measures determine the
              conclusion of service?
            </h3>

            <div className="goals">
              {[1, 2, 3].map((n) => (
                <div className="goal" key={`measure-${n}`}>
                  <h4 className="goal-title">Goal {n}</h4>
                  <div className="goal-text">
                    <input type="text" name={`measure_${n}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Plan */}
          <div>
            <h3 className="goals-section-title">
              Plan to help reach the goal(s)
            </h3>

            <div className="goals">
              {[1, 2, 3].map((n) => (
                <div className="goal" key={`plan-${n}`}>
                  <h4 className="goal-title">Goal {n}</h4>
                  <div className="goal-text">
                    <input type="text" name={`plan_${n}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
           Referral Section
        ========================= */}
        <section className="text-areas">
          <label>
            List referral recommendations if the waiver participant presents
            with potential underlying medical, mental health, or educational
            support needs.
          </label>

          <div className="print-text-block">
            {reportData.referralRecommendations}
          </div>
          <textarea name="referral_recommendations" onChange={handleChange} />
        </section>

        {/* =========================
           Signatures 
        ========================= */}
        <footer>
          <h3 className="sign-title">Signatures</h3>

          <div className="grid-sig">
            {[
              "PROVIDER'S SIGNATURE",
              "LEGAL REPRESENTATIVE SIGNATURE",
              "WAIVER PARTICIPANT'S SIGNATURE",
              "DDA CASE / RESOURCE MANAGER'S SIGNATURE",
            ].map((title) => (
              <div className="signature-section" key={title}>
                <div className="sig-box">
                  <label>{title}</label>
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

export default IntialCEReport;

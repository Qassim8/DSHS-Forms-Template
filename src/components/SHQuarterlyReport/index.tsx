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
  dateInitial: string;
  dateRange: string;

  referralRecommendations: string;
};

/* =========================
   Mock Values
========================= */
const reportData: ReportData = {
  clientName: "Louis Harry Noah",
  caseManagerName: "Sarah Jenkins",
  providerName: "John Anderson",
  agencyName: "Elite Care Services LLC",
  dateInitial: "11-10-2025",
  dateRange: "11-10-2025 to 02-10-2026",

  referralRecommendations:
    "Recommend speech therapy evaluation and vocational assessment.",
};

const SHQuarterlyReport = () => {
  /* =========================
     State
  ========================= */
  const [formData, setFormData] = useState<Record<string, string | boolean>>(
    {},
  );

  /* =========================
      change handler
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
          <p>
            WASHINGTON STATE - DEVELOPMENTAL DISABILITIES ADMINISTRATION (DDA)
          </p>
          <h1>LIFE SKILLS 90-DAY (QUARTERLY) REPORT</h1>
        </div>
      </header>

      <div className="form-content-border">
        {/* =========================
         Start Top Fields
      ========================= */}
        <section className="info-grid">
          <div className="input-group">
            <label>CLIENT NAME</label>
            <div className="input-group-content">
              <div className="input-group-field"></div>
              <div className="input-group-value">/ {reportData.clientName}</div>
            </div>
          </div>
          <div className="input-group">
            <label>CASE MANAGER NAME</label>
            <div className="input-group-content">
              <div className="input-group-field"></div>
              <div className="input-group-value">
                / {reportData.caseManagerName}
              </div>
            </div>
          </div>
        </section>

        <section className="info-grid">
          <div className="input-group">
            <label>PROVIDER NAME</label>
            <div className="input-group-content">
              <div className="input-group-field"></div>
              <div className="input-group-value">
                / {reportData.providerName}
              </div>
            </div>
          </div>
          <div className="input-group">
            <label>PROVIDER AGENCY NAME</label>
            <div className="input-group-content">
              <div className="input-group-field"></div>
              <div className="input-group-value">/ {reportData.agencyName}</div>
            </div>
          </div>
        </section>

        <section className="info-grid">
          <div className="input-group">
            <label>DATE INITIAL PLAN WRITTEN OR REVISED</label>
            <div className="input-group-content">
              <div className="input-group-field"></div>
              <div className="input-group-value">
                / {reportData.dateInitial}
              </div>
            </div>
          </div>
          <div className="input-group">
            <label>DATE RANGE FOR THIS REPORT </label>
            <div className="input-group-content">
              <div className="input-group-field"></div>
              <div className="input-group-value">/ {reportData.dateRange}</div>
            </div>
          </div>
        </section>
        {/* =========================
         End Top Fields
      ========================= */}

        <section className="checkbox-section">
          <h3>
            TARGETED CATEGORIES OF LIFE SKILLS (AS IDENTIFIED IN THE INITIAL
            PLAN FORM, DSHS 10-657){" "}
          </h3>
          <div className="checkbox-grid">
            <label>
              <input
                type="checkbox"
                name="cat_self_empowerment"
                onChange={handleChange}
              />{" "}
              Self-Empowerment
            </label>
            <label>
              <input
                type="checkbox"
                name="cat_safety_awareness"
                onChange={handleChange}
              />{" "}
              Safety Awareness and Self-Advocacy
            </label>
            <label>
              <input
                type="checkbox"
                name="cat_interpersonal"
                onChange={handleChange}
              />{" "}
              Interpersonal Effectiveness and Effective Social Communication
            </label>
            <label>
              <input
                type="checkbox"
                name="cat_coping_strategies"
                onChange={handleChange}
              />{" "}
              Coping Strategies regarding Everyday Life Challenges
            </label>
            <label>
              <input
                type="checkbox"
                name="cat_daily_tasks"
                onChange={handleChange}
              />{" "}
              Managing Daily Tasks and Acquiring Adaptive Skills
            </label>
          </div>
        </section>

        {/* =========================
         Start Goals
      ========================= */}
        <section className="goals-section">
          <div>
            <h3 className="goals-section-title">
              Goals and objectives address as they appear in{" "}
              <a
                href="https://www.dshs.wa.gov/sites/default/files/DDA/dda/documents/policy/policy4.20.pdf"
                target="_blank"
              >
                {` Policy 4.20. No `}
              </a>
              more than three per plan.{" "}
            </h3>
            <div className="goals">
              <div className="goal">
                <h4 className="goal-title">Goal 1</h4>
                <div className="goal-text">
                  <input type="text" />
                </div>
              </div>
              <div className="goal">
                <h4 className="goal-title">Goal 2</h4>
                <div className="goal-text">
                  <input type="text" />
                </div>
              </div>
              <div className="goal">
                <h4 className="goal-title">Goal 3</h4>
                <div className="goal-text">
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="message">
            If any new treatment goals are identified, Life Skills Initial Plan
            must be revised.
          </div>
          <div>
            <h3 className="goals-section-title">
              Treatment strategies utilized for each goal above
            </h3>
            <div className="goals">
              <div className="goal">
                <h4 className="goal-title">Goal 1</h4>
                <div className="goal-text">
                  <input type="text" />
                </div>
              </div>
              <div className="goal">
                <h4 className="goal-title">Goal 2</h4>
                <div className="goal-text">
                  <input type="text" />
                </div>
              </div>
              <div className="goal">
                <h4 className="goal-title">Goal 3</h4>
                <div className="goal-text">
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="summarize-goal">
            <div className="left-summarize-goal">
              <h3 className="goals-section-title">
                Summarize progress towards goal achievement in objective and
                measurable terms.
              </h3>
              <p className="goals-section-subtitle">
                If progress has not been made, include alternate strategies
                planned.
              </p>
              <div className="goals">
                <div className="goal">
                  <h4 className="goal-title">Goal 1</h4>
                  <div className="goal-text">
                    <input type="text" />
                  </div>
                </div>
                <div className="goal">
                  <h4 className="goal-title">Goal 2</h4>
                  <div className="goal-text">
                    <input type="text" />
                  </div>
                </div>
                <div className="goal">
                  <h4 className="goal-title">Goal 3</h4>
                  <div className="goal-text">
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="right-summarize-goal">
              <h3 className="right-summarize-goal-title">
                Goal completion, using a scale from 1 – 10 (10 being goal is
                met)
              </h3>
              <div className="summarize-goals-goal">
                <div className="summarize-goals">
                  <h4 className="goal-title">Goal 1:</h4>
                  <div className="goal-text"></div>
                </div>
                <div className="summarize-goals">
                  <h4 className="goal-title">Goal 2:</h4>
                  <div className="goal-text"></div>
                </div>
                <div className="summarize-goals">
                  <h4 className="goal-title">Goal 3:</h4>
                  <div className="goal-text"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =========================
         End Goals
      ========================= */}

        <section className="text-areas">
          <label>
            List referral recommendations if the waiver participant presents
            with potential underlying medical, mental health, or educational
            support needs:
          </label>
          <div className="print-text-block">
            {reportData.referralRecommendations}
          </div>
          <textarea
            name="referral_recommendations"
            onChange={handleChange}
          ></textarea>
        </section>

        {/* =========================
         Start Table
      ========================= */}
        <div className="table-wrapper">
          <table className="service-table">
            <thead>
              <tr>
                <th>DATE</th>
                <th>SERVICE DELIVERY</th>
                <th>TIME SPENT</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, i) => (
                <tr key={i} className="table-fields">
                  <td></td>
                  <td className="check">
                    <input
                      type="checkbox"
                      name={`delivery_person_${i}`}
                      onChange={handleChange}
                    />{" "}
                    In person
                    <input
                      type="checkbox"
                      name={`delivery_tele_${i}`}
                      onChange={handleChange}
                    />{" "}
                    Teleservice
                  </td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* =========================
         End Table
      ========================= */}

        {/* =========================
         Signatures
      ========================= */}
        <footer>
          <h3 className="sign-title">Signatures</h3>
          <div className="grid-sig">
            <div className="signature-section">
              <div className="sig-box">
                <label>CLIENT SIGNATURE</label>
                <div className="sig-field"></div>
              </div>
              <div className="sig-box">
                <label>DATE</label>
                <div className="sig-field"></div>
              </div>
            </div>

            <div className="signature-section">
              <div className="sig-box">
                <label>LEGAL REPRESENTATIVE SIGNATURE </label>
                <div className="sig-field"></div>
              </div>
              <div className="sig-box">
                <label>DATE</label>
                <div className="sig-field"></div>
              </div>
            </div>

            <div className="signature-section">
              <div className="sig-box">
                <label>PROVIDER SIGNATURE</label>
                <div className="sig-field"></div>
              </div>
              <div className="sig-box">
                <label>DATE</label>
                <div className="sig-field"></div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SHQuarterlyReport;

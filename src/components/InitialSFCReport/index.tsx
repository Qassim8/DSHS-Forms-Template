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

  sfGoal: string;
  supportDescribe: string;
  therapeuticComponent: string;
  consultationIfNo: string;
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

  sfGoal:
    "Family member requires structured consultation to improve daily behavioral responses.",
  supportDescribe:
    "Observation and modeling sessions were provided with step-by-step coaching.",
  therapeuticComponent:
    "Behavior plan reinforcement and communication prompts.",
  consultationIfNo:
    "General consultation and referral to external support resources.",
};

const InitialSFCReport = () => {
  /* =========================
     State
  ========================= */
  const [formData, setFormData] = useState<Record<string, string>>({});

  /* =========================
     Change handler
  ========================= */
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          <h1>Initial Staff and Family Consultation Plan</h1>
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
           Text Areas Sections
        ========================= */}

        <section className="text-areas">
          <label>S/F member goal and situation</label>

          <div className="print-text-block">{reportData.sfGoal}</div>

          <textarea name="sfGoal" onChange={handleChange} />
        </section>

        <section className="text-areas">
          <label>Support provided description</label>

          <div className="print-text-block">{reportData.supportDescribe}</div>

          <textarea name="supportDescribe" onChange={handleChange} />
        </section>

        <section className="text-areas">
          <label>
            If yes, identify the component of the therapeutic or related plan
            that you will be consulting with the S/F member on.
          </label>

          <div className="print-text-block">
            {reportData.therapeuticComponent}
          </div>

          <textarea name="therapeuticComponent" onChange={handleChange} />

          <label>
            If no, please identify what consultation is being provided to the
            Staff and/or Family and what referrals (if any) will be made:
          </label>

          <div className="print-text-block">{reportData.consultationIfNo}</div>

          <textarea name="consultationIfNo" onChange={handleChange} />
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
                SMART goals definition
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

          {/* Strategies block */}
          <div>
            <h3 className="goals-section-title">
              Consultation strategies to achieve goals
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

          {/* Completion criteria block */}
          <div>
            <h3 className="goals-section-title">Goal completion criteria</h3>

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
        {/* ===== End Goals Section ===== */}

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

export default InitialSFCReport;

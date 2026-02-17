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

  sfcGoalSummary: string;
  describeSupport: string;
  therapistCommunicationNote: string;
  barriersAndChanges: string;
  referralsSummary: string;
};

/* =========================
   Mock Printable Values
   (Prepared for binding by next developer)
========================= */

const reportData: ReportData = {
  clientName: "Louis Harry Noah",
  caseManagerName: "Sarah Jenkins",
  providerName: "John Anderson",
  agencyName: "Elite Care Services LLC",
  dateInitial: "11-10-2025 to 02-10-2026",
  dateRange: "11-10-2025 to 02-10-2026",

  sfcGoalSummary:
    "Family member is improving structured support techniques and consistency of behavioral response.",
  describeSupport:
    "Consultant provided modeling and live observation feedback during sessions.",
  therapistCommunicationNote:
    "New sleep pattern concerns reported and should be shared with therapist.",
  barriersAndChanges:
    "Limited availability of caregiver during weekdays — schedule adjustment recommended.",
  referralsSummary:
    "Referral to local caregiver support network provided last month.",
};

const SFCQuarterlyReport = () => {
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
    <div className="main-wrapper" data-mode="print">
      {/* =========================
         Header
      ========================= */}
      <header className="form-header">
        <img src={logo} alt="Logo" className="header-logo" />
        <div className="header-text">
          <p>
            WASHINGTON STATE - DEVELOPMENTAL DISABILITIES ADMINISTRATION (DDA)
          </p>
          <h1>
            Staff and Family Consultation (SFC) 90-Day (Quarterly) Progress
            Report
          </h1>
        </div>
      </header>

      <div className="form-content-border">
        {/* =========================
           Top Fields
        ========================= */}
        <section className="info-grid">
          {/* Client */}
          <div className="input-group">
            <label>CLIENT NAME</label>
            <div className="input-group-content">
              <div className="input-group-field" />
              <div className="input-group-value">/ {reportData.clientName}</div>
            </div>
          </div>

          {/* Case Manager */}
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

        <section className="info-grid">
          {/* Provider */}
          <div className="input-group">
            <label>PROVIDER NAME</label>
            <div className="input-group-content">
              <div className="input-group-field" />
              <div className="input-group-value">
                / {reportData.providerName}
              </div>
            </div>
          </div>

          {/* Agency */}
          <div className="input-group">
            <label>PROVIDER AGENCY NAME</label>
            <div className="input-group-content">
              <div className="input-group-field" />
              <div className="input-group-value">/ {reportData.agencyName}</div>
            </div>
          </div>
        </section>

        <section className="info-grid">
          {/* Initial Plan Date */}
          <div className="input-group">
            <label>DATE INITIAL PLAN WRITTEN OR REVISED</label>
            <div className="input-group-content">
              <div className="input-group-field" />
              <div className="input-group-value">
                / {reportData.dateInitial}
              </div>
            </div>
          </div>

          {/* Range */}
          <div className="input-group">
            <label>DATE RANGE FOR THIS REPORT</label>
            <div className="input-group-content">
              <div className="input-group-field" />
              <div className="input-group-value">/ {reportData.dateRange}</div>
            </div>
          </div>
        </section>

        {/* =========================
           Goal & Progress Summary
        ========================= */}
        <section className="text-areas">
          <label>
            Staff or Family (S/F) consultation goal and progress summary:
          </label>

          {/* Printable value */}
          <div className="print-text-block">{reportData.sfcGoalSummary}</div>

          {/* Editable fallback */}
          <textarea name="sfcGoalSummary" onChange={handleChange} />
        </section>

        {/* =========================
            Checkbox Section
        ========================= */}
        <section className="checkbox-section">
          <h3>Needed support to assist S/F in working toward their goal:</h3>

          <div className="checkbox-grid">
            {/* Static printable checklist — editable fallback included */}
            {[
              ["Observation of S/F member actions", "support_observation"],
              ["Modeling appropriate techniques", "support_modeling"],
              ["Phone Consultation", "support_phone"],
              ["Referral to support group", "support_referral"],
            ].map(([label, name]) => (
              <label key={name}>
                <input type="checkbox" name={name} onChange={handleChange} />
                {label}
              </label>
            ))}
          </div>
        </section>

        {/* =========================
           Describe Support
        ========================= */}
        <section className="text-areas">
          <label>Describe:</label>

          <div className="print-text-block">{reportData.describeSupport}</div>

          <textarea name="describeSupport" onChange={handleChange} />
        </section>

        {/* =========================
           Therapist Communication
        ========================= */}
        <section className="text-areas">
          <p>
            Are there new needs that should be communicated to the therapist?
          </p>

          {/* Yes / No editable fallback */}
          <span className="text-small">
            <input
              type="checkbox"
              name="therapist_yes"
              onChange={handleChange}
            />
            Yes
          </span>

          <span className="text-small">
            <input
              type="checkbox"
              name="therapist_no"
              onChange={handleChange}
            />
            No
          </span>

          <label>If yes, explain:</label>

          <div className="print-text-block">
            {reportData.therapistCommunicationNote}
          </div>

          <textarea name="therapistCommunicationNote" onChange={handleChange} />
        </section>

        {/* =========================
           Barriers & Plan Changes
        ========================= */}
        <section className="text-areas">
          <label>Barriers and recommended plan changes:</label>

          <div className="print-text-block">
            {reportData.barriersAndChanges}
          </div>

          <textarea name="barriersAndChanges" onChange={handleChange} />
        </section>

        {/* =========================
           Referrals Summary
        ========================= */}
        <section className="text-areas">
          <label>Referrals provided or significant changes observed:</label>

          <div className="print-text-block">{reportData.referralsSummary}</div>

          <textarea name="referralsSummary" onChange={handleChange} />
        </section>

        {/* =========================
           Service Table
        ========================= */}
        <div className="table-wrapper">
          <table className="service-table">
            <thead>
              <tr>
                <th>DATE</th>
                <th>SERVICE DELIVERY (CHECK DELIVERY METHOD)</th>
                <th>TIME SPENT (IN 15 MINUTES)</th>
              </tr>
            </thead>

            <tbody>
              {/* Static printable rows — next developer may bind data */}
              {[...Array(5)].map((_, i) => (
                <tr key={i} className="table-fields">
                  <td></td>

                  <td className="check">
                    <input
                      type="checkbox"
                      name={`service_${i}_inPerson`}
                      onChange={handleChange}
                    />
                    In person
                    <input
                      type="checkbox"
                      name={`service_${i}_tele`}
                      onChange={handleChange}
                    />
                    Teleservice
                  </td>

                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* =========================
           Signatures
        ========================= */}
        <footer>
          <h3 className="sign-title">Signatures</h3>

          <div className="grid-sig">
            {["CLIENT", "LEGAL REPRESENTATIVE", "PROVIDER"].map((role) => (
              <div className="signature-section" key={role}>
                <div className="sig-box">
                  <label>{role} SIGNATURE</label>
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

export default SFCQuarterlyReport;

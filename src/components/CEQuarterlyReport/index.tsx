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

  goalsExpectations: string;
  lastThreeMonthsActivities: string;
  futureChanges: string;
};

/* =========================
   Mock Values
========================= */

const reportData: ReportData = {
  clientName: "Louis Harry Noah",
  caseManagerName: "Sarah Jenkins",
  providerName: "John Anderson",
  agencyName: "Elite Care Services LLC",
  dateRange: "11-10-2025 to 02-10-2026",

  goalsExpectations:
    "Client aims to build social confidence and connect with local volunteering groups and community centers.",
  lastThreeMonthsActivities:
    "Participated in two community events, weekly group meetings, and local library programs.",
  futureChanges:
    "Client wants to explore part-time volunteering and attend new skill workshops.",
};

const CEQuarterlyReport = () => {
  /* =========================
     State
  ========================= */
  const [formData, setFormData] = useState<Record<string, string | boolean>>(
    {},
  );

  /* =========================
     Generic change handler
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
          <h1>Community Engagement Quarterly Progress Report</h1>
        </div>
      </header>

      <div className="form-content-border">
        {/* =========================
           Start Top Fields
        ========================= */}
        <section className="info-grid">
          {/* Client Name Field */}
          <div className="input-group">
            <label>CLIENT NAME</label>
            <div className="input-group-content">
              <div className="input-group-field" />
              <div className="input-group-value">/ {reportData.clientName}</div>
            </div>
          </div>

          {/* Case Manager Field */}
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
          {/* Provider Name */}
          <div className="input-group">
            <label>PROVIDER NAME</label>
            <div className="input-group-content">
              <div className="input-group-field" />
              <div className="input-group-value">
                / {reportData.providerName}
              </div>
            </div>
          </div>

          {/* Agency Name */}
          <div className="input-group">
            <label>PROVIDER AGENCY NAME</label>
            <div className="input-group-content">
              <div className="input-group-field" />
              <div className="input-group-value">/ {reportData.agencyName}</div>
            </div>
          </div>

          {/* Date Range */}
          <div className="input-group">
            <label>DATE RANGE FOR THIS REPORT</label>
            <div className="input-group-content">
              <div className="input-group-field" />
              <div className="input-group-value">/ {reportData.dateRange}</div>
            </div>
          </div>
        </section>
        {/* =========================
           End Top Fields
        ========================= */}

        <section className="text-areas">
          {/* Goals & Expectations */}
          <label>
            What do you want from Community Engagement? What do you hope this
            service will help you connect to in your community?
          </label>
          <div className="print-text-block">{reportData.goalsExpectations}</div>
          <textarea name="goalsExpectations" onChange={handleChange}></textarea>

          {/* Last 3 Months Activities */}
          <label>
            What have you and your provider done in Community Engagement over
            the last three months?
          </label>
          <div className="print-text-block">
            {reportData.lastThreeMonthsActivities}
          </div>
          <textarea
            name="lastThreeMonthsActivities"
            onChange={handleChange}
          ></textarea>

          {/* Future Changes */}
          <label>
            If you will be continuing Community Engagement, is there anything
            new or different that you want to do?
          </label>
          <div className="print-text-block">{reportData.futureChanges}</div>
          <textarea name="futureChanges" onChange={handleChange}></textarea>
        </section>

        {/* =========================
           Table 
        ========================= */}
        <div>
          <h3 className="table-title">
            When did you receive Community Engagement (dates / times of service
            in the last 90 days)?
          </h3>

          <div className="table-wrapper">
            <table className="service-table">
              <thead>
                <tr>
                  <th>DATE</th>
                  <th>SERVICE DELIVERY</th>
                  <th>TIME SPENT (MINUTES)</th>
                </tr>
              </thead>

              <tbody>
                {[...Array(5)].map((_, i) => (
                  <tr key={i} className="table-fields">
                    <td></td>

                    <td className="check">
                      <span className="check-item">
                        <input
                          type="checkbox"
                          name={`service_${i}_inPerson`}
                          onChange={handleChange}
                        />
                        In person
                      </span>

                      <span className="check-item">
                        <input
                          type="checkbox"
                          name={`service_${i}_teleService`}
                          onChange={handleChange}
                        />
                        Teleservice
                      </span>
                    </td>

                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* =========================
           Signatures 
        ========================= */}
        <footer>
          <h3 className="sign-title">Signatures</h3>

          <div className="grid-sig">
            {/* Client Signature */}
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

            {/* Legal Representative Signature */}
            <div className="signature-section">
              <div className="sig-box">
                <label>LEGAL REPRESENTATIVE SIGNATURE</label>
                <div className="sig-field"></div>
              </div>

              <div className="sig-box">
                <label>DATE</label>
                <div className="sig-field"></div>
              </div>
            </div>

            {/* Provider Signature */}
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

export default CEQuarterlyReport;

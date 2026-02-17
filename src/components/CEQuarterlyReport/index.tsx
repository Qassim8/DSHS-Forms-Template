import { useState } from "react";
import logo from "/logo.png";

const CEQuarterlyReport = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const reportData = {
    clientName: "Louis Harry Noah",
    caseManagerName: "Sarah Jenkins",
    providerName: "John Anderson",
    agencyName: "Elite Care Services LLC",
    dateRange: "11-10-2025 to 02-10-2026",
  };

  return (
    <div className="main-wrapper">
      <header className="form-header">
        <img src={logo} alt="Logo" className="header-logo" />
        <div className="header-text">
          <p>DEVELOPMENTAL DISABILITIES ADMINISTRATION (DDA)</p>
          <h1>Community Engagement Quarterly Progress Report </h1>
        </div>
      </header>

      <div className="form-content-border">
        {/* Start Top Fields */}
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

        <section className="second-info-grid">
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
          <div className="input-group">
            <label>DATE RANGE FOR THIS REPORT</label>
            <div className="input-group-content">
              <div className="input-group-field"></div>
              <div className="input-group-value">/ {reportData.dateRange}</div>
            </div>
          </div>
        </section>
        {/* End Top Fields */}

        <section className="text-areas">
          <label>
            What do you want from Community Engagement? What do you hope this
            service will help you connect to in your community?
          </label>
          <textarea
            name="goals_expectations"
            onChange={handleChange}
          ></textarea>

          <label>
            What have you and your provider done in Community Engagement over
            the last three months?
          </label>
          <textarea
            name="last_three_months_activities"
            onChange={handleChange}
          ></textarea>

          <label>
            If you will be continuing Community Engagement, is there anything
            new or different that you want to do?
          </label>
          <textarea name="future_changes" onChange={handleChange}></textarea>
        </section>

        {/* Start Table */}
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
                  <th>SERVICE DELIVERY (CHECK DELIVERY METHOD) </th>
                  <th>TIME SPENT (IN 15 MINUTES)</th>
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
        </div>
        {/* End Table */}

        {/* Signtures */}
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

export default CEQuarterlyReport;

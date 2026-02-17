import { useState } from "react";
import logo from "/logo.png";

const SFCQuarterlyReport = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const reportData = {
    clientName: "Louis Harry Noah",
    caseManagerName: "Sarah Jenkins",
    providerName: "John Anderson",
    agencyName: "Elite Care Services LLC",
    dateInitial: "11-10-2025 to 02-10-2026",
    dateRange: "11-10-2025 to 02-10-2026",
  };

  return (
    <div className="main-wrapper">
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
        {/* End Top Fields */}

        <section className="text-areas">
          <label>
            Staff or Family (S/F) member consultation goal and summary of their
            progress in the last 90 days:
          </label>
          <textarea
            name="goals_expectations"
            onChange={handleChange}
          ></textarea>
        </section>

        <section className="checkbox-section">
          <h3>
            Needed support to assist S/F in working toward their goal: check all
            that apply.
          </h3>
          <div className="checkbox-grid">
            <label>
              <input
                type="checkbox"
                name="cat_self_empowerment"
                onChange={handleChange}
              />{" "}
              Observation of S/F member actions
            </label>
            <label>
              <input
                type="checkbox"
                name="cat_safety_awareness"
                onChange={handleChange}
              />{" "}
              Modeling appropriate techniques to S/F
            </label>
            <label>
              <input
                type="checkbox"
                name="cat_interpersonal"
                onChange={handleChange}
              />{" "}
              Phone Consultation
            </label>
            <label>
              <input
                type="checkbox"
                name="cat_coping_strategies"
                onChange={handleChange}
              />{" "}
              Referral to family support group or advocacy organization
            </label>
          </div>
        </section>

        <section className="text-areas">
          <label>Describe:</label>
          <textarea
            name="goals_expectations"
            onChange={handleChange}
          ></textarea>
        </section>

        <section className="text-areas">
          <p>
            if the client has a current therapeutic plan in which the
            consultation is being provided on, are there new needs the family or
            staff member is reporting that should be communicated to the
            therapist?{" "}
          </p>
          <span className="text-small">
            <input type="checkbox" />
            Yes
          </span>
          <span className="text-small">
            <input type="checkbox" />
            No
          </span>
          <label>if yes, please briefly explain:</label>
          <textarea
            name="goals_expectations"
            onChange={handleChange}
          ></textarea>
        </section>

        <section className="text-areas">
          <label>
            Barriers to the staff or family member meeting their goal(s) /
            recommended changes to the Initial Plan:
          </label>
          <textarea name="goals_plan" onChange={handleChange}></textarea>
        </section>

        <section className="text-areas">
          <label>
            Referrals provided since the last report, in the last 90 days, or
            significant change in client presentation observed in the last 90
            days (include date of referral, if applicable):
          </label>
          <textarea
            name="goals_expectations"
            onChange={handleChange}
          ></textarea>
        </section>

        {/* Start Table */}
        <div className="table-wrapper">
          <table className="service-table">
            <thead>
              <tr>
                <th>DATE</th>
                <th>SERVICE DELIVERY (CHECK DELIVERY METHOD) </th>
                <th>TIME SPENT (IN 15 MINUTES) </th>
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

export default SFCQuarterlyReport;

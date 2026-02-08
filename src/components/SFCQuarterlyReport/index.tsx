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
        <section className="info-grid">
          <div className="input-group">
            <label>CLIENT NAME</label>
            <input type="text" name="client_name" onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>CASE MANAGER NAME</label>
            <input
              type="text"
              name="case_manager_name"
              onChange={handleChange}
            />
          </div>
        </section>

        <section className="info-grid">
          <div className="input-group">
            <label>PROVIDER NAME</label>
            <input type="text" name="provider_name" onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>PROVIDER AGENCY NAME</label>
            <input
              type="text"
              name="provider_agency_name"
              onChange={handleChange}
            />
          </div>
        </section>

        <section className="info-grid">
          <div className="input-group">
            <label>DATE OF INITIAL PLAN </label>
            <input
              type="date"
              name="initial_plan_date"
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>DATE RANGE FOR THIS REPORT </label>
            <input
              type="date"
              name="report_range_date"
              onChange={handleChange}
            />
          </div>
        </section>

        <section className="text-areas">
          <label>
            Staff or Family (S/F) member consultation goal and summary of their
            progress in the last 90 days:
          </label>
          <textarea
            name="goals_expectations"
            onChange={handleChange}
          ></textarea>{" "}
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
          <textarea name="describe" onChange={handleChange}></textarea>{" "}
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
          ></textarea>{" "}
        </section>

        <section className="text-areas">
          <label>
            Barriers to the staff or family member meeting their goal(s) /
            recommended changes to the Initial Plan:
          </label>
          <textarea name="describe" onChange={handleChange}></textarea>
        </section>

        <section className="text-areas">
          <label>
            Referrals provided since the last report, in the last 90 days, or
            significant change in client presentation observed in the last 90
            days (include date of referral, if applicable):
          </label>
          <textarea name="describe" onChange={handleChange}></textarea>
        </section>

        {/* Table */}

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
                <tr key={i}>
                  <td>
                    <input
                      type="date"
                      name={`row_date_${i}`}
                      onChange={handleChange}
                    />
                  </td>
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
                  <td>
                    <input
                      type="number"
                      name={`row_time_${i}`}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Signtures */}

        <footer>
          <h3 className="sign-title">Signatures</h3>
          <div className="grid-sig">
            <div className="signature-section">
              <div className="sig-box">
                <label>CLIENT SIGNATURE</label>
                <input
                  type="file"
                  name="client_signature_file"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>
              <div className="sig-box">
                <label>DATE</label>
                <input
                  type="date"
                  name="client_signature_date"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="signature-section">
              <div className="sig-box">
                <label>LEGAL REPRESENTATIVE SIGNATURE </label>
                <input
                  type="file"
                  name="legal_rep_signature_file"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>
              <div className="sig-box">
                <label>DATE</label>
                <input
                  type="date"
                  name="legal_rep_signature_date"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="signature-section">
              <div className="sig-box">
                <label>PROVIDER SIGNATURE</label>
                <input
                  type="file"
                  name="provider_signature_file"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>
              <div className="sig-box">
                <label>DATE</label>
                <input
                  type="date"
                  name="provider_signature_date"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SFCQuarterlyReport;

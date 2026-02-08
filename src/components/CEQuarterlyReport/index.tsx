import { useState } from "react";
import logo from "/logo.png";

const CEQuarterlyReport = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

        <section className="second-info-grid">
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
          <div className="input-group">
            <label>DATE RANGE FOR THIS REPORT</label>
            <input
              type="date"
              name="report_date_range"
              onChange={handleChange}
            />
          </div>
        </section>

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
        </div>

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

export default CEQuarterlyReport;

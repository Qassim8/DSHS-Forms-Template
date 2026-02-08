import { useState } from "react";
import logo from "/logo.png";

const SHQuarterlyReport = () => {
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
          <h1>LIFE SKILLS 90-DAY (QUARTERLY) REPORT</h1>
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
            <label>DATE INITIAL PLAN WRITTEN OR REVISED</label>
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

        {/* Goals */}

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
              <div className="">
                <div className="summarize-goals">
                  <h4 className="goal-title">Goal 1:</h4>
                  <div className="goal-text">
                    <input type="text" />
                  </div>
                </div>
                <div className="summarize-goals">
                  <h4 className="goal-title">Goal 2:</h4>
                  <div className="goal-text">
                    <input type="text" />
                  </div>
                </div>
                <div className="summarize-goals">
                  <h4 className="goal-title">Goal 3:</h4>
                  <div className="goal-text">
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-areas">
          <label>
            List referral recommendations if the waiver participant presents
            with potential underlying medical, mental health, or educational
            support needs:
          </label>
          <textarea
            name="goals_expectations"
            onChange={handleChange}
          ></textarea>{" "}
        </section>

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

export default SHQuarterlyReport;

import { useState } from "react";
import logo from "/logo.png";

const IntialCEReport = () => {
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
          <h1>Initial Community Engagement Plan </h1>
        </div>
      </header>

      <div className="form-content-border">
        <section className="info-grid">
          <div className="input-group">
            <label>WAIVER PARTICIPANT'S NAME</label>
            <input type="text" name="client_name" onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>PROVIDER'S NAME</label>
            <input
              type="text"
              name="case_manager_name"
              onChange={handleChange}
            />
          </div>
        </section>

        <section className="info-grid">
          <div className="input-group">
            <label>CASE MANAGER'S NAME</label>
            <input type="text" name="provider_name" onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>DATE PLAN WAS WRITTEN OR REVISED</label>
            <input
              type="text"
              name="report_date_range"
              onChange={handleChange}
            />
          </div>
        </section>

        {/* Goals */}

        <section className="goals-section">
          <div>
            <h3 className="goals-section-title">
              SMART goal(s) and objective(s)
            </h3>
            <p className="goals-section-subtitle">
              Describe the goal(s) and objective(s) addressed as they appear in
              Policy 4.14 No more than three goals per plan.
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

          <div>
            <h3 className="goals-section-title">
              How often is the service provided
            </h3>
            <p className="goals-section-subtitle">Frequency of service:</p>
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

          <div>
            <p className="goals-section-subtitle">
              Expected duration of service:
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

          <div>
            <h3 className="goals-section-title">
              How is progress measured and how will measures determine the
              conclusion of service?
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

          <div>
            <h3 className="goals-section-title">
              Plan to help reach the goal(s)
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
        </section>

        <section className="text-areas">
          <label>
            List referral recommendations if the waiver participant presents
            with potential underlying medical, mental health, or educational
            support needs.
          </label>
          <textarea name="describe" onChange={handleChange}></textarea>{" "}
        </section>

        <footer>
          <h3 className="sign-title">Signatures</h3>
          <div className="grid-sig">
            <div className="signature-section">
              <div className="sig-box">
                <label>PROVIDER'S SIGNATURE</label>
              </div>
              <div className="sig-box">
                <label>DATE</label>
              </div>
            </div>

            <div className="signature-section">
              <div className="sig-box">
                <label>LEGAL REPRESENTATIVE SIGNATURE </label>
              </div>
              <div className="sig-box">
                <label>DATE</label>
              </div>
            </div>

            <div className="signature-section">
              <div className="sig-box">
                <label>WAIVER PARTICIPANT'S SIGNATURE</label>
              </div>
              <div className="sig-box">
                <label>DATE</label>
              </div>
            </div>

            <div className="signature-section">
              <div className="sig-box">
                <label>DDA CASE / RESOURCE MANAGER'S SIGNATURE</label>
              </div>
              <div className="sig-box">
                <label>DATE</label>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default IntialCEReport;

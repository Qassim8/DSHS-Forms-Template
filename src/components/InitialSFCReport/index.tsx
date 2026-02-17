import { useState } from "react";
import logo from "/logo.png";

const InitialSFCReport = () => {
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
          <h1>Initial Staff and Family Consultation Plan </h1>
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
            Staff or Family (S/F) member’s goal. Include a brief description of
            the staff or family members situation that requires Staff and Family
            Consultation:
          </label>
          <textarea
            name="consultation_provided"
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
            name="consultation_provided"
            onChange={handleChange}
          ></textarea>
        </section>

        <section className="text-areas">
          <span>
            Is there a current therapeutic or related plan in place for the
            client that the staff or family member needs supporting to follow?
          </span>
          <span className="text-small">
            <input type="checkbox" />
            Yes
          </span>
          <span className="text-small">
            <input type="checkbox" />
            No
          </span>
          <label>
            If yes, identify the component of the therapeutic or related plan
            that you will be consulting with the S/F member on.{" "}
          </label>
          <textarea
            name="consultation_provided"
            onChange={handleChange}
          ></textarea>
          <label>
            If no, please identify what consultation is being provided to the
            Staff and/or Family and what referrals (if any) will be made:
          </label>
          <textarea
            name="consultation_provided"
            onChange={handleChange}
          ></textarea>
        </section>

        {/* Start Goals */}
        <section className="goals-section">
          <div className="summarize-goal">
            <div className="left-summarize-goal">
              <h3 className="goals-section-title">
                SMART goal(s) and objective(s)
              </h3>
              <p className="goals-section-subtitle">
                Describe the S/F SMART goal(s) and objective(s) addressed as
                they appear in Policy 4.19. No more than three goals per plan.
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
                SMART goals and objective are:
              </h3>
              <ul className="">
                <li>
                  <h5>Specific</h5>
                </li>
                <li>
                  <h5>Measurable </h5>
                </li>
                <li>
                  <h5>Achievable</h5>
                </li>
                <li>
                  <h5>Relevant </h5>
                </li>
                <li>
                  <h5>Time-bound</h5>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="goals-section-title">
              Consultation strategies to achieve the goal(s)
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
              Goal completion criteria stated in objective, measurable terms
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
        {/* End Goals */}

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

export default InitialSFCReport;

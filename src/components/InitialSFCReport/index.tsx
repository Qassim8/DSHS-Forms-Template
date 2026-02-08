import { useState } from "react";
import logo from "/logo.png";

const InitialSFCReport = () => {
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
          <h1>Initial Staff and Family Consultation Plan </h1>
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
            Staff or Family (S/F) member’s goal. Include a brief description of
            the staff or family members situation that requires Staff and Family
            Consultation:
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

          <section className="text-areas">
            <label>Describe:</label>
            <textarea name="describe" onChange={handleChange}></textarea>{" "}
          </section>
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
            name="goals_expectations"
            onChange={handleChange}
          ></textarea>
          <label>
            If no, please identify what consultation is being provided to the
            Staff and/or Family and what referrals (if any) will be made:
          </label>
          <textarea
            name="goals_expectations"
            onChange={handleChange}
          ></textarea>
        </section>

        {/* Goals */}

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

export default InitialSFCReport;

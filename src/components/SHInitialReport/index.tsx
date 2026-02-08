import { useState } from "react";
import logo from "/logo.png";

const SHInitialReport = () => {
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
          <h1>Initial Life Skills Plan </h1>
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

        <section className="checkbox-section">
          <h3>Indicate the targeted categories of Life Skills:</h3>
          <div className="checkbox-grid">
            <label>
              <input
                type="checkbox"
                name="cat_self_empowerment"
                onChange={handleChange}
              />
              <span style={{ textDecoration: "underline" }}>
                Self-Empowerment
              </span>
              – Support to increase self-esteem, self-confidence, and skills to
              achieve personal development goals.
            </label>
            <label>
              <input
                type="checkbox"
                name="cat_self_empowerment"
                onChange={handleChange}
              />{" "}
              <span style={{ textDecoration: "underline" }}>
                Safety Awareness and Self-Advocacy
              </span>{" "}
              – Support to increase safety awareness and effectively
              self-express needs, wants, and goals.
            </label>
            <label>
              <input
                type="checkbox"
                name="cat_self_empowerment"
                onChange={handleChange}
              />
              <span style={{ textDecoration: "underline" }}>
                Interpersonal Effectiveness and Effective Social Communication
              </span>
              – Support to develop social skills to build and maintain
              relationships or increase inclusion in the community and home.
            </label>
            <label>
              <input
                type="checkbox"
                name="cat_self_empowerment"
                onChange={handleChange}
              />{" "}
              <span style={{ textDecoration: "underline" }}>
                Coping Strategies regarding Everyday Life Challenges
              </span>{" "}
              – Support to improve problem solving skills and stress management
              techniques.
            </label>
            <label>
              <input
                type="checkbox"
                name="cat_self_empowerment"
                onChange={handleChange}
              />{" "}
              <span style={{ textDecoration: "underline" }}>
                Managing Daily Tasks and Acquiring Adaptive Skills
              </span>{" "}
              – Support developing skills to successfully reside in the
              community and to increase independence.
            </label>
          </div>
        </section>

        {/* Goals */}

        <section className="goals-section">
          <div className="summarize-goal">
            <div className="left-summarize-goal">
              <h3 className="goals-section-title">
                SMART goal(s) and objective(s)
              </h3>
              <p className="goals-section-subtitle">
                Describe the goal(s) and objective(s) addressed as they appear
                in <a href="" target="_blank">{` Policy 4.20. `}</a> No more
                than three goals per plan.
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
              How often is the service provided
            </h3>
            <p className="goals-section-subtitle">
              Expected frequency and duration of service (How often, and for how
              long is the service expected to last for client to reach their
              goal):
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
              What is the plan? What methods and techniques will be used to
              support the client? How will progress be measured and how will
              measures determine the conclusion of service?
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
            List referral recommendations if the client presents with potential
            underlying medical, mental health, or educational support needs
            (referral may be to Care Coordinator, treating professional, or
            DDA):
          </label>
          <textarea name="describe" onChange={handleChange}></textarea>{" "}
          <div>
            <label className="me-5">DATE</label>
            <input type="date" name="date" onChange={handleChange} />
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

export default SHInitialReport;

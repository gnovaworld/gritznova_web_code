import { useState } from "react";
import SectionLabel from "../components/SectionLabel";

export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="contact" className="contact section">
        <SectionLabel>START A CONVERSATION</SectionLabel>

        <h2>
          Have an idea?
          <br />
          <em>Let's build it.</em>
        </h2>

        <p>
          From a new product to an AI automation system or cloud modernization
          project, tell us what you're trying to build.
        </p>

        <button
          type="button"
          className="cta-button"
          onClick={() => setOpen(true)}
        >
          Start a Conversation →
        </button>
      </section>

      {open && (
        <div className="contact-modal">
          <div
            className="contact-overlay"
            onClick={() => setOpen(false)}
          />

          <div className="contact-form-box">
            <button
              type="button"
              className="contact-close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            <SectionLabel>GET IN TOUCH</SectionLabel>

            <h2>
              Start a <em>Conversation.</em>
            </h2>

            <form>
              <div className="form-grid">

                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                    minLength="2"
                  />
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Mobile Number *</label>
                  <input
                    type="tel"
                    placeholder="9876543210"
                    pattern="[6-9][0-9]{9}"
                    maxLength="10"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Company Name *</label>
                  <input
                    type="text"
                    placeholder="Company name"
                    required
                    minLength="2"
                  />
                </div>

                <div className="form-group">
                  <label>Service *</label>
                  <select required>
                    <option value="">Select a service</option>
                    <option>Custom Software Development</option>
                    <option>Cloud Migration & DevOps</option>
                    <option>AI & Machine Learning</option>
                    <option>Agentic AI Solutions</option>
                    <option>Systems Integration</option>
                    <option>Managed IT Support</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Project Budget *</label>
                  <select required>
                    <option value="">Select budget</option>
                    <option>₹50K - ₹1 Lakh</option>
                    <option>₹1 Lakh - ₹5 Lakh</option>
                    <option>₹5 Lakh - ₹10 Lakh</option>
                    <option>₹10 Lakh+</option>
                  </select>
                </div>

              </div>

              <div className="form-group">
                <label>Project Details *</label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                  minLength="20"
                  required
                />
              </div>

              <button
                type="submit"
                className="cta-button"
              >
                Send Inquiry →
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
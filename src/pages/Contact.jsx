
import "./Contact.css";
import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Send,
  Lightbulb,
  Workflow,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const initialValues = { name: "", email: "", message: "" };

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please tell us a little about your project.";
  }

  return errors;
}

function ConversationVisual() {
  return (
    <div className="conversation-visual">
      <div className="conversation-visual-top">
        <span className="visual-label">
          <span className="status-dot" />
          IDEAS START HERE
        </span>
        <span className="visual-index">01 — 03</span>
      </div>

      <div className="universe-scene" aria-hidden="true">
        <div className="universe-grid" />
        <div className="universe-glow universe-glow-cyan" />
        <div className="universe-glow universe-glow-pink" />

        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit orbit-three" />

        <div className="orbit-node node-cyan">
          <MessageCircle size={19} />
        </div>
        <div className="orbit-node node-pink">
          <Lightbulb size={19} />
        </div>
        <div className="orbit-node node-violet">
          <Sparkles size={18} />
        </div>

        <div className="universe-core">
          <div className="core-inner">
            <MessageCircle size={36} strokeWidth={1.35} />
            <span>LET'S TALK</span>
          </div>
        </div>

        <span className="scene-star star-one">✳</span>
        <span className="scene-star star-two">✦</span>
        <span className="scene-star star-three">✧</span>
        <span className="scene-star star-four">·</span>
      </div>

      <div className="conversation-visual-copy">
        <span className="visual-kicker">YOUR NEXT CHAPTER</span>
        <h3>
          One conversation.
          <br />
          <span>Infinite possibilities.</span>
        </h3>
        <p>
          A fresh idea, a tricky challenge, or a vision waiting to happen.
          There's room to explore it here.
        </p>
      </div>

      <div className="idea-cards">
        <div className="idea-card idea-card-pink">
          <span className="idea-icon">
            <Lightbulb size={19} />
          </span>
          <div>
            <strong>Have an idea?</strong>
            <span>Let's bring it to life.</span>
          </div>
          <ArrowUpRight size={17} className="idea-arrow" />
        </div>

        <div className="idea-card idea-card-cyan">
          <span className="idea-icon">
            <Workflow size={19} />
          </span>
          <div>
            <strong>Need a solution?</strong>
            <span>Let's figure it out.</span>
          </div>
          <ArrowUpRight size={17} className="idea-arrow" />
        </div>
      </div>

      <div className="visual-footer">
        <span className="footer-sparkle">✳</span>
        <span>GOOD THINGS BEGIN WITH A HELLO.</span>
        <div className="footer-lines">
          <i />
          <i />
          <i />
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <>
      <section className="contact-hero section-dark">
        <div className="container contact-hero-grid">
          <div className="contact-hero-content">
            <div className="breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <span>Contact</span>
            </div>

            <p className="eyebrow">
              <span className="status-dot" />
              LET'S TALK ABOUT WHAT'S NEXT
            </p>

            <h1>
              Every good idea
              <br />
              starts with <span>a conversation.</span>
            </h1>

            <p className="contact-hero-copy">
              Tell us what's on your mind, what you're trying to solve,
              or what you wish your current technology could do better.
            </p>
          </div>

          <div className="contact-hero-art">
            <ConversationVisual />
          </div>
        </div>
      </section>

      <section className="contact-section section-light">
        <div className="container contact-grid">
          <aside className="contact-aside">
            <p className="eyebrow dark-eyebrow">01 / GET IN TOUCH</p>

            <h2 className="section-heading">
              Let's find
              <br />
              <span>a way forward.</span>
            </h2>

            <p className="body-copy">
              You don't need a complete plan to start. A little context is
              enough to begin a useful conversation.
            </p>

            <div className="contact-detail">
              <span className="contact-detail-icon">
                <Mail size={18} />
              </span>
              <div>
                <span>THE FIRST STEP</span>
                <p>Tell us about your idea using the form.</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon">
                <MapPin size={18} />
              </span>
              <div>
                <span>OUR APPROACH</span>
                <p>Thoughtful questions. Practical solutions.</p>
              </div>
            </div>

            <div className="contact-note">
              <span className="status-dot" />
              NO PRESSURE. JUST A CONVERSATION.
            </div>
          </aside>

          <div className="contact-form-wrap">
            <div className="form-heading">
              <span>02 / YOUR PROJECT</span>
              <span>ALL FIELDS REQUIRED *</span>
            </div>

            {submitted ? (
              <div
                className="form-success"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2 size={38} />
                <h2>Thanks for sharing.</h2>
                <p>
                  Your form passed validation. This is a demo only — no
                  message was sent.
                </p>
                <button
                  className="button button-dark"
                  type="button"
                  onClick={() => setSubmitted(false)}
                >
                  Back to form <ArrowUpRight size={16} />
                </button>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="field-group">
                  <label htmlFor="name">
                    Your name <span>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="What should we call you?"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p className="field-error" id="name-error">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="field-group">
                  <label htmlFor="email">
                    Email address <span>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? "email-error" : undefined
                    }
                  />
                  {errors.email && (
                    <p className="field-error" id="email-error">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="field-group">
                  <label htmlFor="message">
                    Tell us about your project <span>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={values.message}
                    onChange={handleChange}
                    placeholder="What are you hoping to build, improve, or figure out?"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  {errors.message && (
                    <p className="field-error" id="message-error">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="button button-orange form-submit"
                >
                  Send your enquiry <Send size={16} />
                </button>

                <p className="form-disclaimer">
                  Demo only — this form does not send or store your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

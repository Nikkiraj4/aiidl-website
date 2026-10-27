
import { useEffect, useRef, useState } from "react";
import "./ServiceDetail.css";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Lightbulb,
  Rocket,
  Wrench,
  Activity,
  ArrowUp,
  CircleCheck,
  Clock3,
  MoreHorizontal,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const deliverables = [
  "A clear understanding of your requirements",
  "A tailored, responsive software solution",
  "Thoughtful user experience and interface design",
  "Testing, documentation, and a practical handover",
];

const process = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Discover",
    description:
      "We understand your goals, users, constraints, and the problem you actually need to solve.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Design & build",
    description:
      "We shape the experience, develop the solution, and refine it through testing and feedback.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deliver & improve",
    description:
      "We prepare a clear handover and help you understand the next steps for your product.",
  },
];

const faqs = [
  {
    question: "What kind of businesses can benefit from custom software?",
    answer:
      "Startups and small businesses can use custom software to streamline repetitive work, connect disconnected tools, improve customer experiences, or support a process that off-the-shelf products don't handle well.",
  },
  {
    question: "How do you decide what technology to use?",
    answer:
      "We start with the problem, requirements, budget, and expected growth. The goal is to choose a practical, maintainable approach rather than add complexity for its own sake.",
  },
  {
    question: "What if my idea is still at an early stage?",
    answer:
      "That's a useful time to start a conversation. We can help clarify the problem, identify the essential features, and outline a sensible first version before committing to a larger build.",
  },
];

const dashboardData = {
  "7d": {
    label: "Last 7 days",
    revenue: "$8,420",
    change: "+12.8%",
    projects: "24",
    completion: "86%",
    points: "0,83 18,70 36,76 54,48 72,57 90,34 108,43 126,18 144,29 162,10",
    bars: [34, 52, 43, 70, 56, 84, 64],
  },
  "30d": {
    label: "Last 30 days",
    revenue: "$32,680",
    change: "+18.4%",
    projects: "31",
    completion: "92%",
    points: "0,78 18,72 36,58 54,66 72,42 90,49 108,29 126,37 144,17 162,7",
    bars: [42, 58, 48, 72, 64, 88, 74],
  },
};

function FloatingDashboard() {
  const [range, setRange] = useState("7d");
  const [activeNav, setActiveNav] = useState("Overview");
  const data = dashboardData[range];

  return (
    <div className="sd-visual" aria-label="Interactive software dashboard preview">
      <div className="sd-visual-orb sd-visual-orb-one" aria-hidden="true" />
      <div className="sd-visual-orb sd-visual-orb-two" aria-hidden="true" />

      <div className="sd-dashboard">
        <div className="sd-dashboard-topbar">
          <div className="sd-window-dots" aria-hidden="true">
            <i /><i /><i />
          </div>
          <span className="sd-window-title">workspace / overview</span>
          <button className="sd-icon-button" type="button" aria-label="More dashboard options">
            <MoreHorizontal size={18} />
          </button>
        </div>

        <div className="sd-dashboard-layout">
          <aside className="sd-dashboard-sidebar" aria-label="Dashboard preview navigation">
            <div className="sd-mini-brand"><Code2 size={17} /></div>
            {[
              { name: "Overview", icon: Activity },
              { name: "Projects", icon: Code2 },
              { name: "Activity", icon: Clock3 },
            ].map(({ name, icon: Icon }) => (
              <button
                key={name}
                type="button"
                className={`sd-side-link ${activeNav === name ? "is-active" : ""}`}
                onClick={() => setActiveNav(name)}
                aria-label={`Show ${name}`}
                aria-pressed={activeNav === name}
              >
                <Icon size={16} />
              </button>
            ))}
            <span className="sd-sidebar-spacer" />
            <span className="sd-avatar" aria-label="Workspace profile">A</span>
          </aside>

          <div className="sd-dashboard-main">
            <div className="sd-dash-heading">
              <div>
                <span className="sd-dash-kicker">YOUR WORKSPACE</span>
                <h3>{activeNav}</h3>
                <p>A clearer view of the work that matters.</p>
              </div>
              <span className="sd-live-status"><span /> Live preview</span>
            </div>

            <div className="sd-range-switch" aria-label="Choose dashboard date range">
              <button
                type="button"
                className={range === "7d" ? "is-active" : ""}
                onClick={() => setRange("7d")}
                aria-pressed={range === "7d"}
              >
                7 days
              </button>
              <button
                type="button"
                className={range === "30d" ? "is-active" : ""}
                onClick={() => setRange("30d")}
                aria-pressed={range === "30d"}
              >
                30 days
              </button>
            </div>

            <div className="sd-metric-grid" aria-live="polite" aria-atomic="true">
              <div className="sd-metric-card">
                <span>Tracked revenue</span>
                <strong>{data.revenue}</strong>
                <small><ArrowUp size={12} /> {data.change} <em>vs previous</em></small>
              </div>
              <div className="sd-metric-card">
                <span>Active projects</span>
                <strong>{data.projects}</strong>
                <small className="sd-metric-neutral"><Activity size={12} /> In progress</small>
              </div>
              <div className="sd-metric-card sd-metric-wide">
                <span>Delivery progress</span>
                <strong>{data.completion}</strong>
                <div className="sd-progress-track"><span style={{ width: data.completion }} /></div>
              </div>
            </div>

            <div className="sd-chart-card">
              <div className="sd-chart-heading">
                <div>
                  <span>PERFORMANCE</span>
                  <strong>Work over time</strong>
                </div>
                <TrendingUp size={17} />
              </div>
              <div className="sd-chart">
                <div className="sd-chart-grid" aria-hidden="true">
                  <i /><i /><i /><i />
                </div>
                <svg
                  viewBox="0 0 162 96"
                  preserveAspectRatio="none"
                  role="img"
                  aria-label={`Illustrative performance trend for the ${data.label.toLowerCase()}`}
                >
                  <defs>
                    <linearGradient id="sd-chart-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ff784c" stopOpacity=".25" />
                      <stop offset="100%" stopColor="#ff784c" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polygon points={`0,96 ${data.points} 162,96`} fill="url(#sd-chart-fill)" />
                  <polyline className="sd-chart-line" points={data.points} />
                </svg>
              </div>
              <div className="sd-chart-labels"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div>
            </div>

            <div className="sd-activity-card">
              <span className="sd-activity-icon"><CircleCheck size={15} /></span>
              <div><strong>Milestone completed</strong><span>Design review · just now</span></div>
              <span className="sd-activity-check"><Check size={14} /></span>
            </div>
          </div>
        </div>
      </div>

      <div className="sd-float-note sd-float-note-top">
        <span className="sd-note-icon"><TrendingUp size={16} /></span>
        <span><strong>Progress, in focus</strong><small>Less guesswork. More clarity.</small></span>
      </div>

      <div className="sd-float-note sd-float-note-bottom">
        <span className="sd-note-check"><Check size={15} /></span>
        <span><strong>One less thing to chase</strong><small>Workflows working together</small></span>
      </div>

      <p className="sd-visual-caption"><span /> CONCEPT INTERFACE / 001</p>
    </div>
  );
}

function useScrollReveal() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = root.querySelectorAll("[data-reveal]");

    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return rootRef;
}

export default function ServiceDetail() {
  const revealRef = useScrollReveal();

  return (
    <main className="service-detail-page" ref={revealRef}>
      <section className="service-hero section-dark">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Services</span><span>/</span><span>Custom software</span>
          </div>

          <div className="sd-hero-grid">
            <div className="sd-hero-copy" data-reveal>
              <p className="eyebrow"><span className="status-dot" /> SERVICE 01 / SOFTWARE ENGINEERING</p>
              <h1>Software that fits<br />the way you <span>work.</span></h1>
              <p className="service-hero-copy">
                When generic tools fall short, custom software helps you build around
                your people, your processes, and your ambitions.
              </p>
              <div className="sd-hero-actions">
                <Link to="/contact" className="button button-orange">Discuss your project <ArrowUpRight size={17} /></Link>
                <a href="#service-opportunity" className="sd-hero-secondary">Explore the approach <ArrowRight size={16} /></a>
              </div>
              <div className="service-hero-foot"><span>THOUGHTFUL SOLUTIONS, BUILT WITH PURPOSE</span><Code2 size={18} /></div>
            </div>

            <div className="sd-hero-visual-wrap" data-reveal>
              <FloatingDashboard />
            </div>
          </div>
        </div>
      </section>

      <section className="section-light service-overview" id="service-opportunity">
        <div className="container service-overview-grid">
          <p className="eyebrow dark-eyebrow" data-reveal>01 / THE OPPORTUNITY</p>
          <div data-reveal>
            <h2 className="section-heading">Your business isn't<br />one-size-<span>fits-all.</span></h2>
            <p className="body-copy">
              Manual work, disconnected systems, and workarounds can make growth
              harder than it needs to be. Custom software brings the right parts
              together, giving your team a more useful way to get things done.
            </p>
            <p className="body-copy">
              We focus on solving the real problem first, then building a solution
              that's understandable, maintainable, and designed for its users.
            </p>
          </div>
        </div>
      </section>

      <section className="section-light deliverables-section">
        <div className="container deliverables-grid">
          <div data-reveal>
            <p className="eyebrow dark-eyebrow">02 / WHAT YOU GET</p>
            <h2 className="section-heading">A useful solution.<br /><span>From end to end.</span></h2>
          </div>
          <div className="deliverables-list" data-reveal>
            {deliverables.map((item, index) => (
              <div className="deliverable" key={item} style={{ "--reveal-index": index }}>
                <span className="check-icon"><Check size={16} /></span><span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light process-section">
        <div className="container">
          <div data-reveal>
            <p className="eyebrow dark-eyebrow">03 / HOW WE WORK</p>
            <h2 className="section-heading">Clear steps.<br /><span>Better outcomes.</span></h2>
          </div>
          <div className="process-grid">
            {process.map(({ number, icon: Icon, title, description }, index) => (
              <article className="process-card" key={number} data-reveal style={{ "--reveal-index": index }}>
                <div className="process-top"><span>{number}</span><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="process-rule" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light faq-section">
        <div className="container faq-grid">
          <div data-reveal>
            <p className="eyebrow dark-eyebrow">04 / GOOD QUESTIONS</p>
            <h2 className="section-heading">Before we<br /><span>get started.</span></h2>
            <p className="body-copy">A few useful answers to help you take the next step with confidence.</p>
            <Link to="/contact" className="text-link dark-text-link">Ask us something else <ArrowRight size={16} /></Link>
          </div>
          <div className="faq-list" data-reveal>
            {faqs.map((faq, index) => (
              <details className="faq-item" key={faq.question} open={index === 0}>
                <summary>{faq.question}<span className="faq-plus" aria-hidden="true" /></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="service-bottom-cta" data-reveal>
        <div className="container service-bottom-inner">
          <p className="eyebrow"><span className="status-dot" /> LET'S START WITH A CONVERSATION</p>
          <h2>Bring us the<br /><span>problem.</span></h2>
          <p>We'll help you explore a sensible way forward, one step at a time.</p>
          <Link to="/contact" className="button button-orange">Talk about your project <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}

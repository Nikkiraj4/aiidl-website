
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Cloud,
  Check,
  Minus,
  Plus,
  ShoppingBag,
  ChartNoAxesCombined,
  CircleCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import HeroVisual from "../components/HeroVisual.jsx";
import "./Home.css";


const services = [
  {
    number: "01",
    title: "Custom Software",
    description:
      "Purpose-built tools for complex workflows, repetitive tasks, and business-specific needs.",
    audience:
      "For teams with unique processes and growing operational needs.",
    deliverables: [
      "Workflow tools",
      "Internal systems",
      "Business automation",
    ],
    icon: Code2,
    link: "/services/custom-software",
    label: "Explore service",
  },
  {
    number: "02",
    title: "Web & Mobile Apps",
    description:
      "Clear, responsive digital experiences that help people get things done.",
    audience:
      "For founders and teams turning ideas into useful products.",
    deliverables: [
      "Responsive websites",
      "Web applications",
      "Mobile-first interfaces",
    ],
    icon: Layers3,
    link: "/contact?service=web-mobile",
    label: "Discuss your idea",
  },
  {
    number: "03",
    title: "Cloud & DevOps",
    description:
      "Practical infrastructure and delivery workflows designed around your product.",
    audience:
      "For teams seeking dependable deployments and room to grow.",
    deliverables: [
      "Cloud setup",
      "Deployment workflows",
      "Infrastructure planning",
    ],
    icon: Cloud,
    link: "/contact?service=cloud-devops",
    label: "Discuss your idea",
  },
];

const cafeMenu = [
  {
    id: "latte",
    name: "Cloud Nine Latte",
    detail: "Espresso · Oat milk",
    price: 180,
  },
  {
    id: "matcha",
    name: "Neon Matcha",
    detail: "Matcha · Smooth and bright",
    price: 210,
  },
  {
    id: "croissant",
    name: "Butter Croissant",
    detail: "Flaky · Freshly baked",
    price: 120,
  },
];

const weeklyTasks = [
  { id: "design", label: "Review interface concepts", owner: "Design" },
  { id: "build", label: "Build the first prototype", owner: "Product" },
  { id: "feedback", label: "Collect team feedback", owner: "Research" },
];

const monthlyTasks = [
  { id: "launch", label: "Prepare launch checklist", owner: "Product" },
  { id: "quality", label: "Complete quality review", owner: "Engineering" },
  { id: "insights", label: "Review customer insights", owner: "Research" },
];

function CafePreview() {
  const [quantities, setQuantities] = useState({
    latte: 1,
    matcha: 0,
    croissant: 0,
  });
  const [orderMessage, setOrderMessage] = useState("");

  const totalItems = Object.values(quantities).reduce(
    (sum, quantity) => sum + quantity,
    0,
  );

  const totalPrice = cafeMenu.reduce(
    (sum, item) => sum + item.price * quantities[item.id],
    0,
  );

  function updateQuantity(id, amount) {
    setOrderMessage("");
    setQuantities((current) => ({
      ...current,
      [id]: Math.max(0, current[id] + amount),
    }));
  }

  return (
    <div className="interactive-demo cafe-demo">
      <div className="demo-window-bar">
        <div className="demo-window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="demo-window-address">goodmorning.cafe / menu</span>
        <span className="demo-live-label">
          <span className="demo-live-dot" />
          INTERACTIVE
        </span>
      </div>

      <div className="cafe-demo-header">
        <span className="demo-kicker">YOUR DAILY RITUAL</span>
        <h3>A slower kind of morning.</h3>
        <p>Good coffee. Fresh pastries. A little room to breathe.</p>
      </div>

      <div className="cafe-menu-list">
        {cafeMenu.map((item) => (
          <div className="cafe-menu-item" key={item.id}>
            <div className="cafe-menu-item-copy">
              <strong>{item.name}</strong>
              <span>{item.detail}</span>
              <b>₹{item.price}</b>
            </div>

            <div
              className="quantity-control"
              aria-label={`${item.name} quantity`}
            >
              <button
                type="button"
                aria-label={`Remove one ${item.name}`}
                disabled={quantities[item.id] === 0}
                onClick={() => updateQuantity(item.id, -1)}
              >
                <Minus size={14} aria-hidden="true" />
              </button>

              <output aria-label={`${quantities[item.id]} selected`}>
                {quantities[item.id]}
              </output>

              <button
                type="button"
                aria-label={`Add one ${item.name}`}
                onClick={() => updateQuantity(item.id, 1)}
              >
                <Plus size={14} aria-hidden="true" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cafe-demo-total" aria-live="polite" aria-atomic="true">
        <div>
          <span>
            {totalItems} item{totalItems === 1 ? "" : "s"}
          </span>
          <strong>₹{totalPrice.toLocaleString("en-IN")}</strong>
        </div>

        <button
          type="button"
          className="demo-action-button"
          onClick={() =>
            setOrderMessage("Concept only - no order was placed.")
          }
        >
          <ShoppingBag size={16} aria-hidden="true" />
          Place order
          <ArrowUpRight size={15} aria-hidden="true" />
        </button>
      </div>

      {orderMessage && (
        <p className="demo-feedback" role="status">
          <CircleCheck size={16} aria-hidden="true" />
          {orderMessage}
        </p>
      )}

      <p className="demo-sample-note">
        Fictional cafe · Sample menu · No real order is processed
      </p>
    </div>
  );
}

function TeamPulsePreview() {
  const [period, setPeriod] = useState("week");
  const [checkedTasks, setCheckedTasks] = useState([]);

  const isWeek = period === "week";
  const tasks = isWeek ? weeklyTasks : monthlyTasks;
  const chartValues = isWeek
    ? [34, 52, 43, 76, 60, 88, 69]
    : [44, 58, 49, 70, 64, 82, 96];

  function toggleTask(id) {
    setCheckedTasks((current) =>
      current.includes(id)
        ? current.filter((taskId) => taskId !== id)
        : [...current, id],
    );
  }

  return (
    <div className="interactive-demo pulse-demo">
      <div className="demo-window-bar">
        <div className="demo-window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="demo-window-address">northstar / team pulse</span>
        <span className="demo-live-label">
          <span className="demo-live-dot" />
          SAMPLE DATA
        </span>
      </div>

      <div className="pulse-demo-content">
        <div className="pulse-demo-heading">
          <div>
            <span className="demo-kicker">TEAM OVERVIEW</span>
            <h3>Project pulse.</h3>
          </div>
          <ChartNoAxesCombined size={24} aria-hidden="true" />
        </div>

        <div
          className="pulse-period-switch"
          aria-label="Dashboard reporting period"
        >
          <button
            type="button"
            aria-pressed={isWeek}
            onClick={() => setPeriod("week")}
          >
            This week
          </button>
          <button
            type="button"
            aria-pressed={!isWeek}
            onClick={() => setPeriod("month")}
          >
            This month
          </button>
        </div>

        <div className="pulse-stat-grid" aria-live="polite">
          <div className="pulse-stat">
            <span>Tasks completed</span>
            <strong>{isWeek ? "18" : "64"}</strong>
            <small>{isWeek ? "+4 this week" : "+12 this month"}</small>
          </div>

          <div className="pulse-stat">
            <span>Team progress</span>
            <strong>{isWeek ? "72%" : "86%"}</strong>
            <div className="pulse-progress-track">
              <span style={{ width: isWeek ? "72%" : "86%" }} />
            </div>
          </div>
        </div>

        <div
          className="pulse-chart"
          role="img"
          aria-label={`${isWeek ? "Weekly" : "Monthly"} sample activity chart`}
        >
          <div className="pulse-chart-grid" aria-hidden="true" />
          <div className="pulse-chart-bars" aria-hidden="true">
            {chartValues.map((height, index) => (
              <span
                key={`${period}-${index}`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        <div className="pulse-chart-labels" aria-hidden="true">
          {(isWeek
            ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            : ["W1", "W2", "W3", "W4", "W5", "W6", "W7"]
          ).map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>

        <div className="pulse-tasks-heading">
          <strong>Focus list</strong>
          <span>
            {tasks.filter((task) => checkedTasks.includes(task.id)).length}
            /{tasks.length} complete
          </span>
        </div>

        <div className="pulse-task-list">
          {tasks.map((task) => (
            <label className="pulse-task" key={task.id}>
              <input
                type="checkbox"
                checked={checkedTasks.includes(task.id)}
                onChange={() => toggleTask(task.id)}
              />
              <span className="pulse-task-label">{task.label}</span>
              <span className="pulse-task-owner">{task.owner}</span>
            </label>
          ))}
        </div>

        <p className="demo-sample-note">
          Fictional team · Sample data · Changes are only kept in this page
          session
        </p>
      </div>
    </div>
  );
}

function ApproachSection() {
  return (
    <section
      className="approach-section page-section neon-section"
      id="our-approach"
    >
      <div className="container approach-layout">
        <div className="approach-copy">
          <span className="eyebrow approach-eyebrow">
            <span className="approach-eyebrow-dot" />
            OUR APPROACH
          </span>

          <h2 className="approach-heading">
            Less friction.
            <span>More forward.</span>
          </h2>

          <p className="approach-description">
            Technology should help people do their best work, not make the
            work harder. We focus on understanding the problem, choosing a
            practical approach, and building something useful.
          </p>

          <a className="approach-link" href="#services">
            A practical way to build
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="approach-steps" aria-label="Our three-step approach">
          <div className="approach-energy-line" aria-hidden="true">
            <span />
          </div>

          <article className="approach-step">
            <div
              className="approach-step-icon approach-icon-blue"
              aria-hidden="true"
            >
              <span>01</span>
            </div>
            <div className="approach-step-content">
              <span className="approach-step-label">FIRST, GET CLARITY</span>
              <h3>Understand</h3>
              <p>Find the real problem before choosing the technology.</p>
            </div>
            <span className="approach-step-arrow" aria-hidden="true">
              ↗
            </span>
          </article>

          <article className="approach-step">
            <div
              className="approach-step-icon approach-icon-violet"
              aria-hidden="true"
            >
              <span>02</span>
            </div>
            <div className="approach-step-content">
              <span className="approach-step-label">THEN, BUILD SMART</span>
              <h3>Engineer</h3>
              <p>Choose a practical solution without unnecessary complexity.</p>
            </div>
            <span className="approach-step-arrow" aria-hidden="true">
              ↗
            </span>
          </article>

          <article className="approach-step">
            <div
              className="approach-step-icon approach-icon-pink"
              aria-hidden="true"
            >
              <span>03</span>
            </div>
            <div className="approach-step-content">
              <span className="approach-step-label">
                FINALLY, MAKE IT USEFUL
              </span>
              <h3>Move forward</h3>
              <p>Build, refine, and deliver something people can use.</p>
            </div>
            <span className="approach-step-arrow" aria-hidden="true">
              ↗
            </span>
          </article>
        </div>
      </div>
    </section>
  );
}

function IdeaIllustration() {
  return (
    <div
      className="idea-illustration"
      role="img"
      aria-label="A glowing light bulb surrounded by idea notes, a product checklist, and an app sketchbook."
    >
      <div className="idea-glow" aria-hidden="true" />

      <div className="idea-rays" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>

      <div className="idea-note idea-note-sketch">
        <span className="idea-note-label">01 / EXPLORE</span>
        <svg viewBox="0 0 120 90" aria-hidden="true">
          <path d="M60 10 C42 10 32 24 32 40 C32 52 42 58 44 68 L76 68 C78 58 88 52 88 40 C88 24 78 10 60 10Z" />
          <path d="M46 76 H74 M49 83 H71 M54 90 H66" />
          <path d="M60 23 V48 M48 35 H72 M52 27 L68 43 M68 27 L52 43" />
        </svg>
        <span className="idea-handwritten">What if?</span>
      </div>

      <div className="idea-note idea-note-checklist">
        <span className="idea-note-label">02 / MAKE IT REAL</span>
        <h3>The next steps</h3>
        <p><span>✓</span> Understand</p>
        <p><span>✓</span> Design</p>
        <p><span className="idea-empty-check" /> Build</p>
      </div>

      <div className="idea-bulb">
        <svg viewBox="0 0 180 230" aria-hidden="true">
          <defs>
            <radialGradient id="ideaBulbFill" cx="38%" cy="28%" r="75%">
              <stop offset="0%" stopColor="#fff9d7" />
              <stop offset="45%" stopColor="#ffe991" />
              <stop offset="100%" stopColor="#ffb84e" />
            </radialGradient>
            <linearGradient id="ideaBulbBase" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8b91a8" />
              <stop offset="50%" stopColor="#34374c" />
              <stop offset="100%" stopColor="#171927" />
            </linearGradient>
          </defs>

          <path
            className="bulb-glass"
            d="M90 15 C48 15 22 46 22 82 C22 110 38 126 52 145 C60 155 63 164 64 174 H116 C117 164 120 155 128 145 C142 126 158 110 158 82 C158 46 132 15 90 15Z"
            fill="url(#ideaBulbFill)"
          />
          <path
            d="M58 91 C58 69 75 59 90 78 C105 59 122 69 122 91 C122 106 105 112 90 126 C75 112 58 106 58 91Z"
            fill="none"
            stroke="#fffbe8"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M90 80 V148"
            stroke="#fffbe8"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path d="M65 177 H115 L110 190 H70Z" fill="url(#ideaBulbBase)" />
          <path d="M70 192 H110 L105 204 H75Z" fill="url(#ideaBulbBase)" />
          <path d="M76 206 H104 L98 217 H82Z" fill="url(#ideaBulbBase)" />
          <path
            d="M39 53 C33 68 35 84 41 96"
            fill="none"
            stroke="#fff9df"
            strokeWidth="4"
            strokeLinecap="round"
            opacity=".75"
          />
        </svg>
      </div>

      <div className="idea-note idea-note-people">
        <span className="idea-note-label">03 / THE PURPOSE</span>
        <svg viewBox="0 0 120 62" aria-hidden="true">
          <circle cx="60" cy="16" r="10" />
          <circle cx="29" cy="26" r="7" />
          <circle cx="91" cy="26" r="7" />
          <path d="M40 53 C40 34 80 34 80 53 M12 54 C12 40 35 39 40 46 M80 46 C85 39 108 40 108 54" />
        </svg>
        <span className="idea-handwritten">People first.</span>
      </div>

      <div className="idea-sketchbook">
        <div className="idea-book-spiral" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="idea-book-page">
          <span className="idea-note-label">FIRST DRAFT / 001</span>
          <div className="idea-wireframe-top">
            <i />
            <i />
            <i />
          </div>
          <div className="idea-wireframe-body">
            <div className="idea-wireframe-sidebar">
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="idea-wireframe-main">
              <i />
              <i />
              <div className="idea-wireframe-cards">
                <span />
                <span />
                <span />
              </div>
              <i />
            </div>
          </div>
          <span className="idea-book-caption">Make it useful.</span>
        </div>
      </div>

      <div className="idea-pencil" aria-hidden="true">
        <span />
      </div>

      <span className="idea-orbit idea-orbit-one" aria-hidden="true" />
      <span className="idea-orbit idea-orbit-two" aria-hidden="true" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="home-hero section-dark neon-section">
        <div className="home-hero-texture" aria-hidden="true" />

        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              THOUGHTFUL IDEAS. USEFUL SOFTWARE.
            </p>

            <h1>
              Got an idea? Let&apos;s turn it into something people{" "}
              <span>love to use.</span>
            </h1>

            <p className="home-hero-description">
              We turn ambitious ideas and everyday challenges into practical
              digital experiences designed around real people.
            </p>

            <div className="home-hero-actions">
              <Link to="/contact" className="button button-primary">
                Tell us your idea
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
              <a href="#concept-projects" className="text-link">
                Peek at our concept work
                <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>

            <p className="home-hero-footnote">
              <span className="home-footnote-rule" />
              GOOD SOFTWARE STARTS WITH A BETTER QUESTION.
            </p>
          </div>

          <div className="home-hero-art">
            <HeroVisual />
          </div>
        </div>

        <div className="container home-hero-bottom">
          <span>INDEPENDENT THINKING.</span>
          <span className="hero-bottom-slash" aria-hidden="true">///</span>
          <span>PRACTICAL ENGINEERING.</span>
        </div>
      </section>

      <ApproachSection />

      <section
        className="home-services section-dark neon-section"
        id="services"
      >
        <div className="container">
          <div className="home-section-topline">
            <p className="eyebrow">OUR SERVICES</p>
            <span className="section-meta">THREE WAYS TO MOVE FORWARD</span>
          </div>

          <div className="home-section-heading">
            <h2 className="section-heading">
              Find your
              <br />
              <span>next move.</span>
            </h2>
            <p>
              Start with the challenge. We&apos;ll help you explore the right
              technical direction.
            </p>
          </div>

          <div className="home-service-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="home-service-card" key={service.number}>
                  <div className="home-service-card-top">
                    <span className="panel-label">
                      SERVICE {service.number}
                    </span>
                    <span className="home-service-icon" aria-hidden="true">
                      <Icon size={24} strokeWidth={2} />
                    </span>
                  </div>

                  <h3>{service.title}</h3>
                  <p className="home-service-description">
                    {service.description}
                  </p>
                  <p className="home-service-audience">{service.audience}</p>

                  <ul className="home-deliverables">
                    {service.deliverables.map((item) => (
                      <li key={item}>
                        <Check size={15} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={service.link} className="home-service-link">
                    {service.label}
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="home-projects section-dark neon-section"
        id="concept-projects"
      >
        <div className="container">
          <div className="home-section-topline">
            <p className="eyebrow">CONCEPT PROJECTS</p>
            <span className="section-meta">IMAGINED, NOT CLIENT WORK</span>
          </div>

          <div className="home-section-heading">
            <h2 className="section-heading">
              Ideas with
              <br />
              <span>some shape.</span>
            </h2>
            <p>
              Explore two fictional products. Try the controls and see how
              thoughtful interfaces can make everyday tasks feel clearer.
            </p>
          </div>

          <div className="home-project-grid">
            <article className="home-project-card">
              <div className="home-project-visual home-project-cafe">
                <span className="home-project-panel-label">CONCEPT 01</span>
                <CafePreview />
                <span className="home-project-concept-stamp">CONCEPT</span>
              </div>

              <div className="home-project-info">
                <p className="home-project-category">
                  CAFE ORDERING EXPERIENCE
                </p>
                <h3>Good Morning</h3>
                <p>
                  A fictional neighborhood cafe where visitors can explore a
                  menu, adjust quantities, and see an order total update live.
                </p>
                <span className="home-project-concept-label">
                  Concept project
                </span>
              </div>
            </article>

            <article className="home-project-card">
              <div className="home-project-visual home-project-dashboard">
                <span className="home-project-panel-label">CONCEPT 02</span>
                <TeamPulsePreview />
                <span className="home-project-concept-stamp">CONCEPT</span>
              </div>

              <div className="home-project-info">
                <p className="home-project-category">TEAM DASHBOARD</p>
                <h3>Northstar / Team Pulse</h3>
                <p>
                  A fictional team workspace with sample activity, reporting
                  periods, and a checklist to explore.
                </p>
                <span className="home-project-concept-label">
                  Concept project
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="home-closing-cta section-dark neon-section">
        <div className="container home-closing-inner">
          <div className="closing-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              YOUR NEXT MOVE
            </p>

            <h2>
              The next chapter
              <br />
              starts with <span>an idea.</span>
            </h2>

            <p className="closing-description">
              Tell us what you&apos;re trying to solve. Start with a rough
              sketch, a question, or a challenge.
            </p>

            <Link to="/contact" className="button button-primary">
              Tell us your idea
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <IdeaIllustration />
        </div>
      </section>
    </>
  );
}

import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// Simple icons that do not require lucide-react
function Icon({ children, size = 18 }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        fontSize: size,
        lineHeight: 1,
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

const ArrowDown = (props) => <Icon {...props}>↓</Icon>;
const ArrowUpRight = (props) => <Icon {...props}>↗</Icon>;
const Code2 = (props) => <Icon {...props}>⌘</Icon>;
const Linkedin = (props) => <Icon {...props}>in</Icon>;
const Mail = (props) => <Icon {...props}>✉</Icon>;
const MapPin = (props) => <Icon {...props}>⌖</Icon>;
const Smartphone = (props) => <Icon {...props}>▯</Icon>;
const BriefcaseBusiness = (props) => <Icon {...props}>▣</Icon>;
const GraduationCap = (props) => <Icon {...props}>♧</Icon>;
const FileText = (props) => <Icon {...props}>▤</Icon>;

const projects = [
  {
    number: "01",
    name: "Daily Grow",
    type: "Mobile app · Internship",
    description:
      "A Flutter to-do list app with task management, search, and a notes feature to support everyday planning.",
    stack: ["Flutter", "Dart"],
    icon: Smartphone,
  },
  {
    number: "02",
    name: "Pingo — Smart Alarm",
    type: "Mobile app · Team project",
    description:
      "A smart alarm application developed collaboratively during my app development internship.",
    stack: ["Flutter", "Dart"],
    icon: Smartphone,
  },
  {
    number: "03",
    name: "Game Based Learning Platform",
    type: "Web app · Academic project",
    description:
      "A game-based learning experience with PythonQuest levels, browser-based Python practice, and a leaderboard.",
    stack: ["React", "Firebase", "Pyodide"],
    icon: Code2,
  },
  {
    number: "04",
    name: "Inventory Management System",
    type: "Full-stack web app",
    description:
      "An inventory application with a MySQL database, API-based backend, and low-stock alerts.",
    stack: ["React", "Node.js", "MySQL", "REST API"],
    icon: Code2,
  },
  {
    number: "05",
    name: "Vegetable Online Shopping Website",
    type: "Full-stack web app",
    description:
      "A full-stack shopping website with product listings, interface design, order handling, and database operations.",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
    icon: Code2,
  },
  {
    number: "06",
    name: "AI Interview Analyzer",
    type: "AI · College hackathon",
    description:
      "An AI-based mock interview system using NLP and real-time speech analysis to assess speech clarity, fluency, confidence, and emotions.",
    stack: ["React", "Python", "NLP"],
    icon: Code2,
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "C",
  "MySQL",
  "Flutter",
  "Dart",
  "Firebase",
  "Node.js",
  "REST APIs",
];

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Gayathri home">
          G<span>.</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact" className="nav-contact">
            Contact <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              OPEN TO SOFTWARE DEVELOPMENT OPPORTUNITIES
            </p>

            <h1>
              Hi, I'm
              <br />
              <span>Gayathri PS.</span>
            </h1>

            <p className="hero-subtitle">
              Computer Science graduate{" "}
              <span className="accent">·</span> Aspiring Software Developer
            </p>

            <p className="hero-description">
              I enjoy building useful digital experiences—from mobile apps to
              full-stack web projects—and turning ideas into working solutions.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowDown size={16} />
              </a>

              <a
                className="button button-ghost"
                href="/Gayathri-PS-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <FileText size={16} /> View resume
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <MapPin size={15} /> Chennai, India
              </span>
              <span className="meta-divider" />
              <span>B.Sc. Computer Science · 2026</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Decorative code illustration">
            <div className="orb orb-one" />
            <div className="orb orb-two" />

            <div className="code-window">
              <div className="window-bar">
                <i />
                <i />
                <i />
                <span>developer.js</span>
              </div>

              <pre>
                <code>
                  <b>const</b> developer = {"{"}
                  <br />
                  {"  "}name: <em>"Gayathri"</em>,
                  <br />
                  {"  "}focus: <em>"building"</em>,
                  <br />
                  {"  "}learning: <em>"every day"</em>
                  <br />
                  {"}"};
                  <br />
                  <br />
                  <b>developer</b>.create();
                </code>
              </pre>

              <div className="window-footer">
                <span className="pulse" /> Ready to build
              </div>
            </div>

            <div className="floating-tag tag-top">
              {"</>"} React & UI
            </div>

            <div className="floating-tag tag-bottom">
              <span>✦</span> Curious by nature
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>
              Curious mind.
              <br />
              <span>Practical builder.</span>
            </h2>
          </div>

          <div className="about-content">
            <p className="about-lead">
              I'm a B.Sc. Computer Science graduate from M.O.P. Vaishnav
              College for Women, with a strong interest in software development.
            </p>

            <p>
              My experience spans mobile app development, web applications,
              databases, and AI-based projects. I like learning by building,
              collaborating with others, and making software that solves real
              problems.
            </p>

            <div className="education-card">
              <GraduationCap size={22} />

              <div>
                <strong>B.Sc. Computer Science</strong>
                <span>
                  M.O.P. Vaishnav College for Women · 2026
                </span>
              </div>

              <b>8.135 CGPA</b>
            </div>
          </div>
        </section>

        <section className="section skills-section">
          <div className="section-heading compact">
            <p className="eyebrow">TOOLS I WORK WITH</p>
            <h2>
              Skills & <span>technologies</span>
            </h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <span className="skill-chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>

          <p className="skill-note">
            Comfortable learning new tools and adapting to the needs of a
            project.
          </p>
        </section>

        <section className="section projects-section" id="projects">
          <div className="projects-heading">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>
                Projects that <span>teach me.</span>
              </h2>
            </div>

            <p>
              A mix of academic, internship, and independent development work.
            </p>
          </div>

          <div className="project-grid">
            {projects.map(
              ({ number, name, type, description, stack, icon: IconComponent }) => (
                <article className="project-card" key={number}>
                  <div className="project-top">
                    <span className="project-number">{number}</span>

                    <span className="project-icon">
                      <IconComponent size={20} />
                    </span>
                  </div>

                  <p className="project-type">{type}</p>
                  <h3>{name}</h3>
                  <p className="project-description">{description}</p>

                  <div className="project-stack">
                    {stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              )
            )}
          </div>
        </section>

        <section
          className="section experience-section"
          id="experience"
        >
          <div className="section-heading compact">
            <p className="eyebrow">WHERE I'VE GROWN</p>
            <h2>
              Experience & <span>learning</span>
            </h2>
          </div>

          <article className="experience-card">
            <div className="experience-mark">
              <BriefcaseBusiness size={23} />
            </div>

            <div className="experience-main">
              <div className="experience-title">
                <div>
                  <h3>App Development Intern</h3>
                  <p>Inodesys Technologies</p>
                </div>

                <span className="experience-date">
                  Apr 2025 — Jun 2025
                </span>
              </div>

              <ul>
                <li>
                  Developed Daily Grow, a Flutter and Dart to-do app with task
                  management, search, and notes.
                </li>
                <li>
                  Collaborated with a team to design and develop the Pingo
                  smart alarm application.
                </li>
                <li>
                  Gained hands-on experience in mobile app development, UI
                  design, and application functionality.
                </li>
              </ul>
            </div>
          </article>

          <div className="certifications">
            <span className="eyebrow">CERTIFICATIONS</span>
            <p>Complete 2024 Web Development Bootcamp — Udemy</p>
            <p>Introduction to MongoDB — MongoDB</p>
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>

          <h2>
            Have a project
            <br />
            or opportunity in mind?
          </h2>

          <p className="contact-sub">I’d love to hear from you.</p>

          <div className="contact-links">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gayathrips2006@gmail.com"
  target="_blank"
  rel="noreferrer">
              <Mail size={17} /> Email me <ArrowUpRight size={15} />
            </a>

            <a
              href="https://www.linkedin.com/in/gayathri-ps-a58790342/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={17} /> LinkedIn <ArrowUpRight size={15} />
            </a>

            <a
              href="https://github.com/gayathrips13"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={17} /> GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          G<span>.</span>
        </a>

        <p>Designed & built with care by Gayathri PS</p>

        <a href="#home" className="back-top">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
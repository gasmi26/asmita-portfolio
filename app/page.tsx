import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";

const skills = [
  {
    icon: "💻",
    name: "Languages",
    tags: ["Java", "C", "Python"],
  },
  {
    icon: "⚡",
    name: "Frontend",
    tags: ["React", "Thymeleaf", "HTML", "CSS", "JavaScript"],
  },
  {
    icon: "🛠",
    name: "Backend",
    tags: ["Spring Boot", "Spring MVC", "Spring Security", "Flask", "REST APIs"],
  },
  {
    icon: "🤖",
    name: "AI & ML",
    tags: ["LangGraph", "LangChain", "FAISS", "Chronos-T5", "HuggingFace", "PyTorch", "PuLP"],
  },
  {
    icon: "🗄",
    name: "Database",
    tags: ["MySQL", "MongoDB", "SQLite", "SQLAlchemy"],
  },
  {
    icon: "🔐",
    name: "Auth & Security",
    tags: ["OAuth 2.0", "JWT", "Spring Security", "Email Verification"],
  },
  {
    icon: "🧪",
    name: "Testing & Monitoring",
    tags: ["Apache JMeter", "Spring Boot Actuator", "Micrometer", "Unit Testing"],
  },
  {
    icon: "🔧",
    name: "Tools & Others",
    tags: ["Maven", "Git", "SMTP", "CSV/Excel Export", "sentence-transformers"],
  },
];

const projects = [
  {
    num: "01",
    emoji: "📇",
    title: "ContactCraft",
    desc: "ContactCraft is a full-stack contact management system built with Spring Boot MVC and Thymeleaf, featuring secure OAuth2/JWT authentication, email verification, and complete CRUD operations with CSV export. It also includes real-time chat functionality and performance-optimized backend validated using JMeter, along with robust unit testing using JUnit and Mockito.",
    stack: ["Spring Boot", "Spring Security", "OAuth2", "JWT", "MySQL", "Thymeleaf", "JMeter"],
    github: "https://github.com/gasmi26/CONTACTCRAFT",
    live: "#",
  },
  {
    num: "02",
    emoji: "🤖",
    title: "IntelliStock Optimizer",
    desc: "IntelliStock Optimizer is an AI-powered procurement system that combines time-series forecasting (Chronos-T5), Agentic RAG (LangChain + FAISS), and linear programming optimization (PuLP) to generate cost-efficient inventory decisions. It features an LLM-validated pipeline with a Flask backend and React dashboard for real-time procurement insights and reporting.",
    stack: ["Python", "PyTorch", "LangChain", "FAISS", "Chronos-T5", "PuLP", "Flask", "React", "SQLite","LLM Agents"],
    github: "https://github.com/gasmi26/intellistock",
    live: "#",
  },
];

export default function Home() {
  return (
    <>
      <Cursor />
      <div className="grid-bg" />
      <div className="scanline" />
      <Navbar />

      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero-glow" />
        <div className="hero-glow2" />
        <div className="hero-content">
          <div className="hero-tag fade-up delay-1">Open to opportunities</div>
          <h1 className="fade-up delay-2">
            <span className="name">Asmita Ghosh</span>
            <span className="role">CS Engineer.</span>
            <span className="role">Problem Solver.</span>
          </h1>
          <p className="hero-desc fade-up delay-3">
            &gt; Computer Science Engineer from India.<br />
            &gt; I thrive on solving complex problems — from full-stack apps<br />
            &gt; to AI-powered systems that think, optimize &amp; act.
          </p>
          <div className="hero-cta fade-up delay-4">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-secondary">Get in Touch</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="about">
          <div className="about-text">
            <div className="section-header">
              <span className="section-tag">// 01</span>
              <div className="section-line" />
            </div>
            <h2 className="section-title" style={{ marginBottom: "2rem" }}>About Me</h2>
            <p>
              I&apos;m <strong>Asmita Ghosh</strong>, a Computer Science Engineer from India with a passion for
              building systems that are not just functional — but thoughtfully engineered.
            </p>
            <p>
              I love tackling <strong>complex problems</strong> — whether that&apos;s designing a secure full-stack
              web app, architecting an AI agent with real ML models, or optimizing decisions with mathematical
              programming. I enjoy the intersection of software engineering and intelligent systems.
            </p>
            <p>
              My work spans <strong>Spring Boot backends</strong>, <strong>React frontends</strong>, and
              <strong> agentic AI pipelines</strong> combining LLMs, vector search, and operations research.
              I write in Java, Python, and C — and I love every layer of the stack.
            </p>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-num">2</div>
                <div className="stat-label">Major projects built</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">3+</div>
                <div className="stat-label">Languages mastered</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">0ms</div>
                <div className="stat-label">Error rate (JMeter)</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">∞</div>
                <div className="stat-label">Problems to solve</div>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="avatar-frame">
              <div className="avatar-frame-corner corner-tl" />
              <div className="avatar-frame-corner corner-tr" />
              <div className="avatar-frame-corner corner-bl" />
              <div className="avatar-frame-corner corner-br" />
              <div className="avatar-placeholder">
                <div className="avatar-icon">👩‍💻</div>
                <span className="avatar-label">// your photo here</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="skills-section">
          <div className="section-header">
            <span className="section-tag">// 02</span>
            <div className="section-line" />
          </div>
          <h2 className="section-title" style={{ marginBottom: "3rem" }}>Skills & Tech</h2>
          <div className="skills-grid">
            {skills.map((s) => (
              <div className="skill-card" key={s.name}>
                <div className="skill-icon">{s.icon}</div>
                <div className="skill-name">{s.name}</div>
                <div className="skill-tags">
                  {s.tags.map((t) => (
                    <span className="skill-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="projects-section">
          <div className="section-header">
            <span className="section-tag">// 03</span>
            <div className="section-line" />
          </div>
          <h2 className="section-title" style={{ marginBottom: "3rem" }}>Selected Work</h2>
          <div className="projects-grid">
            {projects.map((p) => (
              <div className="project-card" key={p.num}>
                <div className="project-thumb" style={{ background: `linear-gradient(135deg, var(--bg2), var(--surface))` }}>
                  <div className="project-thumb-inner">{p.emoji}</div>
                </div>
                <div className="project-body">
                  <div className="project-num">PROJECT {p.num}</div>
                  <div className="project-title">{p.title}</div>
                  <div className="project-desc">{p.desc}</div>
                  <div className="project-stack">
                    {p.stack.map((t) => (
                      <span className="project-tech" key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={p.github} className="project-link" target="_blank" rel="noopener noreferrer">GitHub →</a>
                    {p.live !== "#" && (
                      <a href={p.live} className="project-link" target="_blank" rel="noopener noreferrer">Live Demo →</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="contact-section">
          <div className="section-header">
            <span className="section-tag">// 04</span>
            <div className="section-line" />
          </div>
          <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>Let&apos;s Build Something</h2>
          <p className="contact-sub">
            I&apos;m actively looking for opportunities where I can<br />
            solve hard problems and build impactful software.<br />
            Let&apos;s connect!
          </p>
          <a href="mailto:asmita@example.com" className="contact-email">
            asmita@example.com
          </a>
          <div className="social-links">
            <a href="https://github.com/gasmi26" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
            <a href="https://www.linkedin.com/in/asmita-ghosh-1077b5254" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <span>© 2026 Asmita Ghosh</span>
        <span>Built with Next.js</span>
      </footer>
    </>
  );
}

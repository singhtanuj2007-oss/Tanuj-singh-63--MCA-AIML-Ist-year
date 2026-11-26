import React from "react";
import "./App.css";

function App() {
  const skills = 
  [ "HTML", 
    "CSS", 
    "JavaScript", 
    "React",
    "C++", 
    "nodejs",
    "express.js", 
    "DSA",
    "MySQL",
    "Mongodb"
   ];
  const projects = [
    {
      title: "Smart Personal Finance Tracker",
      description:
        "A web-based application that helps users manage their income and expenses, track transactions, set budgets, and view financial analytics through an interactive dashboard.",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL", "Chart.js"],
    },
    {
      title: "InAmigos Foundation Web Page ",
      description:
        "	Developed a fully responsive NGO webpage from scratch using semantic HTML5 and CSS",
      tags: ["HTML", "CSS"],
    },
  ];

  return (
    <div className="portfolio">
      <header className="header">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Vishnu Chaudhary portfolio home">
            Vishnu Chaudhary<span>.</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a className="nav-contact" href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">MCA Student &amp; Software Developer</p>
            <h1>
              Hi, I'm <span>Vishnu Chaudhary</span>
            </h1>
            <p className="hero-description">
              I build clean, responsive and user-friendly websites using modern
              web technologies.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View My Work
              </a>
              <a className="button button-secondary" href="#contact">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-mark" aria-hidden="true">
            <span>&lt;/&gt;</span>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">Know Me</p>
            <h2>About Me</h2>
          </div>
          <div className="about-card">
            <p>
              I am Vishnu Chaudhary, a passionate Software developer and MCA student at GLA
              University. I enjoy turning ideas into polished digital experiences
              and continuously improving my skills.
            </p>
            <div className="education">
              <span className="education-icon" aria-hidden="true">ED</span>
              <div>
                <strong>Education</strong>
                <p>Master of Computer Applications (MCA AIML)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">What I Use</p>
            <h2>My Skills</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <span className="skill-dot" aria-hidden="true"></span>
                <strong>{skill}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">My Work</p>
            <h2>Featured Projects</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-art" aria-hidden="true">
                  <span>PROJECT</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div>
            <p className="eyebrow">Let's Talk</p>
            <h2>Have a project in mind?</h2>
          </div>
          <div className="contact-details">
            <a href="mailto:vishnuchar61@gmail.com">
              vishnuchar61@gmail.com
            </a>
            <a href="tel:+917060343103">+91 70603 43103</a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Vishnu Chaudhary. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
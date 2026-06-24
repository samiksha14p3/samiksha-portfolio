import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  ChevronRight,
  Code2,
  Database,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  certifications,
  education,
  experience,
  navItems,
  profile,
  projects,
  skills,
  stats,
} from './data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;
      setProgress(currentProgress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      className="section-header"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
    >
      <span className="eyebrow">
        <Sparkles size={16} /> {eyebrow}
      </span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

function Navbar({ theme, onThemeToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Go to homepage">
        <span className="brand-mark">SS</span>
        <span>
          <strong>Samiksha</strong>
          <small>React Portfolio</small>
        </span>
      </a>

      <nav className={isOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={closeMenu}
            download={item.download ? 'Samiksha-Soni-Resume.pdf' : undefined}
            target={item.download ? '_blank' : undefined}
            rel={item.download ? 'noreferrer' : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button className="icon-btn" type="button" onClick={onThemeToggle} aria-label="Toggle theme">
          {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
        </button>
        <button
          className="icon-btn menu-btn"
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  const rotatingWords = useMemo(
    () => ['React UI', 'Responsive Design', 'JavaScript Logic', 'Data Validation'],
    []
  );
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % rotatingWords.length);
    }, 1800);

    return () => window.clearInterval(timer);
  }, [rotatingWords.length]);

  return (
    <section className="hero section" id="home">
      <div className="hero-grid">
        <motion.div
          className="hero-content"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.65 }}
        >
          <span className="availability-pill">
            <span className="pulse-dot" /> Available for React Developer roles
          </span>

          <h1>
            Hi, I am <span>{profile.name}</span>
            <br />I build clean <em>{rotatingWords[wordIndex]}</em>
          </h1>

          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-meta" aria-label="contact information">
            <span>
              <MapPin size={17} /> {profile.location}
            </span>
            <span>
              <Phone size={17} /> {profile.phone}
            </span>
          </div>

          <div className="hero-actions">
            <a className="primary-btn" href="#projects">
              View Projects <ArrowUpRight size={18} />
            </a>
            <a className="ghost-btn" href={`mailto:${profile.email}`}>
              Hire Me <Mail size={18} />
            </a>
            <a
              className="text-btn"
              href={profile.resumeUrl}
              download="Samiksha-Soni-Resume.pdf"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-card-wrap"
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          <div className="hero-card glass-card">
            <div className="profile-orb">
              <span>S</span>
            </div>
            <div>
              <span className="role-chip">Frontend Developer</span>
              <h3>{profile.name}</h3>
              <p>{profile.headline}</p>
            </div>

            <div className="code-preview" aria-label="Code preview">
              <div className="window-dots">
                <span /> <span /> <span />
              </div>
              <pre>{`const developer = {
  stack: ['React', 'JavaScript', 'CSS'],
  focus: 'User-friendly UI',
  strength: 'Data accuracy + debugging'
};`}</pre>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.article
            className="stat-card glass-card"
            key={stat.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <SectionHeader
        eyebrow="About"
        title="A frontend profile with real workflow understanding"
        description="Samiksha combines React training with professional experience in structured business workflows, data validation, debugging, and enterprise UI-based systems."
      />

      <div className="about-grid">
        <motion.article
          className="about-card glass-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <Code2 className="card-icon" />
          <h3>Frontend Mindset</h3>
          <p>
            Builds reusable components, responsive layouts, form screens, navigation blocks, and clean user interfaces using React, JavaScript, HTML, and CSS.
          </p>
        </motion.article>

        <motion.article
          className="about-card glass-card featured-about"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <Database className="card-icon" />
          <h3>Data Accuracy Advantage</h3>
          <p>
            Professional operations experience helps her understand real-world validation, structured inputs, data mismatch handling, and backend-connected workflows.
          </p>
          <div className="mini-flow">
            <span>Input</span>
            <ChevronRight size={16} />
            <span>Validate</span>
            <ChevronRight size={16} />
            <span>Debug</span>
            <ChevronRight size={16} />
            <span>Deliver</span>
          </div>
        </motion.article>

        <motion.article
          className="about-card glass-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <BriefcaseBusiness className="card-icon" />
          <h3>Interview Positioning</h3>
          <p>
            Suitable for React Developer, Frontend Developer, JavaScript Developer, and trainee-to-junior frontend roles focused on UI development.
          </p>
        </motion.article>
      </div>
    </section>
  );
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState(skills[0].title);
  const selectedSkill = skills.find((skill) => skill.title === activeCategory) || skills[0];

  return (
    <section className="section" id="skills">
      <SectionHeader
        eyebrow="Skills"
        title="Tech stack built for frontend interviews"
        description="Clear React fundamentals, strong layout skills, debugging approach, and SQL awareness for data-driven applications."
      />

      <div className="skills-layout">
        <motion.div
          className="skill-tabs glass-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          {skills.map((skill) => (
            <button
              key={skill.title}
              className={activeCategory === skill.title ? 'skill-tab active' : 'skill-tab'}
              type="button"
              onClick={() => setActiveCategory(skill.title)}
            >
              {skill.title}
              <ChevronRight size={17} />
            </button>
          ))}
        </motion.div>

        <motion.div
          className="skill-panel glass-card"
          key={selectedSkill.title}
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
        >
          <span className="role-chip">{selectedSkill.title}</span>
          <h3>Hands-on skills</h3>
          <div className="skill-cloud">
            {selectedSkill.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHeader
        eyebrow="Projects"
        title="Interview-ready project showcase"
        description="These project cards are written in a professional way, so recruiters can quickly understand her frontend and data-validation strengths."
      />

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card glass-card"
            key={project.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            whileHover={{ y: -8 }}
          >
            <div className="project-topline">
              <span>{project.type}</span>
              <ArrowUpRight size={18} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-row">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <ul className="project-highlights">
              {project.highlights.map((point) => (
                <li key={point}>
                  <BadgeCheck size={16} /> {point}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHeader
        eyebrow="Experience"
        title="Professional timeline"
        description="A clean journey from web development training to enterprise process operations with frontend-relevant skills."
      />

      <div className="timeline">
        {experience.map((item, index) => (
          <motion.article
            className="timeline-item glass-card"
            key={`${item.role}-${item.company}`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-header">
              <div>
                <span>{item.period}</span>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
            </div>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function EducationAndCertifications() {
  return (
    <section className="section split-section" id="education">
      <motion.div
        className="glass-card info-block"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <SectionHeader eyebrow="Education" title="Academic background" />
        <div className="education-list">
          {education.map((item) => (
            <article key={item.degree}>
              <GraduationCap size={20} />
              <div>
                <h3>{item.degree}</h3>
                <p>{item.institute}</p>
                <span>
                  {item.year} • {item.result}
                </span>
              </div>
            </article>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="glass-card info-block"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.1 }}
      >
        <SectionHeader eyebrow="Certifications" title="Extra learning" />
        <div className="cert-list">
          {certifications.map((certificate) => (
            <article key={certificate}>
              <BadgeCheck size={20} />
              <span>{certificate}</span>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <motion.div
        className="contact-card glass-card"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        <span className="eyebrow">
          <Sparkles size={16} /> Contact
        </span>
        <h2>Let’s build clean and responsive frontend experiences.</h2>
        <p>
          Looking for React Developer, Frontend Developer, JavaScript Developer, and trainee-to-junior frontend opportunities.
        </p>

        <div className="contact-actions">
          <a className="primary-btn" href={`mailto:${profile.email}`}>
            <Mail size={18} /> Email Samiksha
          </a>
          <a className="ghost-btn" href={profile.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin size={18} /> LinkedIn
          </a>
          <a className="ghost-btn" href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub size={18} /> GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function App() {
  const [theme, setTheme] = useState('dark');
  const progress = useScrollProgress();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const updatePointer = (event) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', updatePointer, { passive: true });
    return () => window.removeEventListener('pointermove', updatePointer);
  }, []);

  return (
    <main className="app-shell">
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="mouse-light" />

      <Navbar theme={theme} onThemeToggle={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <EducationAndCertifications />
      <Contact />

      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React + Vite.</p>
        <a href="#home">Back to top</a>
      </footer>
    </main>
  );
}

export default App;

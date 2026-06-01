import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <p className="section-label"> — Contact</p>
      <div className="contact-inner">
        <h2 className="section-heading">Let&apos;s work together</h2>
        <p className="contact-sub">
          I&apos;m currently open to backend engineering roles and freelance
          projects. If you have something in mind, feel free to reach out.
        </p>
        <a href="mailto:your@email.com" className="btn btn-primary contact-btn">
          gendhiramona@gmail.com
        </a>
        <div className="social-links">
          <a
            href="https://github.com/xdranel"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span className="divider">·</span>
          <a
            href="https://linkedin.com/in/gendhi-ramona-245aa5291"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span className="divider">·</span>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

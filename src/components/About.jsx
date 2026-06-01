import "./About.css";

export default function About() {
  return (
    <section id="about" className="about section">
      <p className="section-label">— About</p>
      <div className="about-grid">
        <div className="about-text">
          <h2 className="section-heading">A bit about me</h2>
          <p>
            I am a Backend Developer dedicated to building robust and scalable server-side architectures. With a strong foundation in [Primary Language, e.g., Java] and database management, I focus on creating seamless API integrations and optimizing system performance. I enjoy tackling complex logic challenges and ensuring that the "engine" behind every application runs efficiently and securely.
          </p>
        </div>
        <div className="about-info">
          <div className="info-item">
            <span className="info-label">Location</span>
            <span>Surabaya, Indonesia</span>
          </div>
          <div className="info-item">
            <span className="info-label">Focus</span>
            <span>Backend Engineering</span>
          </div>
          <div className="info-item">
            <span className="info-label">Stack</span>
            <span>Java · Spring · SQL</span>
          </div>
          {/* <div className="info-item"> */}
          {/*   <span className="info-label">Available</span> */}
          {/*   <span>Open to opportunities</span> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}

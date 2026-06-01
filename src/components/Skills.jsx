import "./Skills.css";

const groups = [
  {
    title: "Languages",
    items: ["Java", "SQL", "Bash", "Python"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["Spring Boot", "Spring Security", "Spring Cloud", "Hibernate / JPA", "Maven"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools & Infrastructure",
    items: ["Docker", "Git", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <p className="section-label">— Skills</p>
      <h2 className="section-heading">What I work with</h2>
      <div className="skills-grid">
        {groups.map((g) => (
          <div key={g.title} className="skill-group">
            <h3 className="skill-group-title">{g.title}</h3>
            <ul className="skill-list">
              {g.items.map((item) => (
                <li key={item} className="skill-tag">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

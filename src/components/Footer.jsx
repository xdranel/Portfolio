import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Gendhi Ramona Prastyo</span>
      <span className="footer-stack">Built with React + Vite</span>
    </footer>
  );
}

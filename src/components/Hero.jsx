import "./Hero.css";
import { useState, useEffect } from 'react';

const Typewriter = ({ text, delay = 120, pause = 2000 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (currentIndex < text.length) {
          setCurrentText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        if (currentIndex > 0) {
          setCurrentText(prev => prev.slice(0, -1));
          setCurrentIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
        }
      }
    };

    const timeoutSpeed = isDeleting ? delay / 2 : delay;
    const timeout = setTimeout(handleTyping, timeoutSpeed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, delay, text, pause]);

  return (
    <span className="typewriter">
      {currentText}
      <span className="cursor">_</span>
    </span>
  );
};


export default function Hero() {
  return (
    <section className="hero">
      <p className="hero-label">Hello, I&apos;m</p>
      <h1 className="hero-name"><Typewriter text={"Gendhi Ramona Prastyo"} delay={120} pause={3000} /></h1>
      <h2 className="hero-title">Backend Developer</h2>
      <p className="hero-bio">
        I build .
      </p>
      <div className="hero-cta">
        <a href="#projects" className="btn btn-primary">
          View Projects
        </a>
        <a href="#contact" className="btn btn-outline">
          Get in Touch
        </a>
      </div>
      {/* <div className="hero-scroll"> */}
      {/*   <span /> */}
      {/* </div> */}
    </section>
  );
}

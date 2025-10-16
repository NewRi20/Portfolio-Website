import './header.css'
import { useState, useEffect } from 'react'

function Header() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contacts'];
      const scrollPosition = window.scrollY + 150; // offset for header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId); // Immediately set active state
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // space for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="header">
        <h2>Wen.</h2>
        <div className="navLinks">
            <span 
              className={`about ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              About
            </span>
            <span 
              className={`skills ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </span>
            <span 
              className={`projects ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </span>
            <span 
              className={`contacts ${activeSection === 'contacts' ? 'active' : ''}`}
              onClick={() => scrollToSection('contacts')}
            >
              Contacts
            </span>
            <div className="line"></div>
            <a href="https://github.com/NewRi20" target="_blank" rel="noopener noreferrer" className="githubIcon"></a>
            <a href="https://www.linkedin.com/in/irwenfronda" target="_blank" rel="noopener noreferrer" className="linkedinIcon"></a>
        </div>
    </div>
  );
}

export default Header;

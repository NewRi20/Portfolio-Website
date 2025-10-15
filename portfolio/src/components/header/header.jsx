import './header.css'

function Header() {
  return (
    <div className="header" >
        <h2>Wen.</h2>
        <div className="navLinks">
            <span className="about">About</span>
            <span className="skills">Skills</span>
            <span className="projects">Projects</span>
            <span className="contacts">Contacts</span>
            <div className="line"></div>
            <span className="githubIcon"></span>
            <span className="linkedinIcon"></span>
        </div>
    </div>
  );
}

export default Header;

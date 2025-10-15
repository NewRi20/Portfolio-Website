import './Skills.css';

function Skills() {
  const items = [
    { icon: 'githubIcon', title: 'GitHub', desc: 'Code hosting platform' },
    { icon: 'vscodeIcon', title: 'Visual Studio Code', desc: 'Code editor' },
    { icon: 'mysqlIcon', title: 'MySQL', desc: 'Relational database' },
    { icon: 'pythonIcon', title: 'Python', desc: 'High-level language' },
    { icon: 'cPlusPlusIcon', title: 'C++', desc: 'General-purpose language' },
    { icon: 'javaIcon', title: 'Java', desc: 'Object-oriented language' },
    { icon: 'htmlIcon', title: 'HTML', desc: 'Markup for web pages' },
    { icon: 'cssIcon', title: 'CSS', desc: 'Styling for the web' },
    { icon: 'javascriptIcon', title: 'JavaScript', desc: 'Language for the web' },
    { icon: 'reactIcon', title: 'React', desc: 'UI library' },
    { icon: 'figmaIcon', title: 'Figma', desc: 'UI/UX design tool' },
  ];

  
  const loopItems = [...items, ...items];

  return (
    <>
        <h2 className="section-title">
            <span className='techStack'>Tech Stack </span>
            <span className='tools'>& Tools</span>
        </h2>
        <p className="section-description">
            Here are some of the technologies and tools I've been working with during my journey
        </p>
        <div className="skills-marquee">
            <ul className="skills-track">
                {loopItems.map((it, idx) => (
                <li className="item" key={`${it.title}-${idx}`}>
                    <div className="item-details">
                    <span className={it.icon}></span>
                    <h4 className="item-title">{it.title}</h4>
                    <p className="item-description">{it.desc}</p>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    </>
  );
}
export default Skills;
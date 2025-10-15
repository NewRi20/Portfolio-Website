import './Projects.css';

// Project Images
import ERS from './project_assets/ERS.png';
import GDG from './project_assets/GDG.png';
import Invex from './project_assets/Invex.png';
import SFC from './project_assets/syncFitConnect.png';

function Projects() {
    const projects = [
        { id: 1, src: ERS, desc: 'Modernization and Security Enhancement of the Technological University of the Philippines Enrolment and Registration System (TUP-ERS) Website' },
        { id: 2, src: GDG, desc: 'Google Developer Groups on Campus - TUP Manila Landing Page' },
        { id: 3, src: Invex, desc: 'Inventory & Pricing Management System for General Merchandise Store' },
        { id: 4, src: SFC, desc: 'SyncFit Connect - a smart fitness platform that bridges trainees and trainers in one seamless experience.' },
    ];

    return(
        <>
            <h2 className="project-title">
                <span className='project'>Project </span>
                <span className='portfolio'>Portfolio</span>
            </h2>
            <p className="project-description">
                Here are some of my projects I've been working on this academic semester
            </p>

            <div className="project-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <img src={project.src}/>
                            <p className="project-desc">{project.desc}</p>
                        </div>
                    ))}
            </div>
        </>
    );
}
export default Projects;
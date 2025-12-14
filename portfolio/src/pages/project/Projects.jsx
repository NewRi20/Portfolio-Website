import './Projects.css';
import { Navigate } from 'react-router-dom';

// Project Images
import ERS from '../../assets/project_assets/Ers_LoginPage.png';
import GDG from '../../assets/project_assets/GDG-Landing.png';
import Invex from '../../assets/project_assets/Invex-Landing.png';
import SFC from '../../assets/project_assets/syncFitConnect.png';

function Projects() {
    const projects = [
        { id: 1, src: ERS, desc: 'Modernization and Security Enhancement of the Technological University of the Philippines Enrollment and Registration System (TUP-ERS) Website', link: 'https://tup-ers-enhancement.vercel.app/' },
        { id: 2, src: GDG, desc: 'Google Developer Groups on Campus - TUP Manila Landing Page', link: 'https://gdgoctupm.com/'},
        { id: 3, src: Invex, desc: 'Inventory & Pricing Management System for General Merchandise Store', link: 'https://inv3x.vercel.app/' },
        { id: 4, src: SFC, desc: 'SyncFit Connect - a smart fitness platform that bridges trainees and trainers in one seamless experience.' },

    ];

    function goToLink(url) {
        if (url != null) {
            window.open(url, '_blank');
        }
    };

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
                        <div key={project.id} className="project-card" role='button' onClick={() => {if (project.link) goToLink(project.link)}}>
                            <img src={project.src}/>
                            <p className="project-desc">{project.desc}</p>
                        </div>
                    ))}
            </div>
        </>
    );
}
export default Projects;
import React, { useState } from 'react';
import './Projects.css';

// Project Images
import ERS from '../../assets/project_assets/Ers_LoginPage.png';
import GDG from '../../assets/project_assets/GDG-Landing.png';
import Invex from '../../assets/project_assets/Invex-Landing.png';
import SFC from '../../assets/project_assets/syncFitConnect.png';
import Voltizen from '../../assets/project_assets/Voltizen-Login.png';

function Projects() {
    const [projectModal, setProjectModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});

    const projects = [
        { id: 1, src: ERS, desc: 'Modernization and Security Enhancement of the Technological University of the Philippines Enrollment and Registration System (TUP-ERS) Website', link: 'https://tup-ers-enhancement.vercel.app/' },
        { id: 2, src: GDG, desc: 'Google Developer Groups on Campus - TUP Manila Landing Page', link: 'https://gdgoctupm.com/'},
        { id: 3, src: Invex, desc: 'Inventory & Pricing Management System for General Merchandise Store', link: 'https://inv3x.vercel.app/' },
        { id: 4, src: Voltizen, desc: 'Uniting Community & Consumption', link: 'https://voltizen.vercel.app/' },
        { id: 5, src: SFC, desc: 'SyncFit Connect - a smart fitness platform that bridges trainees and trainers in one seamless experience.' },
    ];

    function goToLink(url) {
        if (url != null) {
            window.open(url, '_blank');
        }
    };

    function handleProjectModal(project) {
        setSelectedProject(project);
        setProjectModal(true);
    }

    function handleCloseModal() {
        setProjectModal(false);
        setSelectedProject(null);
    }

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
                    <div key={project.id} className="project-card" role='button' onClick={() => handleProjectModal(project)}>
                        <img src={project.src}/>
                        <p className="project-desc">{project.desc}</p>
                    </div>
                ))}
            </div>

            {projectModal && (
                <div className="project-modal" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={handleCloseModal}>&times;</span>
                        <img src={selectedProject.src} alt="Project Preview" className="modal-image" />
                        <p className="modal-description">{selectedProject.desc}</p>
                        {selectedProject.link && (
                            <button className="modal-button" onClick={() => goToLink(selectedProject.link)}>Visit Project</button>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
export default Projects;
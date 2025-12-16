import './experience.css';

function Experience() { 
    return(
        <>
            <div className="experience-container">
                <h1>
                    <span className='My'>My </span> <span className='Experience'>Experience</span>
                </h1>


                <div className='experience-details'>
                    <div className='educationContainer'>
                        <div className='header-section'>
                            <span className="educationIcon"></span>
                            <h2>Education</h2>
                        </div>
                        <ul>
                            <li>
                                <h5>Valley High Academy</h5>
                                <p>2021 - 2023</p>
                            </li>
                            <li>
                                <h5>Technological University of the Philippines</h5>
                                <p>2023 - Present</p>
                            </li>
                        </ul>
                    </div>

                    <div className='experienceContainer'>
                        <div className='header-section'>
                            <span className="experienceIcon"></span>
                            <h2>Experience</h2>
                        </div>
                        <ul>
                            <li>
                                <h5>Google Developer Groups on Campus</h5>
                                <p>Frontend Development Lead | September 2025 - Present</p>
                            </li>
                            <li>
                                <h5>2025 UI/UX Hawk-A-Thon Participant</h5>
                                <p>Project Manager | March 2025</p>
                            </li>
                            <li>
                                <h5>2024 Hackers League Hackathon</h5>
                                <p>Developer | November 2024</p>
                            </li>
                        </ul>
                    </div>

                    <div className='certificationsContainer'>
                        <div className='header-section'>
                            <span className="certificateIcon"></span>
                            <h2>Certifications</h2>
                        </div>
                        <ul>
                            <li>
                                <h5>Meralco Power Academy: IDOL Hackathon</h5>
                                <p>Participant</p>
                            </li>
                            <li>
                                <h5>HarvardX: CS50 SQL</h5>
                                <p>CS50's Introduction to Database with SQL</p>
                            </li>
                            <li>    
                                <h5>HarvardX: CS50P</h5>
                                <p>CS50's Introduction to Programming with Python</p>
                            </li>
                            <li>
                                <h5>HarvardX: CS50x</h5>
                                <p>CS50's Introduction to Computer Science</p>
                            </li>
                            <li>
                                <h5>TON Manila Bootcamp</h5>
                                <p>Hackers League Hackathon!</p>
                            </li>
                            <li>
                                <h5>UI/UX Hawk-A-Thon: Designing the Future</h5>
                                <p>Project Manager</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experience;
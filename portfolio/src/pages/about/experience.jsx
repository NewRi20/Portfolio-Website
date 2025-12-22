import './experience.css';

function Experience() {
    const educationList = [
        {
            institution: "Valley High Academy",
            period: "2021 - 2023",
            link: "https://valleyhighacademy.edu.ph/"
        },
        {
            institution: "Technological University of the Philippines",
            period: "2023 - Present",
            link: "https://www.tup.edu.ph/"
        }
    ];

    const experienceList = [
        {
            role: "Participant",
            event: "Meralco Power Academy: IDOL Hackathon",
            date: "November 2025"
        },
        {
            role: "Frontend Development Lead",
            event: "Google Developer Groups on Campus",
            date: "September 2025 - Present"
        },
        {
            role: "Project Manager",
            event: "UI/UX Hawk-A-Thon",
            date: "March 2025"
        },
        {
            role: "Developer",
            event: "Hackers League Hackathon",
            date: "November 2024"
        }
    ];  

    const goToLink = (url) => {
        window.open(url, '_blank');
    }


    
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
                        {educationList.map((edu, index) => (
                            <div key={index} className='education-item' role='button' onClick={() => goToLink(edu.link)}>
                                <h5>{edu.institution}</h5>
                                <p>{edu.period}</p>
                            </div>
                        ))}
                    </div>

                    <div className='experienceContainer'>
                        <div className='header-section'>
                            <span className="experienceIcon"></span>
                            <h2>Experience</h2>
                        </div>
                        {experienceList.map((exp, index) => (
                            <div key={index} className='experience-item'>
                                <h5>{exp.event}</h5>
                                <p>{exp.role} | {exp.date}</p>
                            </div>
                        ))}
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
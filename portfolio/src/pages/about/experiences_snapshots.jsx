import { useState } from 'react';
import '../../css/experiences_snapshots.css';

// Certificates
import Ton from '../../assets/certification_assets/TON_certificate.jpg';
import CS50P from '../../assets/certification_assets/CS50P_Certificate.png';
import CS50x from '../../assets/certification_assets/CS50x_certificate.png';
import Hawkathon from '../../assets/certification_assets/Hawkathon_certificate.jpg';
import SQL from '../../assets/certification_assets/CS50SQL_CERTIFICATE.png';
import Meralco from '../../assets/certification_assets/Meralco_Certificate.jpg';


// Events
import TonEvent from './Events_assets/Ton.jpg';
import HawkathonEvent from './Events_assets/hawkathon.jpg';
import MeralcoHackathon from './Events_assets/MeralcoHackathon.jpg';
import Boltez5 from './Events_assets/TeamBoltez5.jpg';




function ExperiencesSnapshots() { 
    const [activeCategory, setActiveCategory] = useState('Certifications');
    const [visibleCount, setVisibleCount] = useState(4);
    const [imgDataModal, setImgDataModal] = useState(false);
    const [selectedSnapShot, setSelectedSnapShot] = useState({});    


    const imageData = {
        Certifications: [
            { id: 1, src: Ton, alt: 'TON Certificate' },
            { id: 2, src: CS50P, alt: 'CS50P Certificate', link: 'https://certificates.cs50.io/5c60a9bf-0b7a-42f6-85f7-2aa0f80d5d16.pdf?size=letter' },
            { id: 3, src: CS50x, alt: 'CS50x Certificate', link: 'https://certificates.cs50.io/fc968c5d-754a-4907-af89-a658e2c4914d.pdf?size=letter' },
            { id: 4, src: Hawkathon, alt: 'Hawkathon Certificate', link: 'https://drive.google.com/file/d/1KbNXjKpRJpdyc-nECcK9W4vBDYZDyCUf/view'},
            { id: 5, src: SQL, alt: 'SQL Certificate', link: 'https://certificates.cs50.io/5a6b7ccd-f35b-4af5-9316-b139d29ae2ee.pdf?size=letter' },
            { id: 6, src: Meralco, alt: 'Meralco Certificate', link: '' },
        ],
        Events: [
            { 
                id: 1, 
                src: TonEvent, 
                alt: 'Ton Event', 
                title: 'TON Manila Bootcamp Hackers League Hackathon',
                desc: [
                    'Working as a three-person team to create Flap It! This is a play-to-earn game with gacha and airdrop features that runs on the TON Network, a blockchain network used by the Telegram Mini App.',
                    'Utilized HTML, CSS, JS, and the Telegram SDK.',
                    'Learned some of the important mindset that a student like me must have in order to enter the industry.',
                    'Enhanced skills in web application development, teamwork, and problem-solving within a 72-hour time period.'
                ]
            },
            { 
                id: 2, 
                src: HawkathonEvent, 
                alt: 'Hawkathon Event', 
                desc: [
                    'Strategic Leadership: Served as Project Manager, orchestrating the end-to-end design workflow from initial ideation to the delivery of a high-fidelity prototype within a high-pressure sprint.',
                    'Figma Mastery: Developed advanced proficiency in Figma, utilizing collaborative design tools, component libraries, and interactive prototyping to visualize complex user journeys.',
                    'User-Centric Design: Applied core UI/UX principles to create intuitive, accessible, and aesthetically engaging interfaces focused on solving real-world user pain points.',
                    'Agile Management: Directed team efforts using agile methodologies, ensuring all project milestones were met and resources were optimized under strict competition deadlines.',
                    'Cross-Functional Synergy: Bridged the gap between creative vision and technical execution, fostering a collaborative environment to ensure a cohesive and functional final product.'
                ]
            },
            { 
                id: 3, 
                src: MeralcoHackathon, 
                alt: 'Meralco Hackathon', 
                title: 'Meralco IDOL Hackathon 2025',
                desc: [
                    'Project Voltizen: Developed an AI-powered energy audit and social mapping platform with a five-person team during this 24-hour hackathon.',
                    'Full-Stack Integration: Connected a React.js frontend with a Python Flask and YOLOv8 backend to enable image-based appliance detection, backed by Firebase for real-time data.',
                    'Core Feature: Built a real-time social map using Firebase listeners (onSnapshot) to share live consumption estimates between users while enforcing privacy settings.',
                    'Technologies Used: Integrated React, Firebase (Auth/Firestore), Python/Flask, and YOLOv8, managed geospatial data, and deployed the final build on Vercel.'
                ]
            },
            { 
                id: 4, 
                src: Boltez5, 
                alt: 'Team Boltez5', 
                title: 'Meralco IDOL Hackathon 2025',
                desc: [
                    'Project Voltizen: Developed an AI-powered energy audit and social mapping platform with a five-person team during this 24-hour hackathon.',
                    'Full-Stack Integration: Connected a React.js frontend with a Python Flask and YOLOv8 backend to enable image-based appliance detection, backed by Firebase for real-time data.',
                    'Core Feature: Built a real-time social map using Firebase listeners (onSnapshot) to share live consumption estimates between users while enforcing privacy settings.',
                    'Technologies Used: Integrated React, Firebase (Auth/Firestore), Python/Flask, and YOLOv8, managed geospatial data, and deployed the final build on Vercel.'
                ]
            },
        ],
        Presentation: [
            // none
        ]
    };

    // ToDo: Make descriptions in bullet centered format
    // ToDo: Practice Tailwind CSS for this section

    function handleOpenModal(snapshot) {
        setSelectedSnapShot(snapshot);
        setImgDataModal(true);
    };

    
    const handleCloseModal = () => {
        setImgDataModal(false);
        setSelectedSnapShot(null);
    };

    function goToLink(url) {
        if (url != null) {
            window.open(url, '_blank');
        }
    };


    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setVisibleCount(4); 
    };

    const currentImages = imageData[activeCategory].slice(0, visibleCount);

    const handleViewMore = () => {
        setVisibleCount(prevCount => prevCount + 4); 
    };

    return(
        <>
            <div className="experience-snapshots-container">
                <div className="filter-buttons">
                    <button 
                        className={`filter-button ${activeCategory === 'Certifications' ? 'active' : ''}`}
                        onClick={() => handleCategoryClick('Certifications')}
                    >
                        Certifications
                    </button>
                    <button 
                        className={`filter-button ${activeCategory === 'Events' ? 'active' : ''}`}
                        onClick={() => handleCategoryClick('Events')}
                    >
                        Events
                    </button>
                    <button 
                        className={`filter-button ${activeCategory === 'Presentation' ? 'active' : ''}`}
                        onClick={() => handleCategoryClick('Presentation')}
                    >
                        Presentation
                    </button>
                </div>
                
                <h3 className="desc">Snapshots of my journey</h3>
                
                <div className="image-grid">
                    {currentImages.map((image) => (
                        <div key={image.id} className="image-card" role='button' onClick={() => handleOpenModal(image)}>
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>

                {visibleCount < imageData[activeCategory].length && (
                    <button className="view-more-button" onClick={handleViewMore}>
                        View More
                    </button>
                )}

                {imgDataModal && (
                    <div className="project-modal" onClick={handleCloseModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <span className="close-button" onClick={handleCloseModal}>&times;</span>
                            <img src={selectedSnapShot.src} alt="Snapshot Preview" className="modal-image" />
                            
                            {selectedSnapShot.title && <h4 className="modal-title">{selectedSnapShot.title}</h4>}
                            
                            {Array.isArray(selectedSnapShot.desc) ? (
                                <ul className="modal-description-list">
                                    {selectedSnapShot.desc.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="modal-description">{selectedSnapShot.desc}</p>
                            )}

                            {selectedSnapShot.link && (
                                <button className="modal-button" onClick={() => goToLink(selectedSnapShot.link)}>Visit</button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default ExperiencesSnapshots;
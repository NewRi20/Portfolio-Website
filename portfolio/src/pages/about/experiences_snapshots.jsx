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
            { id: 1, src: TonEvent, alt: 'Ton Event', desc: "" },
            { id: 2, src: HawkathonEvent, alt: 'Hawkathon Event', desc: "" },
            { id: 3, src: MeralcoHackathon, alt: 'Meralco Hackathon', desc: "" },
            { id: 4, src: Boltez5, alt: 'Team Boltez5', desc: "" },
        ],
        Presentation: [
            // none
        ]
    };

    // Todo: Make all the imageData as modal popups instead of links and make buttons for visiting links
    // ToDo: Make description for event snapshots
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
                            <p className="modal-description">{selectedSnapShot.desc}</p>
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
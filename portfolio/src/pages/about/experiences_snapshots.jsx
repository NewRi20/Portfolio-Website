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

    const imageData = {
        Certifications: [
            { id: 1, src: Ton, alt: 'TON Certificate' },
            { id: 2, src: CS50P, alt: 'CS50P Certificate' },
            { id: 3, src: CS50x, alt: 'CS50x Certificate', link: 'https://certificates.cs50.io/fc968c5d-754a-4907-af89-a658e2c4914d.pdf?size=letter' },
            { id: 4, src: Hawkathon, alt: 'Hawkathon Certificate' },
            { id: 5, src: SQL, alt: 'SQL Certificate' },
            { id: 6, src: Meralco, alt: 'Meralco Certificate' },
        ],
        Events: [
            { id: 1, src: TonEvent, alt: 'Ton Event' },
            { id: 2, src: HawkathonEvent, alt: 'Hawkathon Event' },
            { id: 3, src: MeralcoHackathon, alt: 'Meralco Hackathon' },
            { id: 4, src: Boltez5, alt: 'Team Boltez5' },
        ],
        Presentation: [
            // none
        ]
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
                        <div key={image.id} className="image-card" role='button' onClick={() => image.link && window.open(image.link, '_blank')}>
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>

                {visibleCount < imageData[activeCategory].length && (
                    <button className="view-more-button" onClick={handleViewMore}>
                        View More
                    </button>
                )}
            </div>
        </>
    );
}

export default ExperiencesSnapshots;
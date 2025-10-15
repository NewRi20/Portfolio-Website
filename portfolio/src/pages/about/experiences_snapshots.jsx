import { useState } from 'react';
import './experiences_snapshots.css';

// Certificates
import Ton from './certification_assets/TON_certificate.jpg';
import CS50P from './certification_assets/CS50P_Certificate.png';
import CS50x from './certification_assets/CS50x_certificate.png';
import Hawkathon from './certification_assets/Hawkathon_certificate.jpg';


// Events
import TonEvent from './Events_assets/Ton.jpg';
import HawkathonEvent from './Events_assets/hawkathon.jpg';


function ExperiencesSnapshots() { 
    const [activeCategory, setActiveCategory] = useState('Certifications');

    // Sample image data - replace paths with your actual images
    const imageData = {
        Certifications: [
            { id: 1, src: Ton, alt: 'TON Certificate' },
            { id: 2, src: CS50P, alt: 'CS50P Certificate' },
            { id: 3, src: CS50x, alt: 'CS50x Certificate' },
            { id: 4, src: Hawkathon, alt: 'Hawkathon Certificate' },
        ],
        Events: [
            { id: 1, src: TonEvent, alt: 'Ton Event' },
            { id: 2, src: HawkathonEvent, alt: 'Hawkathon Event' },
        ],
        Presentation: [
            // { id: 1, src: '/path/to/pres1.jpg', alt: 'Presentation 1' },
            // { id: 2, src: '/path/to/pres2.jpg', alt: 'Presentation 2' },
            // { id: 3, src: '/path/to/pres3.jpg', alt: 'Presentation 3' },
            // { id: 4, src: '/path/to/pres4.jpg', alt: 'Presentation 4' },
        ]
    };

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
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
                
                <h3 className="desc">Snapshots of my college journey</h3>
                
                <div className="image-grid">
                    {imageData[activeCategory].map((image) => (
                        <div key={image.id} className="image-card">
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ExperiencesSnapshots;
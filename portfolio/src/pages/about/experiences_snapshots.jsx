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



function ExperiencesSnapshots() { 
    const [activeCategory, setActiveCategory] = useState('Certifications');
    const [visibleCount, setVisibleCount] = useState(4); // Initial limit

    // Sample image data - replace paths with your actual images
    const imageData = {
        Certifications: [
            { id: 1, src: Ton, alt: 'TON Certificate' },
            { id: 2, src: CS50P, alt: 'CS50P Certificate' },
            { id: 3, src: CS50x, alt: 'CS50x Certificate' },
            { id: 4, src: Hawkathon, alt: 'Hawkathon Certificate' },
            { id: 5, src: SQL, alt: 'SQL Certificate' },
            { id: 6, src: Meralco, alt: 'Meralco Certificate' },
        ],
        Events: [
            { id: 1, src: TonEvent, alt: 'Ton Event' },
            { id: 2, src: HawkathonEvent, alt: 'Hawkathon Event' },
        ],
        Presentation: [
            // none
        ]
    };

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setVisibleCount(4); // Reset to default when category changes
    };

    const currentImages = imageData[activeCategory].slice(0, visibleCount);

    const handleViewMore = () => {
        setVisibleCount(prevCount => prevCount + 4); // Show 4 more images
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
                        <div key={image.id} className="image-card">
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
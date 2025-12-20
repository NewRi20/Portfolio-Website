import { useState } from 'react';
import './content.css';
import About from "../about/about"
import meImage from './me_cropped.JPG';

function Content() {
    const [showAboutMeModal, setShowAboutMeModal] = useState(false);

    function handleAboutClick() {
        setShowAboutMeModal(true);
    }

    function handleCloseModal() {
        setShowAboutMeModal(false);
    }

    return (
        <>
           <div className='contentContainer'>
                <div className='infoContainer'>
                    <h4>Hello, my name is</h4>
                    <h1>
                        <span className='firstName'>Irwen </span>  
                        <span className='lastName'>Fronda</span>
                    </h1>
                    <h4>Aspiring Software Developer</h4>
                    <p>
                        I’m a third-year Computer Science student driven by a passion for creating impactful web experiences. 
                        I focus on solving real-world challenges and turning creative ideas into practical solutions. 
                        Every project is a step towards becoming a better developer.
                    </p>
                </div>
                <div className="pictureContainer">
                    <img src={meImage} alt='IrwenFronda' className='mePic' />
                </div>
           </div>
           <button onClick={handleAboutClick} className='aboutMeButton'>
                About Me
           </button>
        

           {showAboutMeModal && (
                <div className="about-modal-overlay" onClick={handleCloseModal}>
                    <div className="about-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="about-modal-close-button" onClick={handleCloseModal}>&times;</button>
                        <About />
                    </div>
                </div>
            )}
        </>
    );
}

export default Content;
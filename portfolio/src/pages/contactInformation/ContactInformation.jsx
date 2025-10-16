import './ContactInformation.css';

function ContactInformation() {

    return(
        <>
            <h2 className="contact-title">
                <span className='contact'>Contact </span>
                <span className='info'>Information</span>
            </h2>

            <p className="contact-description">
                I'm open to freelance opportunities and collaborations. Feel free to reach out to me through the following channels:
            </p>

            <div className="contact-container">
                <a href="mailto:frondairwen@gmail.com" className="contact-card-link">
                    <div className="contact-card">
                        <span className="gmailIcon"></span>
                        <p>frondairwen@gmail.com</p>   
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/irwenfronda/" target="_blank" rel="noopener noreferrer" className="contact-card-link">
                    <div className="contact-card">
                        <span className="linkedinIcon_card"></span>
                        <p>Irwen Fronda</p>
                    </div>
                </a>

                <a href="https://www.facebook.com/irwen.fronda.2025" target="_blank" rel="noopener noreferrer" className="contact-card-link">
                    <div className="contact-card">
                        <span className="facebookIcon"></span>
                        <p>Irwen Fronda</p>   
                    </div>
                </a>

                <a href="https://github.com/NewRi20" target="_blank" rel="noopener noreferrer" className="contact-card-link">
                    <div className="contact-card">
                        <span className="githubIcon_card"></span>
                        <p>NewRi20</p>   
                    </div>
                </a>

                <a href="https://www.instagram.com/newri_frn" target="_blank" rel="noopener noreferrer" className="contact-card-link">
                    <div className="contact-card">
                        <span className="instagramIcon"></span>
                        <p>newri_frn</p>   
                    </div>
                </a>

            </div>
        </>
    );
}

export default ContactInformation
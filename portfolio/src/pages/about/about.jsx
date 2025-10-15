import './about.css';
import HeaderPfp from './about_assets/formalPfp.jpg';
import aboutMePic from './about_assets/aboutme_cropted.JPG';

function About() {
    return(
        <>
            <div className="about-container">
                <h1>
                    <span className='About'>About </span> <span className='Me'>Me</span>
                </h1>
                <div className='content'>
                    <div className='short-bio'>
                        <div className='header-bio'>
                            <img src={HeaderPfp} alt="HeaderPic" className='Header-img'/>
                            <div className='header-title'>
                                <h4>Transforming Ideas Into Reality</h4>
                                <h5>Aspiring Web Developer | Problem Solver | Continuous Learner</h5>
                            </div>
                        </div>
                        <div className='header-content'>
                            <p>
                                I’m a third-year Computer Science student with a deep passion for web development and problem-solving. 
                                For me, coding isn’t just a skill — it’s a way to express ideas and create real-world solutions. 
                                I love the process of turning a simple concept into something functional and impactful. 
                                Whether it’s designing a clean interface or building interactive features, I enjoy bringing my vision to life through code.
                            </p>
                            <p>
                                Outside of class, I spend a lot of my free time learning new web technologies and improving my skills. 
                                I believe growth comes from consistent effort, so I make it a point to challenge myself with new projects and concepts. 
                                This mindset has shaped me into a hardworking and passionate learner who’s always eager to improve.
                            </p>
                            <p>
                                To further deepen my experience, I applied for a Frontend Development Lead position in the Google Developer Groups on Campus. 
                                I see this opportunity not just as a leadership role, but also as a way to collaborate with like-minded people, gain hands-on experience, 
                                and contribute to a community that shares the same passion for technology. 
                                My goal is to continue growing as a developer, one project at a time, while inspiring others to do the same.
                            </p>
                        </div>
                    </div>
                    <img src={aboutMePic} alt="AboutMePic" className='aboutMePic'/>
                </div>
            </div>
            
        </>
    );
}

export default About;
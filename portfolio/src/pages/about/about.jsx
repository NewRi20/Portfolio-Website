import './about.css';
import Header from '../../components/header/header';

function About() {
    return(
        <>
            <div className="about-container">
                <h1>About Me</h1>
            </div>
            <div className='content'>
                <div className='short-bio'>
                    <div className='header'>
                        <img src="" alt="HeaderPic"/>
                        <h4>Transforming Ideas Into Reality</h4>
                        <h5>Aspiring Web Developer | Problem Solver | Continuous Learner</h5>
                    </div>
                    <div className='header-content'>
                        <p>
                            
                        </p>
                    </div>
                </div>
                <img src="" alt="AboutMePic" />
            </div>
        </>
    );
}

export default About;
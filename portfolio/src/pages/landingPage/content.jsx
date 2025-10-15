import './content.css';
import meImage from './me_cropped.JPG';

function Content() {        
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
        </>
    );
}

export default Content;
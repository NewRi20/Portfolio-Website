import { useState } from 'react';
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
           <div className='flex items-center justify-center gap-[100px] mx-[35px] min-h-[calc(100vh-80px)] pt-10 px-10 pb-5 max-lg:gap-[60px] max-lg:mx-[25px] max-lg:py-[30px] max-md:flex-col-reverse max-md:gap-10 max-md:mx-5 max-md:py-5 max-sm:gap-[30px] max-sm:mx-[15px] max-sm:py-[15px] max-sm:min-h-[calc(100vh-60px)]'>
                <div className='flex flex-col items-start max-w-[700px] max-lg:max-w-[500px] max-md:max-w-full max-md:items-center max-md:text-center'>
                    <h4 className='text-[30px] font-bold mb-2.5 max-lg:text-2xl max-md:text-xl max-sm:text-[18px]'>Hello, my name is</h4>
                    <h1 className='flex flex-col text-[65px] font-bold mb-2.5 max-lg:text-[50px] max-md:text-[40px] max-md:items-center max-sm:text-[32px]'>
                        <span className='text-[var(--color-primary)]'>Irwen </span>  
                        <span className='text-[var(--color-dark)]'>Fronda</span>
                    </h1>
                    <h4 className='text-[30px] font-bold mb-[10px] max-lg:text-2xl max-md:text-xl max-sm:text-[18px]'>Aspiring Software Developer</h4>
                    <p className='text-[18px] mb-5 w-1/2 leading-normal max-lg:text-base max-lg:w-[60%] max-md:text-[15px] max-md:w-[80%] max-sm:text-sm max-sm:w-[90%]'>
                        I’m a third-year Computer Science student driven by a passion for creating impactful web experiences. 
                        I focus on solving real-world challenges and turning creative ideas into practical solutions. 
                        Every project is a step towards becoming a better developer.
                    </p>
                </div>
                <div className="pictureContainer">
                    <img src={meImage} alt='IrwenFronda' className='w-[400px] h-[400px] object-cover object-center rounded-full border-[5px] border-[var(--color-primary)] shadow-[0_4px_10px_rgba(0,0,0,0.2)] max-lg:w-[320px] max-lg:h-[320px] max-md:w-[280px] max-md:h-[280px] max-md:border-4 max-sm:w-[220px] max-sm:h-[220px] max-sm:border-[3px]' />
                </div>
           </div>
           <button onClick={handleAboutClick} className='mx-auto mb-[30px] py-3 px-[35px] bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-[25px] cursor-pointer text-base font-semibold transition-all duration-300 ease-in-out block w-fit hover:bg-[var(--color-primary)] hover:text-[var(--color-white)] hover:-translate-y-[2px] hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)]'>
                About Me
           </button>
        

           {showAboutMeModal && (
                <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[1000]" onClick={handleCloseModal}>
                    <div className="bg-white p-5 rounded-[10px] relative w-[90vw] max-h-[90vh] overflow-y-auto shadow-[0_5px_15px_rgba(0,0,0,0.3)]" onClick={(e) => e.stopPropagation()}>
                        <button className="absolute top-2.5 right-[15px] text-[30px] font-bold text-[#333] bg-none border-none cursor-pointer z-[1001] hover:text-[var(--color-primary)]" onClick={handleCloseModal}>&times;</button>
                        <About />
                    </div>
                </div>
            )}
        </>
    );
}

export default Content;
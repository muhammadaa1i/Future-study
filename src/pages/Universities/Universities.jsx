import React from 'react'
import { useEffect, useState } from 'react'
import uni from '../../images/uni.jpg'
import { TypeAnimation } from 'react-type-animation'
import Aos from 'aos'
import kent from '../../images/kent.png'
import { Link, Outlet } from 'react-router-dom'

const Universities = () => {

    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    useEffect(() => {
        const img = new Image();
        img.src = uni;
        img.onload = () => {
            setIsImageLoaded(true);
        }
    }, [])
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleScroll = (e) => {
        e.preventDefault();
        const formElement = document.getElementById("form");

        if (formElement) {
            const yOffset = -180;
            const y = formElement.getBoundingClientRect().top + window.scrollY + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <>
            <div
                className='hero w-[100vw] h-[60vh] flex justify-evenly flex-col items-center'
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${uni})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1 className='main-text w-full max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 xl:text-5xl text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>
                    <TypeAnimation
                        sequence={[
                            "Universitetlar ro'yxati",
                        ]}
                        speed={50}
                        cursor={false}
                    />
                </h1>
                <a
                    onClick={handleScroll}
                    data-aos='zoom-out-up'
                    href='#form'
                    className='text-white bg-[#004D91] w-[240px] h-12 rounded-xl flex items-center justify-center '>
                    <h4 className='text-[18px] mr-2'>Hozir murojaat qiling</h4>
                    <i className="fa-solid fa-down-long text-[18px] mt-1.5"></i>
                </a>
            </div>

            {!isImageLoaded && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
            )}

            <Link to='/kent' className='px-4'>
                <img
                    className='max-w-[350px] w-full h-full mx-auto'
                    src={kent}
                    alt="Istanbul Kent University" />
            </Link>
        </>
    )
}

export default Universities
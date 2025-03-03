import React, { useEffect, useState } from 'react'
import students from '../../images/students.jpg'
import logo from '../../images/logo.jpg'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { TypeAnimation } from "react-type-animation"

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const pathname = location.pathname;
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    useEffect(() => {
        const img = new Image();
        img.src = students;
        img.onload = () => {
            setIsImageLoaded(true);
        };
    }, []);

    return (
        <>
            <header className='header w-[100vw] h-[10vh]'>

                <nav className='nav w-[100vw] z-30 h-[10vh] bg-[#004D91] flex flex-row items-center justify-between fixed top-0 left-0 shadow-2xl overflow-hidden '>

                    <a href="/">
                        <img className='h-[10vh]' src={logo} alt="logo of company" />
                    </a>
                    <div className='flex flex-row items-center justify-between gap-4'>
                        <a className='text-white text-[16px] md:hidden' href="tel:+998 77 144 57 77">+998 77 144 57 77</a>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="menu-btn w-11 h-11 mr-4 md:hidden">
                            <i className="bars fa-solid fa-bars text-2xl text-gray-50"></i>
                        </button>
                    </div>

                    <section className='menu hidden md:block'>
                        <ul className='nav-links flex flex-row items-center text-white justify-center gap-4 mr-8'>
                            <li>
                                <Link className="no-underline text-[18px] font-normal transition-transform duration-300 hover:translate-2" to="/">Bosh sahifa</Link>
                            </li>
                            <li>
                                <Link className="no-underline text-[18px] font-normal" to="/students">O'quvchilarimiz</Link>
                            </li>
                            <li>
                                <Link className="no-underline text-[18px] font-normal" to="/universities">Universitetlar</Link>
                            </li>
                            <li>
                                <Link className="no-underline text-[18px] lg:text-xl font-normal" to="/programs">Dasturlar</Link>
                            </li>
                            <li>
                                <Link className="no-underline text-[18px] font-normal" to="/services">Xizmatlar</Link>
                            </li>
                        </ul>
                    </section>

                    <section className={`mobile-menu fixed top-0 right-0 h-full w-[50%] max-[500px]:w-[60%] max-[400px]:w-[75%] bg-gray-50 shadow-lg transform md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"} z-20 transition-transform duration-500 ease-in-out `}>
                        <div className="w-auto h-auto flex flex-row justify-between items-center p-3">
                            <button onClick={() => setIsOpen(false)} className="fa-solid fa-x text-2xl max-sm:text-lg"></button>
                        </div>
                        <ul className="flex flex-col gap-4 text-2xl mt-8 ml-8 max-w-[500px]:ml-8 max-sm:text-lg text-start">
                            <li className={`relative flex flex-row gap-2 items-center`}>
                                <Link className="text-[#004D91] no-underline" to="/" onClick={() => setIsOpen(false)}>Biz haqimizda</Link>
                                {pathname === '/' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'sm:w-[200px]' : 'w-0'} ${isOpen ? 'w-[150px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                            </li>
                            <li className={`relative flex flex-row gap-2 items-center`}>
                                <Link className="text-[#004D91] no-underline" to="/students" onClick={() => setIsOpen(false)}>O'quvchilarimiz</Link>
                                {pathname === '/students' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[150px]' : 'w-0'} ${isOpen ? 'sm:w-[200px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                            </li>
                            <li className={`relative flex flex-row gap-2 items-center`}>
                                <Link className="text-[#004D91] no-underline" to="/universities" onClick={() => setIsOpen(false)}>Universitetlar</Link>
                                {pathname === '/universities' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[150px]' : 'w-0'} ${isOpen ? 'sm:w-[200px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                            </li>
                            <li className={`relative flex flex-row gap-2 items-center`}>
                                <Link className="text-[#004D91] no-underline" to="/programs" onClick={() => setIsOpen(false)}>Dasturlar</Link>
                                {pathname === '/programs' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[150px]' : 'w-0'} ${isOpen ? 'sm:w-[200px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                            </li>
                            <li className={`relative flex flex-row gap-2 items-center`}>
                                <Link className="text-[#004D91] no-underline" to="/turkey" onClick={() => setIsOpen(false)}>Turkiya</Link>
                                {pathname === '/turkey' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[150px]' : 'w-0'} ${isOpen ? 'sm:w-[200px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                            </li>
                        </ul>
                    </section>

                </nav>

            </header>

            {!isImageLoaded && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
            )}


            <div
                className='hero w-[100vw] h-[70vh] flex justify-center items-center'
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${students})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1 className='main-text w-full max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 xl:text-5xl text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>
                    <TypeAnimation
                        sequence={[
                            "Future Study Consulting – Sizning Kelajagingizga Yo’l!",
                        ]}
                        speed={50}
                        cursor={false}
                    />
                </h1>
            </div>

            {isOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 z-10"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            <main>
                <Outlet />
            </main>

            <footer
                data-aos="zoom-in"
                className="max-w-[1536px] m-auto w-full max-sm:px-6 px-4 min-[450px]:w-[80%] md:w-full">
                <div className="footer container flex flex-col md:flex-row gap-8 justify-between items-center bg-[#043d6e] rounded-3xl m-auto my-5 h-auto text-white px-6 py-5 xl:px-12">

                    <section className="contacts w-full max-w-[300px] h-auto flex flex-col gap-5 md:items-start">
                        <div className="max-w-[225px] w-full flex flex-col gap-3 text-start max-md:m-auto">
                            <h1 className="text-lg font-medium uppercase sm:text-xl">Kontakt:</h1>
                            <div className="flex flex-col items-start gap-1">
                                <p className="text-lg font-extralight">Tel:</p>
                                <a className="text-lg font-extralight text-white no-underline" href="tel:+998958233030">+998 77 144 57 77</a>
                                <a className="text-lg font-extralight text-white no-underline" href="tel:+998955153030">+998 77 205 37 77</a>
                            </div>
                            <h1 className="text-lg font-medium uppercase sm:text-xl">Ijtimoiy tarmoqlar:</h1>
                            <a href="https://t.me/future_studyuz" className="flex items-center gap-3">
                                <i className="fa-brands fa-telegram text-3xl"></i> future study
                            </a>
                            <a href="https://www.instagram.com/future.study.uz" className="flex items-center gap-3">
                                <i className="fa-brands fa-instagram text-3xl"></i> future.study.uz
                            </a>
                            <a href="https://www.google.com/maps?q=41.349947,69.288288" className="flex items-center gap-3">
                                <i className="fa-solid fa-location-dot text-3xl"></i> Mustaqillik 88A, Darhan Business center
                            </a>
                        </div>
                    </section>

                    <section className="form max-w-[300px] w-full flex flex-col gap-3 items-center md:items-start">
                        <h1 className="text-lg font-medium uppercase sm:text-xl">Ariza qoldirish:</h1>
                        <form className="w-full max-w-[300px] flex flex-col gap-3">
                            <input required type="text" placeholder="Ismingiz" className="w-full bg-white p-2 text-black outline-none rounded-md" />
                            <input required type="text" placeholder="Familiyangiz" className="w-full bg-white p-2 text-black outline-none rounded-md" />
                            <input required type="number" placeholder="Telefon raqamingiz" className="w-full bg-white p-2 text-black outline-none rounded-md" />
                            <textarea required className="w-full h-[150px] bg-white p-2 text-black outline-none rounded-md" placeholder="Fikringiz"></textarea>
                            <button type="submit" className="w-full h-10 bg-[#1894b3] text-white rounded-lg font-medium">Yuborish</button>
                        </form>
                    </section>

                    <section className="w-full max-w-[350px] flex justify-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5162143970906!2d69.29833217520184!3d41.31938700021172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4daeb07b8cb%3A0x4c569a4f61ce0cb5!2sDarhan%20Business%20Center!5e0!3m2!1sen!2s!4v1740838627208!5m2!1sen!2s" className="w-full h-[300px] md:h-[350px] rounded-2xl border-0" loading="lazy"></iframe>
                    </section>

                </div>
            </footer>
        </>
    )
}

export default Layout
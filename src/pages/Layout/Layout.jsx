import React, { useState } from 'react'
import students from '../../images/students.jpg'
import logo from '../../images/logo.jpg'
import mask from '../../images/mask.png'
import { Link, Outlet, useLocation } from 'react-router-dom'
import union from '../../images/union.png'

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <>
            <header className='header w-full h-[80vh]'>

                <nav className='nav h-[10vh] bg-[#38449A] flex flex-row items-center justify-between'>

                    <a href="/">
                        <img className='w-[75px] h-[10vh]' src={logo} alt="logo of company" />
                    </a>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="menu-btn w-11 h-11 mr-4 sm:hidden">
                        <i className="bars fa-solid fa-bars text-2xl text-gray-50"></i>
                    </button>

                    <section className='menu hidden sm:block'>
                        <ul className='nav-links flex flex-row items-center text-white justify-center gap-4 mr-8'>
                            <li className='hidden md:block'>
                                <Link className="no-underline text-[16px] lg:text-xl font-normal" to="/">Bosh sahifa</Link>
                            </li>
                            <li>
                                <Link className="no-underline text-[16px] lg:text-xl font-normal" to="/students">O'quvchilarimiz</Link>
                            </li>
                            <li>
                                <Link className="no-underline text-[16px] lg:text-xl font-normal" to="/universities">Universitetlar</Link>
                            </li>
                            <li>
                                <Link className="no-underline text-[16px] lg:text-xl font-normal" to="/programs">Dasturlar</Link>
                            </li>
                            <li>
                                <Link className="no-underline text-[16px] lg:text-xl font-normal" to="/services">Xizmatlar</Link>
                            </li>
                        </ul>
                    </section>

                    <section className={`mobile-menu fixed top-0 right-0 h-full w-[50%] max-w-[500px]:w-[60%] max-w-[400px]:w-[70%] bg-gray-50 shadow-lg transform sm:hidden ${isOpen ? "translate-x-0" : "translate-x-full"} z-20 transition-transform duration-500 ease-in-out`}>
                        <div className="w-auto h-auto flex flex-row justify-between items-center p-3">
                            <button onClick={() => setIsOpen(false)} className="fa-solid fa-x text-2xl max-sm:text-lg"></button>
                        </div>
                        <ul className="flex flex-col gap-4 text-2xl mt-8 ml-8 max-w-[500px]:ml-8 max-sm:text-lg text-start">
                            <li className={`relative flex flex-row gap-2 items-center`}>
                                <Link className="text-[#38449A] no-underline" to="/" onClick={() => setIsOpen(false)}>Biz haqimizda</Link>
                                {pathname === '/' && (
                                    <div className={`underline absolute left-3 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[170px]' : 'w-0'} h-[2px] bg-[#38449A] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                            </li>
                            <li className={`relative flex flex-row gap-2 items-center`}>
                                <Link className="text-[#38449A] no-underline" to="/students" onClick={() => setIsOpen(false)}>O'quvchilarimiz</Link>
                                {pathname === '/students' && (
                                    <div className={`underline absolute left-3 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[170px]' : 'w-0'} h-[2px] bg-[#38449A] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                            </li>
                            <li className={`relative flex flex-row gap-2 items-center`}>
                                <Link className="text-[#38449A] no-underline" to="/universities" onClick={() => setIsOpen(false)}>Universitetlar</Link>
                                {pathname === '/universities' && (
                                    <div className={`underline absolute left-3 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[150px]' : 'w-0'} h-[2px] bg-[#38449A] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                            </li>
                            <li className={`relative flex flex-row gap-2 items-center`}>
                                <Link className="text-[#38449A] no-underline" to="/programs" onClick={() => setIsOpen(false)}>Dasturlar</Link>
                                {pathname === '/programs' && (
                                    <div className={`underline absolute left-3 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[120px]' : 'w-0'} h-[2px] bg-[#38449A] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                            </li>
                            <li className={`relative flex flex-row gap-2 items-center`}>
                                <Link className="text-[#38449A] no-underline" to="/services" onClick={() => setIsOpen(false)}>Xizmatlar</Link>
                                {pathname === '/services' && (
                                    <div className={`underline absolute left-3 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[130px]' : 'w-0'} h-[2px] bg-[#38449A] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                            </li>
                        </ul>
                    </section>

                </nav>

                <div
                    className='hero w-[100vw] h-[70vh] flex justify-center items-center'
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${students})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}>
                    <h1 className='main-text w-full max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>
                        Future Study Consulting – Sizning Kelajagingizga Yo’l!
                    </h1>
                </div>

                {isOpen && (
                    <div
                        className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 z-10"
                        onClick={() => setIsOpen(false)}
                    ></div>
                )}
            </header>

            <div className="main-content max-w-7xl w-full mx-auto px-4 py-8 text-[#38449A]">
                <section className="flex flex-col items-start max-sm:mb-[-10px]">
                    <div className="bg-[#38449A] h-[2px] max-[550px]:max-w-[120px] max-w-[150px] md:max-w-[220px] md:h-[3px] w-full rounded-lg lg:max-w-[270px]"></div>
                    <h1 className="max-[550px]:text-[16px] text-xl sm:text-xl md:text-3xl lg:text-4xl font-semibold uppercase mt-2">Biz Haqimizda</h1>
                </section>

                <div className='flex flex-row justify-between'>
                    <p className="mt-4 max-[550px]:text-[12px] max-w-[400px] max-sm:max-w-[350px] leading-relaxed font-medium md:max-w-[550px] lg:max-w-[700px] lg:text-[22px]">
                        Future Study Consulting – bu xalqaro ta’lim sohasida yetakchi kompaniyalardan biri bo‘lib, yoshlar uchun dunyoning eng nufuzli universitetlarida o‘qish imkoniyatlarini yaratishga ixtisoslashgan. Biz Turkiya va boshqa mamlakatlardagi top universitetlarga kirish jarayonida abituriyentlarga to‘liq qo‘llab-quvvatlash xizmatlarini taqdim etamiz.
                    </p>
                    <img src={mask} alt="mask photo" className='w-full h-full max-[450px]:hidden max-sm:max-w-[200px] max-[550px]:max-h-[150px] sm:max-w-[200px] md:max-w-[250px] md:max-h-[220px] md:mt-[-30px] lg:max-w-[300px] lg:max-h-[300px] lg:mt-[-50px]' />
                </div>

                <section className='bg-[#38449A] w-full h-auto py-10 px-5 rounded-2xl gap-4 m-auto mt-8 min-[350px]:w-[90%] min-[400px]:w-[80%] max-[500px]:flex max-[500px]:flex-col min-[450px]:w-full min-[450px]:grid min-[450px]:grid-cols-2 md:flex md:justify-between md:flex-row '>
                    <div className='flex flex-col items-center gap-4'>
                        <i className="fa-brands fa-searchengin text-9xl text-white "></i>
                        <h1 className='text-white text-center'>Kerakli dasturni toping</h1>
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                        <i class="fa-solid fa-building-columns text-9xl text-white "></i>
                        <h1 className='text-white text-center'>Universitetingizni tanlang</h1>
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                        <i class="fa-solid fa-file-signature text-9xl text-white ml-8"></i>
                        <h1 className='text-white text-center'>Arizangizni yuboring</h1>
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                        <i class="fa-solid fa-square-check text-9xl text-white"></i>
                        <h1 className='text-white text-center'>Va bajarildi!</h1>
                    </div>
                </section>

                <section className="flex flex-col items-start mt-8 max-sm:mb-[-10px]">
                    <div className="bg-[#38449A] h-[2px] max-[550px]:max-w-[120px] max-w-[150px] md:max-w-[220px] md:h-[3px] w-full rounded-lg lg:max-w-[320px]"></div>
                    <h1 className="max-[550px]:text-[16px] text-xl sm:text-xl md:text-3xl lg:text-4xl font-semibold uppercase mt-2">Nega Aynan Biz?</h1>
                </section>

                <section className="space-y-4 text-lg leading-relaxed">
                    <div className='flex flex-col gap-4'>
                        <span>
                            <h1 className='mt-4 max-[550px]:text-[12px] text-[16px] max-w-[400px] max-sm:max-w-[350px] leading-relaxed font-bold md:max-w-[550px] lg:max-w-[700px] lg:text-[22px]'>1. Rasmiy Hamkorlik</h1>
                            <h1 className='max-[550px]:text-[12px] text-[16px] max-w-[400px] max-sm:max-w-[350px] leading-relaxed font-medium md:max-w-[550px] lg:max-w-[700px] lg:text-[22px]'>
                                Biz Turkiyaning eng yaxshi universitetlari bilan bevosita hamkorlik qilamiz. Hamkorlarimiz qatorida Istanbul Kent University, Marmara University, Beykoz University va yana 30 dan ortiq universitetlar bor.
                            </h1>
                        </span>
                        <span>
                            <h1 className='max-[550px]:text-[12px] text-[16px] max-w-[400px] max-sm:max-w-[350px] leading-relaxed font-bold md:max-w-[550px] lg:max-w-[700px] lg:text-[22px]'>2. 100% Kafolatlangan Natija</h1>
                            <h1 className='max-[550px]:text-[12px] text-[16px] max-w-[400px] max-sm:max-w-[350px] leading-relaxed font-medium md:max-w-[550px] lg:max-w-[700px] lg:text-[22px]'>
                                Biz orqali hujjat topshirgan har bir talabaga kafolatlangan qabul beriladi.
                            </h1>
                        </span>
                        <img src={union} alt="image from university" className='w-full h-full max-[450px]:hidden max-sm:max-w-[450px] max-sm:max-h-[300px] max-[550px]:max-h-[150px] sm:max-w-[200px] md:max-w-[250px] md:max-h-[220px] md:mt-[-30px] lg:max-w-[300px] lg:max-h-[300px] lg:mt-[-50px]' />
                    </div>
                    <li>
                        <strong>3. Til Bilimi Muhim Emas</strong> <br />
                        Ingliz yoki turk tilini mukammal bilmasangiz ham, siz uchun til kurslari taklif qilamiz.
                    </li>
                    <li>
                        <strong>4. To‘liq Qo‘llab-Quvvatlash Xizmati</strong> <br />
                        Universitet tanlash, stipendiyalar, turar joy, viza va boshqa xizmatlarni taqdim etamiz.
                    </li>
                </section>

                <section className="text-center mt-8">
                    <div className="bg-[#38449A] h-1 w-full max-w-md mx-auto rounded-lg"></div>
                    <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold uppercase mt-2">O‘qish Jarayoni</h1>
                </section>

                <ol className="mt-4 space-y-4 text-lg leading-relaxed list-decimal list-inside">
                    <li>Biz bilan bog‘lanasiz – barcha kerakli ma’lumotlarni olasiz.</li>
                    <li>Hujjatlaringizni tayyorlaymiz – universitet talablariga mos ravishda.</li>
                    <li>Universitetga topshiramiz – hujjatlarni hamkor universitetlarga yuboramiz.</li>
                    <li>Qabul qilinasiz va talabalik maqomini olasiz.</li>
                    <li>Turkiyada o‘qishni boshlaysiz – to‘liq qo‘llab-quvvatlaymiz.</li>
                </ol>

                <section className="text-center mt-8">
                    <div className="bg-[#38449A] h-1 w-full max-w-md mx-auto rounded-lg"></div>
                    <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold uppercase mt-2">Bizning Maqsadimiz</h1>
                </section>

                <p className="mt-4 text-lg leading-relaxed">
                    Future Study Consulting – bu shunchaki ta’lim agentligi emas, balki sizning kelajagingizga ishonch bilan qadam qo‘yishingizga yordam beradigan yo‘lboshchingizdir.
                </p>
            </div>

            <main>
                <Outlet />
            </main>

            <footer className="max-sm:px-6">
                <div className="footer container flex flex-col md:flex-row gap-8 justify-between items-center bg-[#020C26] rounded-3xl m-auto my-5 h-auto text-white px-6 py-5">

                    <section className="contacts w-full max-w-[300px] h-auto flex flex-col gap-5 md:items-start">
                        <div className="max-w-[225px] w-full flex flex-col gap-3 text-start">
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
                        <h1 className="text-lg font-medium uppercase sm:text-xl">Ariza qoldirish</h1>
                        <form className="w-full max-w-[300px] flex flex-col gap-3">
                            <input required type="text" placeholder="Ismingiz" className="w-full bg-white p-2 text-black outline-none rounded-md" />
                            <input required type="text" placeholder="Familiyangiz" className="w-full bg-white p-2 text-black outline-none rounded-md" />
                            <input required type="number" placeholder="Telefon raqamingiz" className="w-full bg-white p-2 text-black outline-none rounded-md" />
                            <textarea required className="w-full h-[150px] bg-white p-2 text-black outline-none rounded-md" placeholder="Fikringiz"></textarea>
                            <button type="submit" className="w-full h-10 bg-[#6687d4] text-black rounded-lg font-medium">Yuborish</button>
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
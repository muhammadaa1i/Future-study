import React, { useState } from 'react'
import students from '../../images/students.jpg'
import logo from '../../images/logo.jpg'
import { Link, useLocation } from 'react-router-dom'

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
                        className="menu-btn w-11 h-11 mr-4 sm:hidden ">
                        <i className="bars fa-solid fa-bars text-2xl text-gray-50"></i>
                    </button>
                    <section className='menu sm:block hidden'>
                        <ul className='nav-links flex flex-row items-center text-white justify-center sm:flex-row gap-4 mr-8'>
                            <li className='hidden md:block'>
                                <Link className="no-underline text-[16px] lg:text-xl font-normal" to="/">Biz haqimizda</Link>
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
                    <section className={`mobile-menu fixed top-0 right-0 h-full w-[50%] max-[500px]:w-[60%] max-[400px]:w-[70%] bg-gray-50 shadow-lg transform sm:hidden ${isOpen ? "translate-x-0" : "translate-x-full"} z-20 transition-transform duration-500 ease-in-out`}>
                        <div className="w-auto h-auto flex flex-row justify-between items-center p-3">
                            <button onClick={() => setIsOpen(false)} className="fa-solid fa-x text-2xl max-sm:text-lg"></button>
                        </div>
                        <ul className="flex flex-col gap-4 text-2xl mt-8 ml-8 max-[500px]:ml-8 max-sm:text-lg text-start sm:hidden">
                            <li className={`relative flex flex-row gap-2 items-center sm:gap-3`}>
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
                    <h1 className='main-text w-full max-[400px]:max-w-[300px] max-[400px]:text-[16px] max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>
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
            <div className='main-content container mx-auto'>
                <section className='about-us max-w-72 w-full flex flex-col items-center '>
                    <span className="bg-[#38449A] w-[100%] h-1 rounded-lg mt-6 "></span>
                    <h1 className='main-text w-full max-[400px]:max-w-[300px] max-[400px]:text-[16px] max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl mt-2 text-[#38449A] uppercase font-semibold rounded-2xl'>
                        Biz Haqimizda
                    </h1>
                </section>
                <h4 className='text-[#38449A]'>Future Study Consulting – bu xalqaro ta’lim sohasida yetakchi kompaniyalardan biri bo‘lib, yoshlar uchun dunyoning eng nufuzli universitetlarida o‘qish imkoniyatlarini yaratishga ixtisoslashgan. Biz Turkiya va boshqa mamlakatlardagi top universitetlarga kirish jarayonida abituriyentlarga to‘liq qo‘llab-quvvatlash xizmatlarini taqdim etamiz.</h4>
                <br />
                <h4 className='text-[#38449A]'>Kompaniyamiz 2023-yildan buyon faoliyat yuritib kelmoqda va qisqa vaqt ichida 200 dan ortiq talabaga xorijiy universitetlarga kirishda yordam berdik. Bizning maqsadimiz – har bir talabaning orzusidagi universitetga hech qanday qiyinchiliksiz kirishiga ko‘mak berish va ularning kelajagiga mustahkam poydevor yaratishdir.</h4>
                <section className='about-us max-w-72 w-full flex flex-col items-center '>
                    <span className="bg-[#38449A] w-[100%] h-1 rounded-lg mt-6 "></span>
                    <h1 className='main-text w-full max-[400px]:max-w-[300px] max-[400px]:text-[16px] max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl mt-2 text-[#38449A] uppercase font-semibold rounded-2xl'>
                        Nega Aynan Biz?
                    </h1>
                </section>
                <h5 className='text-[#38449A] text-start'>1. Rasmiy Hamkorlik</h5>
                <br />
                <h5 className='text-[#38449A]'>Biz Turkiyaning eng yaxshi universitetlari bilan bevosita hamkorlik qilamiz. Hozirda bizning hamkorlarimiz qatorida quyidagi nufuzli oliy ta’lim muassasalari bor:
                    • Istanbul Kent University
                    • Marmara University
                    • Beykoz University
                    • Kultur University
                    • Ozyegin University
                    • Biruni University
                    • va yana 30 dan ortiq universitetlar.</h5>
                <h5 className='text-[#38449A]'>Bu esa sizga arizangizni to‘g‘ridan-to‘g‘ri universitet vakillari orqali topshirish imkonini beradi.</h5>
                <br />
                <h5 className='text-[#38449A]'>2. 100% Kafolatlangan Natija</h5>
                <br />
                <h5 className='text-[#38449A]'>Biz orqali hujjat topshirgan har bir talabaga kafolatlangan qabul beriladi. Bu degani, sizning hujjatlaringiz to‘g‘ri tayyorlanib, kerakli universitetlarga topshiriladi va siz talabalik maqomini qo‘lga kiritasiz.
                </h5>
                <br />
                <h5 className='text-[#38449A]'>3. Til Bilimi Muhim Emas</h5>
                <br />
                <h5 className='text-[#38449A]'>Agar siz hali ingliz yoki turk tillarini mukammal bilmasangiz ham, bu sizga xorijiy universitetda o‘qishga to‘sqinlik qilmaydi. Future Study Consulting sizga til kurslari taklif qiladi. Bu kurslar orqali siz o‘qish jarayonida kerak bo‘ladigan barcha asosiy til ko‘nikmalarini egallaysiz.</h5>
                <br />
                <h5 className='text-[#38449A]'>4. To‘liq Qo‘llab-Quvvatlash Xizmati</h5>
                <br />
                <h5 className='text-[#38449A]'>Biz faqat hujjat topshirish bilan cheklanib qolmay, balki quyidagi xizmatlarni ham taqdim etamiz:
                    • Universitet tanlash va hujjat topshirish
                    • Stipendiya va grantlar bo‘yicha maslahatlar
                    • Talabalar uchun turar joy topish
                    • Viza olishda yordam
                    • Turkiyaga kelganingizdan keyin moslashish bo‘yicha qo‘llab-quvvatlash.</h5>
                <h5 className='text-[#38449A]'>Bizning professional jamoamiz har bir mijozga individual yondashuv asosida xizmat ko‘rsatadi va sizning barcha ehtiyojlaringizni inobatga oladi.</h5>
                <br />
                <section className='about-us max-w-72 w-full flex flex-col items-center '>
                    <span className="bg-[#38449A] w-[100%] h-1 rounded-lg mt-6 "></span>
                    <h1 className='main-text w-full max-[400px]:max-w-[300px] max-[400px]:text-[16px] max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl mt-2 text-[#38449A] uppercase font-semibold rounded-2xl'>
                        O‘qish Jarayoni Qanday O‘tadi?
                    </h1>
                </section>
                <br />
                <h5 className='text-[#38449A]'> 1. Biz bilan bog‘lanasiz – Biz sizga barcha kerakli ma’lumotlarni beramiz va qanday universitetlar mavjudligi bo‘yicha maslahatlashamiz.
                    2. Hujjatlaringizni tayyorlaymiz – Sizdan zaruriy hujjatlarni yig‘ib, ularni universitet talablariga mos ravishda tayyorlaymiz.
                    3. Universitetga topshiramiz – Hamkor universitetlarimizga hujjatlaringizni yuboramiz va tez orada natijalarni olamiz.
                    4. Qabul qilinasiz va talabalik maqomini olasiz – Universitetdan qabul xatini olganingizdan so‘ng, sizga viza olishda yordam beramiz.
                    5. Turkiyada o‘qishni boshlaysiz – Sizni aeroportda kutib olish, turar joy topish va dastlabki kunlardagi moslashish jarayonlarida ham qo‘llab-quvvatlaymiz.</h5>
                <br />
                <section className='about-us max-w-72 w-full flex flex-col items-center '>
                    <span className="bg-[#38449A] w-[100%] h-1 rounded-lg mt-6 "></span>
                    <h1 className='main-text w-full max-[400px]:max-w-[300px] max-[400px]:text-[16px] max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl mt-2 text-[#38449A] uppercase font-semibold rounded-2xl'>
                        Bizning Maqsadimiz
                    </h1>
                </section>
                <h5 className='text-[#38449A]'>Future Study Consulting – bu shunchaki ta’lim agentligi emas, balki sizning kelajagingizga ishonch bilan qadam qo‘yishingizga yordam beradigan yo‘lboshchingizdir. Bizning asosiy maqsadimiz – o‘zbek yoshlariga chet elda sifatli ta’lim olish imkoniyatini taqdim etish va ularga dunyo bo‘ylab katta muvaffaqiyatlarga erishishlari uchun ko‘mak berishdir.</h5>
            </div>
        </>
    )
}

export default Layout
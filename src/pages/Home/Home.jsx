import React, { useEffect, useState } from 'react'
import mask from '../../images/mask.png'
import mainvid from '../../videos/mainvid.mp4'
import numbers from '../../images/numbers.jpg'
import { TypeAnimation } from "react-type-animation";
import Aos from 'aos'
import 'aos/dist/aos.css'
import poster from '../../images/poster.png'
import students from '../../images/students.jpg'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import union from '../../images/union.png'

const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    useEffect(() => {
        const img = new Image();
        img.src = students;
        img.onload = () => {
            setIsImageLoaded(true);
        }
    }, [])
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

    const handleScroll = (e) => {
        e.preventDefault();
        const formElement = document.getElementById("form");

        if (formElement) {
            const yOffset = -200;
            const y = formElement.getBoundingClientRect().top + window.scrollY + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <>
            <div
                className='hero w-full h-[85vh] flex flex-col items-center justify-evenly'
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${students})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1 className='main-text w-full max-w-[400px] text-2xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 xl:text-5xl text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>
                    <TypeAnimation
                        sequence={[
                            "Future Study Education Consulting – Sizning Kelajagingizga Yo’l!",
                        ]}
                        speed={50}
                        cursor={false}
                    />
                </h1>
                <a
                    onClick={handleScroll}
                    data-aos='zoom-out-up'
                    href='#form'
                    className='text-white bg-[#004D91] w-[240px] h-12 rounded-xl flex flex-row items-center justify-center '>
                    <h4 className='text-[18px] mr-2'>Hozir murojaat qiling</h4>
                    <i className="fa-solid fa-down-long text-[18px] mt-1.5"></i>
                </a>
            </div>

            {!isImageLoaded && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
            )}

            <div className="main-content max-w-7xl w-full px-8 m-auto text-[#004D91]">
                <section className="flex flex-col items-start mt-8 max-sm:mb-[-10px]">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] max-w-[170px] md:max-w-[220px] md:h-[3px] w-full rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl md:text-3xl font-semibold uppercase mt-2">Biz Haqimizda</h1>
                </section>

                <div className='flex max-[550px]:flex-col gap-6 flex-row justify-between'>
                    <h1
                        data-aos="fade-right"
                        className="mt-4 leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        Future Study Education Consulting – bu xalqaro ta’lim sohasida yetakchi kompaniyalardan biri bo‘lib, yoshlar uchun dunyoning eng nufuzli universitetlarida o‘qish imkoniyatlarini yaratishga ixtisoslashgan. Biz Turkiya va boshqa mamlakatlardagi top universitetlarga kirish jarayonida abituriyentlarga to‘liq qo‘llab-quvvatlash xizmatlarini taqdim etamiz.
                    </h1>
                    <video controls 
                        poster={poster}
                        data-aos="zoom-in"
                        className='w-full h-full max-[550px]:m-auto max-h-[450px] max-w-[250px] min-[550px]:mt-[-30px] mr-2 md:max-h-[350px] md:mt-[-30px] min-[900px]:max-w-[200px] rounded-2xl lg:mr-20 shadow-2xl'
                        onLoadedData={() => setIsLoading(false)}
                        src={mainvid}>
                    </video>
                </div>

                <section className="flex flex-col items-start mt-8 max-sm:mb-[-10px]">
                    <div
                        data-aos="fade-right"
                        className="bg-[#020202] h-[2px] max-w-[200px] md:max-w-[220px] md:h-[3px] w-full rounded-lg lg:max-w-[260px]"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl md:text-3xl lg:text-3xl font-semibold uppercase mt-2">Nega Aynan Biz?</h1>
                </section>

                <section className="space-y-4 text-lg leading-relaxed relative flex flex-col gap-8">
                    <div className='flex flex-col gap-4'>
                        <span>
                            <h1
                                data-aos="fade-right"
                                className='mt-6 leading-relaxed font-bold lg:text-[20px]'>1. Rasmiy Hamkorlik</h1>
                            <h1
                                data-aos="fade-right"
                                className='leading-relaxed font-medium lg:text-[20px] md:max-w-[400px] lg:max-w-[500px]'>
                                Biz Turkiyaning eng yaxshi universitetlari bilan bevosita hamkorlik qilamiz. Hamkorlarimiz qatorida Istanbul Kent University, Marmara University, Beykoz University va yana 30 dan ortiq universitetlar bor.
                            </h1>
                        </span>
                        <section className='flex flex-col gap-4'>
                            <div className='flex flex-col'>

                                <h1
                                    data-aos="fade-right"
                                    className='leading-relaxed font-bold lg:text-[20px]'>2. 100% Kafolatlangan Natija</h1>
                                <h1
                                    data-aos="fade-right"
                                    className='leading-relaxed font-medium lg:text-[20px] md:max-w-[380px] lg:max-w-[580px]'>
                                    Biz orqali hujjat topshirgan har bir talabaga kafolatlangan qabul beriladi.
                                </h1>
                            </div>
                            <img
                                data-aos="zoom-out"
                                src={union} alt="image from university"
                                className='w-full h-full m-auto max-w-[450px] max-h-[400px] md:max-w-[350px] md:max-h-[350px] md:right-6 md:mt-6 md:absolute lg:max-w-[450px] lg:max-h-[450px]'
                            />
                        </section>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <span>
                            <h1
                                data-aos="fade-right"
                                className='leading-relaxed font-bold lg:text-[20px]'>3. Til Bilimi Muhim Emas</h1>
                            <h1
                                data-aos="fade-right"
                                className='leading-relaxed font-medium lg:text-[20px] lg:max-w-[500px]'>
                                Ingliz yoki turk tilini mukammal bilmasangiz ham, siz uchun til kurslari taklif qilamiz.
                            </h1>
                        </span>
                        <span>
                            <h1
                                data-aos="fade-right"
                                className='leading-relaxed font-bold lg:text-[20px]'>4. To‘liq Qo‘llab-Quvvatlash Xizmati</h1>
                            <h1
                                data-aos="fade-right"
                                className='leading-relaxed font-medium lg:text-[20px]'>
                                Universitet tanlash, stipendiyalar, turar joy, viza va boshqa xizmatlarni taqdim etamiz.
                            </h1>
                        </span>
                    </div>
                </section>

                <section
                    className='bg-[#004D91] w-full h-auto py-10 px-5 rounded-2xl m-auto mt-8 flex flex-col gap-8 min-[320px]:w-[90%] min-[400px]:w-[80%] min-[450px]:w-full min-[450px]:grid min-[450px]:gap-8 min-[450px]:grid-cols-2 md:flex md:justify-between md:flex-row md:px-8'>
                    <a href='form'
                        onClick={handleScroll}
                        data-aos="zoom-in"
                        className='flex flex-col items-center gap-4'>
                        <i className="fa-brands fa-searchengin text-9xl text-white"></i>
                        <h1 className='text-white text-center'>Kerakli dasturni toping</h1>
                    </a>
                    <a href='form'
                        onClick={handleScroll}
                        data-aos="zoom-in"
                        className='flex flex-col items-center gap-4'>
                        <i class="fa-solid fa-building-columns text-9xl text-white "></i>
                        <h1 className='text-white text-center'>Universitetingizni tanlang</h1>
                    </a>
                    <a href='form'
                        onClick={handleScroll}
                        data-aos="zoom-in"
                        className='flex flex-col items-center gap-4'>
                        <i class="fa-solid fa-file-signature text-9xl text-white ml-8"></i>
                        <h1 className='text-white text-center'>Arizangizni yuboring</h1>
                    </a>
                    <a href='form'
                        onClick={handleScroll}
                        data-aos="zoom-in"
                        className='flex flex-col items-center gap-4'>
                        <i class="fa-solid fa-square-check text-9xl text-white"></i>
                        <h1 className='text-white text-center'>Va bajarildi!</h1>
                    </a>
                </section>

                <section className="flex flex-col items-start mt-8 max-sm:mb-[-10px]">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] max-w-[200px] md:max-w-[250px] md:h-[3px] w-full rounded-lg lg:max-w-[260px]"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl md:text-3xl lg:text-3xl font-semibold uppercase mt-2">O‘qish Jarayoni</h1>
                </section>

                <section className="flex flex-row justify-between">
                    <span className='max-sm:mt-4 mt-6'>
                        <h1
                            data-aos="fade-right"
                            className='leading-relaxed font-bold lg:text-[20px]'>Biz bilan bog‘lanasiz – barcha kerakli ma’lumotlarni olasiz.</h1>
                        <h1
                            data-aos="fade-right"
                            className='leading-relaxed font-medium lg:text-[20px]'>Hujjatlaringizni tayyorlaymiz – universitet talablariga mos ravishda.</h1>
                        <h1
                            data-aos="fade-right"
                            className='leading-relaxed font-medium lg:text-[20px]'>Universitetga topshiramiz – hujjatlarni hamkor universitetlarga yuboramiz.</h1>
                        <h1
                            data-aos="fade-right"
                            className='leading-relaxed font-medium lg:text-[20px]'>Qabul qilinasiz va talabalik maqomini olasiz.</h1>
                        <h1
                            data-aos="fade-right"
                            className='leading-relaxed font-medium lg:text-[20px]'>Turkiyada o‘qishni boshlaysiz – to‘liq qo‘llab-quvvatlaymiz.</h1>
                    </span>
                    <img
                        data-aos="zoom-out"
                        src={mask}
                        alt="mask photo"
                        className='w-full h-full max-[550px]:hidden max-[550px]:max-h-[150px] min-[550px]:max-w-[230px] min-[550px]:mt-[-30px] md:max-h-[220px] md:mt-[-30px] lg:max-w-[300px] lg:max-h-[300px] lg:mt-[-50px]' />
                </section>

                <section
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${numbers})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                    className='w-[70vw] h-[60vh] max-[390px]:h-[50vh] max-[450px]:h-[40vh] m-auto mt-8 text-white text-center pt-6 flex flex-col rounded-4xl px-2 min-[450px]:h-[50vh] sm:h-[40vh] min-[450px]:pt-10'>
                    <h2
                        data-aos="zoom-in"
                        className='font-medium text-xl max-[450px]:text-[14px] md:mt-4'>
                        Chet elda ta'lim dasturlari bilan
                    </h2>
                    <h1
                        data-aos="zoom-in"
                        className='text-4xl font-medium max-[450px]:text-3xl'>
                        Sizni dunyo bilan bog'laydi!
                    </h1>
                    <div
                        ref={ref}
                        data-aos="zoom-in"
                        className="flex flex-col mt-6 justify-center gap-2 min-[450px]:flex-row min-[450px]:justify-evenly min-[450px]:pl-5 sm:mt-10 min-[450px]:mt-12">

                        <span className="flex flex-col">
                            <h3 className="text-2xl font-semibold sm:text-3xl">
                                {inView && (
                                    <CountUp end={250} suffix="+" duration={1} delay={0.5} />
                                )}
                            </h3>
                            <p className="text-[12px] mr-3 sm:text-[16px]">Talaba</p>
                        </span>

                        <span>
                            <h3 className="text-2xl font-semibold sm:text-3xl">
                                {inView && (
                                    <CountUp end={6} suffix="+" duration={2} delay={0.5} />
                                )}
                            </h3>
                            <p className="text-[12px] sm:text-[16px]">Tajriba</p>
                        </span>

                        <span>
                            <h3 className="text-2xl font-semibold sm:text-3xl">
                                {inView && (
                                    <CountUp end={23} suffix="+" duration={2} delay={0.5} />
                                )}
                            </h3>
                            <p className="text-[12px] sm:text-[16px]">Ta'lim muassasalari</p>
                        </span>
                    </div>
                </section>

                <section className="flex flex-col items-start mt-8 max-sm:mb-[-10px]">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] max-w-[250px] md:max-w-[300px] md:h-[3px] w-full rounded-lg lg:max-w-[310px]"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl md:text-3xl lg:text-3xl font-semibold uppercase mt-2">Bizning Maqsadimiz</h1>
                </section>

                <h1
                    data-aos="fade-right"
                    className='leading-relaxed font-medium lg:text-[20px] mt-4'>
                    Future Study Education Consulting – bu shunchaki ta’lim agentligi emas, balki sizning kelajagingizga ishonch bilan qadam qo‘yishingizga yordam beradigan yo‘lboshchingizdir.
                </h1>
            </div>
        </>
    )
}

export default Home
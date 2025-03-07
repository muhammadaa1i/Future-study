import React, { useEffect, useState } from 'react'
import kentbg from '../../images/kentbg.jpg'
import { TypeAnimation } from 'react-type-animation'
import Aos from 'aos'
import kentvid1 from '../../videos/kentvid1.mp4'
import poster2 from '../../images/poster2.png'
import kentvid2 from '../../videos/kentvid2.mp4'
import poster3 from '../../images/poster3.png'
import kentvid3 from '../../videos/kentvid3.mp4'
import poster4 from '../../images/poster4.png'

const Kent = () => {

    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    useEffect(() => {
        const img = new Image();
        img.src = kentbg;
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
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div
                className='hero w-[100vw] h-[60vh] flex justify-evenly flex-col items-center'
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${kentbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1 className='main-text w-full max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 xl:text-5xl text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>
                    <TypeAnimation
                        sequence={[
                            "Istanbul Kent universiteti",
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

            <section className='w-[90%] m-auto h-auto bg-[#004D91] mt-4 rounded-2xl text-white grid grid-cols-2 gap-2 p-4 max-[350px]:flex max-[350px]:flex-col max-[350px]:gap-3 min-[500px]:grid-cols-3 min-[500px]:gap-4'>
                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i class="fa-solid fa-graduation-cap text-3xl"></i>
                    <p>7595</p>
                    <h2 className='mt-[-6px] text-center'>Talabalar soni</h2>
                </span>

                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i class="fa-solid fa-house text-3xl"></i>
                    <p>2</p>
                    <h2 className='mt-[-6px] text-center'>Kampuslar soni</h2>
                </span>

                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i class="fa-solid fa-building-columns text-3xl"></i>
                    <p>6</p>
                    <h2 className='mt-[-6px] text-center'>Fakultet soni</h2>
                </span>

                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i class="fa-solid fa-book text-3xl"></i>
                    <p>30</p>
                    <h2 className='mt-[-6px] text-center'>Bakalavr dasturlari soni</h2>
                </span>

                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i class="fa-solid fa-building text-3xl"></i>
                    <p>18</p>
                    <h2 className='mt-[-6px] text-center'>Magistratura dasturlari soni</h2>
                </span>

                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i class="fa-solid fa-leaf text-3xl"></i>
                    <p>18</p>
                    <h2 className='mt-[-6px] text-center'>PhD dasturlari soni</h2>
                </span>
            </section>

            <div className="main-content max-w-7xl w-full px-8 m-auto text-[#004D91]">

                <section className="flex flex-col items-start mt-8 max-sm:mb-[-10px]">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">Istanbul Kent University – Zamonaviy Ta’lim Maskani</h1>
                </section>

                <section className='flex max-[550px]:flex-col gap-6 flex-row justify-between'>
                    <h1
                        data-aos="fade-right"
                        className="mt-4 leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Istanbul Kent University</strong> – bu Turkiyaning eng zamonaviy va innovatsion oliy ta’lim muassasalaridan biri bo‘lib, 2016-yilda tashkil etilgan. Universitet Istanbulning markazida, Taksim hududida joylashgan bo‘lib, xalqaro talabalarga yuqori sifatli ta’lim va zamonaviy o‘quv muhitini taqdim etadi.

                        O‘qitish jarayonida amaliyot va nazariyaning uyg‘unligi, zamonaviy texnologiyalardan foydalanish va xalqaro standartlarga asoslangan ta’lim tizimi universitetning asosiy ustunliklaridan biridir. Istanbul Kent University talabalariga kasbiy rivojlanish, tadqiqot va innovatsiyalar bilan shug‘ullanish imkoniyatlarini taqdim etadi.
                    </h1>
                    <video controls
                        poster={poster2}
                        data-aos="zoom-in"
                        className='w-full h-full max-[550px]:m-auto max-h-[450px] max-w-[250px] min-[550px]:mt-[50px] mr-2 md:max-h-[350px] min-[900px]:max-w-[200px] rounded-2xl lg:mr-20 shadow-2xl'
                        onLoadedData={() => setIsLoading(false)}
                        src={kentvid1}>
                    </video>
                </section>

                <section className="flex flex-col mt-8 max-sm:mb-[-10px]">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">Nega Istanbul Kent University?</h1>
                </section>

                <section className='flex max-[550px]:flex-col gap-6 flex-row justify-between'>
                    <span
                        data-aos="fade-right"
                        className="mt-4 leading-relaxed flex flex-col gap-3 font-medium lg:max-w-[700px] lg:text-[20px]">
                        <h1 className='font-bold'>
                            1. Istanbulning Markazida Joylashgan
                        </h1>

                        <h1 className='mt-[-8px]'>
                            Universitet Taksim hududida joylashgan bo‘lib, shahar transporti va infratuzilmasiga juda yaqin. Bu esa talabalarga Istanbulning boy madaniyati, biznes markazlari va yirik korxonalar bilan tanishish imkoniyatini yaratadi.
                        </h1>

                        <h1 className='font-bold'>
                            2. Zamonaviy O‘quv Muassasasi
                        </h1>

                        <h1 className='mt-[-8px]'>
                            Istanbul Kent University o‘zining zamonaviy laboratoriyalari, ilmiy tadqiqot markazlari va eng so‘nggi texnologiyalar bilan jihozlangan auditoriyalari bilan ajralib turadi. Talabalar nafaqat nazariy bilim, balki real loyihalar ustida ishlash imkoniyatiga ham ega.
                        </h1>

                        <h1 className='font-bold'>
                            3. Amaliy Ta’lim va Stajirovka
                        </h1>

                        <h1 className='mt-[-8px]'>
                            Universitet yirik kompaniyalar va xalqaro tashkilotlar bilan hamkorlik qiladi, bu esa talabalar uchun o‘qish davomida amaliyot o‘tash va tajriba orttirish imkonini beradi. Shuningdek, talabalar xalqaro almashinuv dasturlarida ham ishtirok etishlari mumkin.
                        </h1>

                        <h1 className='font-bold'>
                            4. Xalqaro Talabalar Uchun Quvonarli Muvofiqlik
                        </h1>

                        <h1 className='mt-[-8px]'>
                            Istanbul Kent University dunyoning turli davlatlaridan kelgan talabalar uchun qulay shart-sharoitlar va moslashish jarayonini yengillashtiradigan maxsus xizmatlarni taqdim etadi. Universitetda ingliz va turk tillarida ta’lim olish imkoniyati mavjud.
                        </h1>

                        <h1 className='font-bold'>
                            5. O‘quv To‘lovlari va Stipendiyalar
                        </h1>

                        <h1 className='mt-[-8px]'>
                            Universitet xorijiy talabalar uchun maxsus chegirmalar va stipendiyalar taqdim etadi. Bizning Future Study Consulting orqali hujjat topshirsangiz, maxsus chegirma asosida o‘qishga qabul qilinasiz.
                        </h1>
                    </span>

                    <video controls
                        poster={poster3}
                        data-aos="zoom-in"
                        className='w-full h-full max-[550px]:m-auto max-h-[450px] max-w-[250px] min-[550px]:mt-[50px] mr-2 md:max-h-[350px] min-[900px]:max-w-[200px] rounded-2xl lg:mr-20 shadow-2xl'
                        onLoadedData={() => setIsLoading(false)}
                        src={kentvid2}>
                    </video>

                </section>

                <section className="flex flex-col mt-8 max-sm:mb-[-10px]">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">Yo‘nalishlar va Fakultetlar</h1>
                </section>

                <section className='flex max-[550px]:flex-col gap-6 flex-row justify-between'>
                    <span
                        data-aos="fade-right"
                        className="mt-4 leading-relaxed flex flex-col gap-3 font-medium lg:max-w-[700px] lg:text-[20px]">

                        <h1 className='font-bold text-center'>
                            Istanbul Kent University bakalavriat va magistratura bosqichlarida turli xil yo‘nalishlarni taklif etadi. Quyida universitetning eng mashhur yo‘nalishlari bilan tanishishingiz mumkin:
                        </h1>

                        <span className='specify w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl p-4 mb-3'>
                            <h1 className='font-bold mb-2 text-center'>
                                Bakalavriat Yo‘nalishlari
                            </h1>

                            <span className='flex flex-col gap-5 min-[500px]:grid min-[500px]:grid-cols-2 min-[500px]:gap-6'>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        Tibbiyot va Sog‘liqni Saqlash:
                                    </h1>
                                    <h1>
                                        • Stomatologiya
                                    </h1>
                                    <h1>
                                        • Hamshiralik ishi
                                    </h1>
                                    <h1>
                                        • Jismoniy terapiya va reabilitatsiya
                                    </h1>
                                    <h1>
                                        • Radiologiya texnologiyalari
                                    </h1>
                                    <h1>
                                        • Anesteziya
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        Biznes va Menejment:
                                    </h1>
                                    <h1>
                                        • Xalqaro biznes va savdo
                                    </h1>
                                    <h1>
                                        • Menejment
                                    </h1>
                                    <h1>
                                        • Turizm va mehmonxona boshqaruvi
                                    </h1>
                                    <h1>
                                        • Marketing
                                    </h1>
                                    <h1>
                                        • Anesteziya
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        Muhandislik va IT:
                                    </h1>
                                    <h1>
                                        • Kompyuter muhandisligi
                                    </h1>
                                    <h1>
                                        • Dasturiy injiniring
                                    </h1>
                                    <h1>
                                        • Sun’iy intellekt va ma’lumotlar tahlili
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        Ijtimoiy va Gumanitar Fanlar:
                                    </h1>
                                    <h1>
                                        • Psixologiya
                                    </h1>
                                    <h1>
                                        • Jurnalistika va ommaviy kommunikatsiya
                                    </h1>
                                    <h1>
                                        • Ingliz filologiyasi
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        Magistratura Yo‘nalishlari:
                                    </h1>
                                    <h1>
                                        • Biznes boshqaruvi (MBA)
                                    </h1>
                                    <h1>
                                        • Xalqaro munosabatlar
                                    </h1>
                                    <h1>
                                        • Sun’iy intellekt va IT-menejment
                                    </h1>
                                    <h1>
                                        • Turizm boshqaruvi
                                    </h1>
                                    <h1>
                                        • Sog‘liqni saqlash menejmenti
                                    </h1>
                                </span>

                            </span>

                        </span>

                        <video controls
                            poster={poster4}
                            data-aos="zoom-in"
                            className='w-full h-full max-[550px]:m-auto max-h-[450px] max-w-[250px] min-[550px]:mt-[50px] mr-2 md:max-h-[350px] min-[900px]:max-w-[200px] rounded-2xl lg:mr-20 shadow-2xl'
                            onLoadedData={() => setIsLoading(false)}
                            src={kentvid3}>
                        </video>

                        <span
                            data-aos="zoom-in"
                            className='specify2 w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl mt-4 p-4 mb-3'>
                            <h1 className='font-bold text-center'>
                                Talabalar Uchun Yashash Sharoitlari
                            </h1>

                            <span className='flex flex-col gap-5'>

                                <span className='mt-[-8px]'>
                                    <h1 className='font-bold mb-3'>
                                        Istanbul Kent University talabalariga turar joy topishda yordam beradi. Universitet yaqinida joylashgan yotoqxonalardan foydalanish yoki shaharda kvartira ijaraga olish imkoniyatlari mavjud.
                                    </h1>
                                    <h1 className='font-bold'>
                                        Turar joy turlari:
                                    </h1>
                                    <h1>
                                        • Universitet yotoqxonasi – qulay va xavfsiz muhit
                                    </h1>
                                    <h1>
                                        • Ijaraga beriladigan kvartiralar – shaxsiy hayotni saqlash imkoniyati
                                    </h1>
                                    <h1>
                                        • Xususiy yotoqxonalar – shaxsiy xonalar va qulay sharoitlar
                                    </h1>
                                </span>

                                <span className='mt-[-8px]'>
                                    <h1 className='font-bold mb-3'>
                                        Hujjat Topsirish Jarayoni
                                    </h1>
                                    <h1 className='font-bold mb-3'>
                                        Agar siz Istanbul Kent University-ga o‘qishga kirishni istasangiz, Future Study Consulting sizga bu jarayonda yordam beradi!
                                    </h1>
                                    <h1 className='font-bold mb-3'>
                                        Hujjatlar ro‘yxati:
                                    </h1>
                                    <h1>
                                        • Pasport nusxasi
                                    </h1>
                                    <h1>
                                        • Diplom yoki attestat
                                    </h1>
                                    <h1>
                                        • Baholar varaqasi (transkript)
                                    </h1>
                                    <h1>
                                        • Maktab yoki Universitetni bitirmagan boʻlsangiz malumotnoma kerak boladi
                                    </h1>
                                </span>

                                <span className='mt-[-8px]'>
                                    <h1 className='font-bold mb-3'>
                                        Qabul qilish bosqichlari:
                                    </h1>
                                    <h1>
                                        • Biz bilan bog‘laning va universitet bo‘yicha maslahat oling
                                    </h1>
                                    <h1>
                                        • Hujjatlaringizni tayyorlang va bizga yuboring
                                    </h1>
                                    <h1>
                                        • Universitetga ariza topshiramiz
                                    </h1>
                                    <h1>
                                        • Qabul natijalari e’lon qilinadi
                                    </h1>
                                    <h1>
                                        • Viza jarayonida yordam olasiz
                                    </h1>
                                    <h1>
                                        • Istanbulga jo‘nab ketasiz va transfer xizmqtimiz ham mavjud
                                    </h1>
                                </span>

                            </span>

                        </span>

                        <span
                            data-aos="zoom-in"
                            className='specify2 w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl mt-4 p-4 mb-3'>
                            <h1 className='font-bold text-center'>
                                Istanbul Kent Universitetiga «FUTURE STUDY» orqali kirish MUTLOQO BEPUL VA IMTIHONSIZ, faqatgina xohlagan bitta yo'nalish tanlab va hujjatingizni bizga yuborishingiz kerak bo’ladi!
                            </h1>

                            <span className='flex flex-col gap-5'>

                                <span className='mt-[-8px]'>
                                    <h1 className='mb-3'>
                                        O'qishga kirganligiz haqida qabul xat esa 24-48soat ichida chiqadi. Qabul xat chiqishi bilan 5-7 kun ichida 1 yillik kontrakt to'lovingizni (50% yarim) kontrakt to'lovini bank orqali universitet xisobiga amalga oshirishingiz kerak bo'ladi.
                                    </h1>
                                    <h1>
                                        Shoshiling joylar soni cheklangan. Qabullar tez orada tugaydi.
                                    </h1>
                                    <h1>
                                        BIZDA BARCHA XIZMATLAR BEPUL!
                                    </h1>
                                    <h1 className=''>
                                        «FUTURE STUDY» bilan 2025 yilda Turkiya Universitetlarida hech qanday imtihonsiz va ortiqcha firma to’lovlarsiz talaba bo’ling!
                                    </h1>
                                </span>

                            </span>

                        </span>


                    </span>

                </section>

            </div>
        </>
    )
}

export default Kent
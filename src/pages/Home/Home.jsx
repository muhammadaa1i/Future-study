import React from 'react'
import union from '../../images/union.png'
import mask from '../../images/mask.png'
import mainvid from '../../videos/mainvid.mp4'

const Home = () => {
    return (
        <div className="main-content max-w-7xl w-full mx-auto px-4 py-8 text-[#38449A]">
            <section className="flex flex-col items-start max-sm:mb-[-10px]">
                <div className="bg-[#38449A] h-[2px] max-w-[170px] md:max-w-[220px] md:h-[3px] w-full rounded-lg"></div>
                <h1 className="text-2xl md:text-3xl font-semibold uppercase mt-2">Biz Haqimizda</h1>
            </section>

            <div className='flex max-[550px]:flex-col gap-6 flex-row justify-between'>
                <h1 className="mt-4 max-sm::max-w-[350px] leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                    Future Study Consulting – bu xalqaro ta’lim sohasida yetakchi kompaniyalardan biri bo‘lib, yoshlar uchun dunyoning eng nufuzli universitetlarida o‘qish imkoniyatlarini yaratishga ixtisoslashgan. Biz Turkiya va boshqa mamlakatlardagi top universitetlarga kirish jarayonida abituriyentlarga to‘liq qo‘llab-quvvatlash xizmatlarini taqdim etamiz.
                </h1>
                <video controls className='w-full h-full max-[550px]:m-auto max-h-[450px] max-w-[250px] min-[550px]:mt-[-30px] mr-2 md:max-h-[350px] md:mt-[-30px] min-[900px]:max-w-[200px] rounded-2xl lg:mr-20' src={mainvid}></video>
            </div>

            <section className="flex flex-col items-start mt-8 max-sm:mb-[-10px]">
                <div className="bg-[#38449A] h-[2px] max-w-[200px] md:max-w-[220px] md:h-[3px] w-full rounded-lg lg:max-w-[260px]"></div>
                <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold uppercase mt-2">Nega Aynan Biz?</h1>
            </section>

            <section className="space-y-4 text-lg leading-relaxed relative flex flex-col gap-8">
                <div className='flex flex-col gap-4'>
                    <span>
                        <h1 className='mt-6 leading-relaxed font-bold lg:text-[20px]'>1. Rasmiy Hamkorlik</h1>
                        <h1 className='leading-relaxed font-medium lg:text-[20px] md:max-w-[400px] lg:max-w-[500px]'>
                            Biz Turkiyaning eng yaxshi universitetlari bilan bevosita hamkorlik qilamiz. Hamkorlarimiz qatorida Istanbul Kent University, Marmara University, Beykoz University va yana 30 dan ortiq universitetlar bor.
                        </h1>
                    </span>
                    <span>
                        <h1 className='leading-relaxed font-bold lg:text-[20px]'>2. 100% Kafolatlangan Natija</h1>
                        <h1 className='leading-relaxed font-medium lg:text-[20px] md:max-w-[380px] lg:max-w-[580px]'>
                            Biz orqali hujjat topshirgan har bir talabaga kafolatlangan qabul beriladi.
                        </h1>
                    </span>
                    <img src={union} alt="image from university" className='w-full h-full m-auto max-w-[450px] max-h-[400px] md:max-w-[350px] md:max-h-[350px] md:right-6 md:mt-6 md:absolute lg:max-w-[450px] lg:max-h-[450px]' />
                </div>
                <div className='flex flex-col gap-4'>
                    <span>
                        <h1 className='leading-relaxed font-bold lg:text-[20px]'>3. Til Bilimi Muhim Emas</h1>
                        <h1 className='leading-relaxed font-medium lg:text-[20px] lg:max-w-[500px]'>
                            Ingliz yoki turk tilini mukammal bilmasangiz ham, siz uchun til kurslari taklif qilamiz.
                        </h1>
                    </span>
                    <span>
                        <h1 className='leading-relaxed font-bold lg:text-[20px]'>4. To‘liq Qo‘llab-Quvvatlash Xizmati</h1>
                        <h1 className='leading-relaxed font-medium lg:text-[20px]'>
                            Universitet tanlash, stipendiyalar, turar joy, viza va boshqa xizmatlarni taqdim etamiz.
                        </h1>
                    </span>
                </div>
            </section>

            <section className='bg-[#38449A] w-full h-auto py-10 px-5 rounded-2xl m-auto mt-8 flex flex-col gap-8 min-[320px]:w-[90%] min-[400px]:w-[80%] min-[450px]:w-full min-[450px]:grid min-[450px]:gap-8 min-[450px]:grid-cols-2 md:flex md:justify-between md:flex-row md:px-8'>
                <div className='flex flex-col items-center gap-4'>
                    <i className="fa-brands fa-searchengin text-9xl text-white"></i>
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
                <div className="bg-[#38449A] h-[2px] max-w-[200px] md:max-w-[250px] md:h-[3px] w-full rounded-lg lg:max-w-[260px]"></div>
                <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold uppercase mt-2">O‘qish Jarayoni</h1>
            </section>

            <section className="flex flex-row justify-between">
                <span className='max-sm:mt-4 mt-6'>
                    <h1 className='leading-relaxed font-bold lg:text-[20px]'>Biz bilan bog‘lanasiz – barcha kerakli ma’lumotlarni olasiz.</h1>
                    <h1 className='leading-relaxed font-medium lg:text-[20px]'>Hujjatlaringizni tayyorlaymiz – universitet talablariga mos ravishda.</h1>
                    <h1 className='leading-relaxed font-medium lg:text-[20px]'>Universitetga topshiramiz – hujjatlarni hamkor universitetlarga yuboramiz.</h1>
                    <h1 className='leading-relaxed font-medium lg:text-[20px]'>Qabul qilinasiz va talabalik maqomini olasiz.</h1>
                    <h1 className='leading-relaxed font-medium lg:text-[20px]'>Turkiyada o‘qishni boshlaysiz – to‘liq qo‘llab-quvvatlaymiz.</h1>
                </span>
                <img src={mask} alt="mask photo" className='w-full h-full max-[550px]:hidden max-[550px]:max-h-[150px] min-[550px]:max-w-[230px] min-[550px]:mt-[-30px] md:max-h-[220px] md:mt-[-30px] lg:max-w-[300px] lg:max-h-[300px] lg:mt-[-50px]' />
            </section>

            <section className="flex flex-col items-start mt-8 max-sm:mb-[-10px]">
                <div className="bg-[#38449A] h-[2px] max-w-[250px] md:max-w-[300px] md:h-[3px] w-full rounded-lg lg:max-w-[310px]"></div>
                <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold uppercase mt-2">Bizning Maqsadimiz</h1>
            </section>

            <h1 className='leading-relaxed font-medium lg:text-[20px] mt-4'>
                Future Study Consulting – bu shunchaki ta’lim agentligi emas, balki sizning kelajagingizga ishonch bilan qadam qo‘yishingizga yordam beradigan yo‘lboshchingizdir.
            </h1>
        </div>
    )
}

export default Home
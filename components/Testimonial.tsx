import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default function Testimonial() {
    return (
        <>
            <div className="md:hidden px-10">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="md:p-4 lg:p-10 flex justify-center flex-col gap-10">
                            <div className="flex justify-start items-center gap-5">
                                <div className="rounded-full w-[60px] h-[60px]">
                                    <img src="https://avatars.githubusercontent.com/u/105434198?v=4" alt="" width={'100%'} height={'100%'} />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold font-sora">Sophia Ameh</p>
                                    <p className="text-gray-500 text-base">Frontend developer</p>
                                </div>
                            </div>

                            <div className="text-left text-[15px]">
                                <p> I have worked with Charlinto as a colleague, he is a very detailed individual who is diligent about their work and super hardworking.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:p-4 lg:p-10  flex justify-center flex-col gap-10">
                            <div className="flex justify-start items-center gap-5">
                                <div className="rounded-full w-[60px] h-[60px]">
                                    <img src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682548234/WhatsApp_Image_2023-04-26_at_23.27.18_hpwwzz.jpg" alt="" width={'100%'} height={'100%'} />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold font-sora">Anigbogu Chioma </p>
                                    <p className="text-gray-500 text-base">Co-Developer </p>
                                </div>
                            </div>

                            <div className="text-left text-[15px]">
                                <p>Charlinto you are really good at what you do and in a short time you have been able to amass so much knowledge and that is impressive. I love your attention to detail and how you pull off complex designs with ease.
                                    Well done I enjoyed working with you 👍.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:p-4 lg:p-10  flex justify-center flex-col gap-10">
                            <div className="flex justify-start items-center gap-5">
                                <div className="rounded-full w-[60px] h-[60px]">
                                    <img src="https://avatars.githubusercontent.com/u/100404175?v=4" alt="" width={'100%'} height={'100%'} />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold font-sora">Marvelous Molokwu</p>
                                    <p className="text-gray-500 text-base">Intern: nHub Foundation</p>
                                </div>
                            </div>

                            <div className="text-left text-[15px]">
                                <p> I started my tech journey in September 2022. It wasn&apos;t easy but I was lucky to have Charlinto there because he wasn&apos;t only a friend but also a teacher. He is a really talented programmer and knows what he is doing.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:p-4 lg:p-10  flex justify-center flex-col gap-10">
                            <div className="flex justify-start items-center gap-5">
                                <div className="rounded-full w-[60px] h-[60px]">
                                    <img src="https://avatars.githubusercontent.com/u/112015287?v=4" alt="" width={'100%'} height={'100%'} />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold font-sora">Chiamaka Maduike</p>
                                    <p className="text-gray-500 text-base">Frontend Developer</p>
                                </div>
                            </div>

                            <div className="text-left text-[15px]">
                                <p>You are determined and you definitely understand what you do. You have taught me a couple of times and without doubt, I was able to understand, that only shows that you are good at what you do.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:p-4 lg:p-10 flex justify-center flex-col gap-10">
                            <div className="flex justify-start items-center gap-5">
                                <div className="rounded-full w-[60px] h-[60px]">
                                    <img src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682933579/chris_dc1wfv.jpg" alt="" width={'100%'} height={'100%'} />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold font-sora">Christopher Pam</p>
                                    <p className="text-gray-500 text-base">Backend Developer</p>
                                </div>
                            </div>

                            <div className="text-left text-[15px]">
                                <p>Charlinto isn't just a coding machine - he's also a great team player who knows how to keep things fun and lighthearted. If you want a backend developer who can bring technical expertise and a great sense of humor to the table, then charlinto is your guy.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:p-4 lg:p-10 flex justify-center flex-col gap-10">
                            <div className="flex justify-start items-center gap-5">
                                <div className="rounded-full w-[60px] h-[60px]">
                                    <img src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1678888079/cld-sample-2.jpg" alt="" width={'100%'} height={'100%'} />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold font-sora">Kolawole Otitolaye</p>
                                    <p className="text-gray-500 text-base">Data Analysis Intern</p>
                                </div>
                            </div>

                            <div className="text-left text-[15px]">
                                <p>Charlinto is a dedicated web developer who has a never give up attitude and is always ready to take on new challenges to get his task done.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className="hidden md:block">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="md:p-4 lg:p-10 flex justify-center flex-col gap-10">
                            <div className="flex justify-start items-center gap-5">
                                <div className="rounded-full w-[60px] h-[60px]">
                                    <img src="https://avatars.githubusercontent.com/u/105434198?v=4" alt="" width={'100%'} height={'100%'} />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold font-sora">Sophia Ameh</p>
                                    <p className="text-gray-500 text-base">Frontend developer</p>
                                </div>
                            </div>

                            <div className="text-left md:text-[16px] lg:text-[18px]">
                                <p> I have worked with Charlinto  as a colleague, he is a very detailed individual who is diligent about their work and super hardworking.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:p-4 lg:p-10  flex justify-center flex-col gap-10">
                            <div className="flex justify-start items-center gap-5">
                                <div className="rounded-full w-[60px] h-[60px]">
                                    <img src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682548234/WhatsApp_Image_2023-04-26_at_23.27.18_hpwwzz.jpg" alt="" width={'100%'} height={'100%'} />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold font-sora">Anigbogu Chioma </p>
                                    <p className="text-gray-500 text-base">Co-Developer </p>
                                </div>
                            </div>

                            <div className="text-left md:text-[16px] lg:text-[18px]">
                                <p>Charlinto you are really good at what you do and in a short time you have been able to amass so much knowledge and that is impressive. I love your attention to detail and how you pull off complex designs with ease.
                                    Well done I enjoyed working with you 👍.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:p-4 lg:p-10  flex justify-center flex-col gap-10">
                            <div className="flex justify-start items-center gap-5">
                                <div className="rounded-full w-[60px] h-[60px]">
                                    <img src="https://avatars.githubusercontent.com/u/100404175?v=4" alt="" width={'100%'} height={'100%'} />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold font-sora">Marvelous Molokwu</p>
                                    <p className="text-gray-500 text-base">Intern: nHub Foundation</p>
                                </div>
                            </div>

                            <div className="text-left md:text-[16px] lg:text-[18px]">
                                <p> I started my tech journey in September 2022. It wasn&apos;t easy but I was lucky to have Charlinto there because he wasn&apos;t only a friend but also a teacher. He is a really talented programmer and knows what he is doing.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:p-4 lg:p-10  flex justify-center flex-col gap-10">
                            <div className="flex justify-start items-center gap-5">
                                <div className="rounded-full w-[60px] h-[60px]">
                                    <img src="https://avatars.githubusercontent.com/u/112015287?v=4" alt="" width={'100%'} height={'100%'} />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold font-sora">Chiamaka Maduike</p>
                                    <p className="text-gray-500 text-base">Frontend Developer</p>
                                </div>
                            </div>

                            <div className="text-left md:text-[16px] lg:text-[18px]">
                                <p>You are determined and you definitely understand what you do. You have taught me a couple of times and without doubt, I was able to understand, that only shows that you are good at what you do.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:p-4 lg:p-10 flex justify-center flex-col gap-10">
                            <div className="flex justify-start items-center gap-5">
                                <div className="rounded-full w-[60px] h-[60px]">
                                    <img src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682933579/chris_dc1wfv.jpg" alt="" width={'100%'} height={'100%'} />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold font-sora">Christopher Pam</p>
                                    <p className="text-gray-500 text-base">Backend Developer</p>
                                </div>
                            </div>

                            <div className="text-left md:text-[16px] lg:text-[18px]">
                                <p>Charlinto isn't just a coding machine - he's also a great team player who knows how to keep things fun and lighthearted. If you want a backend developer who can bring technical expertise and a great sense of humor to the table, then charlinto is your guy.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:p-4 lg:p-10 flex justify-center flex-col gap-10">
                            <div className="flex justify-start items-center gap-5">
                                <div className="rounded-full w-[60px] h-[60px]">
                                    <img src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1678888079/cld-sample-2.jpg" alt="" width={'100%'} height={'100%'} />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold font-sora">Kolawole Otitolaye</p>
                                    <p className="text-gray-500 text-base">Data Analysis Intern</p>
                                </div>
                            </div>

                            <div className="text-left md:text-[16px] lg:text-[18px]">
                                <p>Charlinto is a dedicated web developer who has a never give up attitude and is always ready to take on new challenges to get his task done.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    );
}


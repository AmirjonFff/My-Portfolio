"use client"

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { IAchievementsSection } from "./IComponents";
import heroImg from '../../../public/hero.png'
import Image from "next/image";

const HeroSection = ({ page: { heroSection } }: IAchievementsSection) => {

    return (
        <section className="container relative py-5 mx-auto mt-10 px-7 md:px-10 xl:px-20 sm:py-14 md:py-16 lg:py-24 xl:py-36">
            <div className="hidden bg_gradient sm:block -left-72 -top-32"></div>
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="justify-center col-span-8 text-center place-self-center sm:text-left sm:place-self-start"
                >
                    <h1 className="text-white mb-0 xl:mb-4 leading-[2] md:leading-[3] lg:leading-[4] xl:leading-[7] mt-3 font-extrabold">
                        <span className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-7xl bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#87CEEB]">
                            {heroSection.title}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                `${heroSection.job1}`,
                                1000,
                                `${heroSection.job2}`,
                                1000
                            ]}
                            wrapper="span"
                            speed={20}
                            repeat={Infinity}
                            className="text-[25px] md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
                        />
                    </h1>
                    <p className="text-[#ADB7BE] sm:w-[80%] text-sm mb-6 xl:text-xl">
                        {heroSection.description}
                    </p>
                    <div>
                        <Link
                            href="/contact"
                            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#00FFFF] to-[#87CEEB] hover:bg-slate-200 text-[#ffffff]"
                        >
                            {heroSection.btn1}
                        </Link>
                        <a
                            href={"https://drive.google.com/file/d/1vzD7khPsDLLUxFt9e-i6EBS17-IDn3jm/view?usp=sharing"}
                            target="_blank"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#00FFFF] to-[#87CEEB] hover:bg-slate-800 text-white mt-3"
                        >
                            <span className="block bg-[#17153B] hover:bg-slate-800 rounded-full px-5 py-2">
                                {heroSection.btn2}
                            </span>
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 col-start-1 row-start-1 mt-4 sm:row-start-auto sm:col-start-auto place-self-center lg:mt-0"
                >
                    <div className="rounded-full bg-[#100e2b]  w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] 2xl:w-[430px] 2xl:h-[430px] relative">
                        <Image
                            src={heroImg}
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[80%]"
                            width={800} // Укажи реальные размеры изображения по ширине
                            height={600} // Укажи реальные размеры изображения по высоте
                            priority={true} // Приоритетное изображение для загрузки
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;

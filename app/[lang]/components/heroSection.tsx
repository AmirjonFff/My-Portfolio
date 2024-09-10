"use client"

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { IAchievementsSection } from "./IComponents";

const HeroSection = ({ page: { heroSection } }: IAchievementsSection) => {

    return (
        <section className="container relative mt-10 mx-auto px-20 py-5 sm:py-14 md:py-16 lg:py-36">
            <div className="absolute z-0 rotate-[30deg] bg_gradient -left-72 -top-32 w-[800px] h-[800px] rounded-full">

            </div>
            <div className="grid relative z-10 grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-center sm:place-self-start"
                >
                    <h1 className="text-white mb-4 leading-[2] lg:leading-[7] mt-3 font-extrabold">
                        <span className="text-transparent text-3xl md:text-4xl lg:text-6xl xl:text-7xl bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#87CEEB]">
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
                            className="text-[25px] md:text-[35px] lg:text-6xl xl:text-7xl"
                        />
                    </h1>
                    <p className="text-[#ADB7BE] w-[80%] text-base sm:text-lg mb-6 lg:text-xl">
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
                            href={"https://blue-tricia-60.tiiny.site/"}
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
                    className="col-span-4 row-start-1 col-start-1 sm:row-start-auto sm:col-start-auto place-self-center mt-4 lg:mt-0"
                >
                    <div className="rounded-full bg-[#100e2b]  w-[250px] h-[250px] lg:w-[430px] lg:h-[430px] relative">
                        <img
                            src="https://png.pngtree.com/png-vector/20231108/ourmid/pngtree-programmer-it-developer-png-image_10439723.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={350}
                            height={350}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;

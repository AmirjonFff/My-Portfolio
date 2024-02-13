"use client"

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { IAchievementsSection } from "./IComponents";

const HeroSection = ({ page: { heroSection } }: IAchievementsSection) => {

    return (
        <section className="container mt-10 mx-auto px-12 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-white mb-4 sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                        <span className="text-transparent text-3xl bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
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
                            className="!text-[25px]"
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        {heroSection.description}
                    </p>
                    <div>
                        <Link
                            href="/contact"
                            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
                        >
                            {heroSection.btn1}
                        </Link>
                        <a
                            href={"https://blue-tricia-60.tiiny.site/"}
                            target="_blank"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                {heroSection.btn2}
                            </span>
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 row-start-1 col-start-1 place-self-center mt-4 lg:mt-0"
                >
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <img
                            src="https://png.pngtree.com/png-vector/20231108/ourmid/pngtree-programmer-it-developer-png-image_10439723.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={320}
                            height={320}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;

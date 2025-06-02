"use client";
import React from "react";
import dynamic from "next/dynamic";
import { IAchievementsSection } from "./IComponents";

const AnimatedNumbers: any = dynamic(
    () => {
        return import("react-animated-numbers");
    },
    { ssr: false }
);


const AchievementsSection = ({ page: { achievementsSection } }: IAchievementsSection) => {
    const achievementsList = [
        {
            metric: `${achievementsSection.title1}`,
            value: "7",
            postfix: "+",
        },
        {
            prefix: "~",
            metric: `${achievementsSection.title2}`,
            value: "10,000",
        },
        {
            metric: `${achievementsSection.title3}`,
            value: "3",
        },
        {
            metric: `${achievementsSection.title4}`,
            value: "2",
            postfix: "+",
        },
    ];

    return (
        <div className="w-full sm:w-[550px] md:w-[650px] relative z-20 bg-[#100e2b] sm:mb-10 md:max-w-full lg:w-[800px] xl:w-[1200px] mx-auto">

            <div className="sm:border-[#33353F] sm:border rounded-md py-5 lg:py-8 flex flex-col sm:flex-row items-center justify-around">
                {achievementsList.map((achievement, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
                        >
                            <h2 className="flex flex-row text-4xl font-bold text-white">
                                {achievement.prefix}
                                <AnimatedNumbers
                                    includeComma
                                    animateToNumber={parseInt(achievement.value)}
                                    locale="en-US"
                                    className="text-4xl font-bold text-white"
                                    configs={(_: string, index: number) => {
                                        return {
                                            mass: 1,
                                            friction: 100,
                                            tensions: 140 * (index + 1),
                                        };
                                    }}
                                />
                                {achievement.postfix}
                            </h2>
                            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AchievementsSection;

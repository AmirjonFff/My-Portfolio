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
            value: "1",
            postfix: "+",
        },
    ];

    return (
        <div className="md:w-[700px] bg-[#131131] md:max-w-full lg:w-[800px] xl:w-[1200px] max-w-[500px] mx-auto">
            
            <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
                {achievementsList.map((achievement, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
                        >
                            <h2 className="text-white text-4xl font-bold flex flex-row">
                                {achievement.prefix}
                                <AnimatedNumbers
                                    includeComma
                                    animateToNumber={parseInt(achievement.value)}
                                    locale="en-US"
                                    className="text-white text-4xl font-bold"
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

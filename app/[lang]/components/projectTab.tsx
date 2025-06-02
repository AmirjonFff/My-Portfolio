"use client"
import React, { useRef, useState } from 'react'
import { useInView, motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { GlobeAltIcon, CodeBracketIcon, ServerStackIcon, CogIcon } from "@heroicons/react/24/outline";

interface IProjectTab {
    data: {
        id: number,
        title: string,
        description: string,
        image: any,
        tag: string[],
        gitUrl: string,
        previewUrl: string,
        technologies: string[],
        funcs: { [key: string]: string },
        opt: string
    }[],
    lang: { [key: string]: string }
}

function ProjectTab({ data, lang }: IProjectTab) {
    const ref = useRef(null);
    const [tag, setTag] = useState("All");

    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    };

    const filteredProjects = data.filter((project) =>
        project.tag.includes(tag)
    );

    return (
        <>
            <div className="flex mt-1 flex-row items-center justify-center gap-2 text-white border-[#ADB7BE] border-b relative z-20">
                <ProjectTag
                    icon={GlobeAltIcon}
                    onClick={handleTagChange}
                    name={lang.all}
                    tag={'All'}
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    icon={CodeBracketIcon}
                    onClick={handleTagChange}
                    name={lang.front}
                    tag={'Frontend'}
                    isSelected={tag === "Frontend"}
                />
                <ProjectTag
                    icon={ServerStackIcon}
                    onClick={handleTagChange}
                    name={lang.full}
                    tag={'Fullstack'}
                    isSelected={tag === "Fullstack"}
                />
            </div>
            <ul ref={ref} className="grid gap-4 py-5 overflow-auto block_project sm:grid-cols-2 lg:grid-cols-3 md:px-3 md:gap-7 lg:gap-6 xl:gap-8 2xl:gap-11">

                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={project.id}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard  {...project} />
                    </motion.li>
                ))}
            </ul>
        </>
    )
}

export default ProjectTab

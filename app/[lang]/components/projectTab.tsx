"use client"
import React, { useRef } from 'react'
import { useInView, motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { IProjectsLang } from './IComponents';
interface IProjectTab {
    data: {
        id: number,
        title: string,
        description: string,
        image: any,
        tag: string[],
        gitUrl: string,
        previewUrl: string,
    }[],
}

function ProjectTab({ data }: IProjectTab) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <ul ref={ref} className="block_project grid overflow-auto md:grid-cols-3 px-3 pt-5 gap-8 md:gap-12">
            {data.map((project, index) => (
                <motion.li
                    key={index}
                    variants={cardVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                </motion.li>
            ))}
        </ul>
    )
}

export default ProjectTab

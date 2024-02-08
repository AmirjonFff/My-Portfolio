"use client"
import React, { useRef, useState } from 'react'
import ProjectTag from './ProjectTag'
import { useInView, motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { IProjectsLang } from './IComponents';
interface IProjectTab {
    data: {
        id: number;
        title: string,
        description: string,
        image: any,
        tag: string[],
        gitUrl: string,
        previewUrl: string,
    }[],
    lang: IProjectsLang;
}

function ProjectTab({ data, lang }: IProjectTab) {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    };

    const filteredProjects = data.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <div className=''>
            <div className="text-white flex flex-row justify-center items-center gap-2">
                <ProjectTag
                    onClick={() => handleTagChange("All")}
                    name={`${lang.tab1}`}
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={() => handleTagChange("Web")}
                    name={`${lang.tab2}`}
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={() => handleTagChange("Mobile")}
                    name={`${lang.tab3}`}
                    isSelected={tag === "Mobile"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 mt-4">
                {filteredProjects.map((project, index) => (
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
        </div>
    )
}

export default ProjectTab

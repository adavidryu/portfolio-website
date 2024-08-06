import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "A",
        description: "A",
        image: "/images/about-image.jpeg"
        // Add tag ["", ""]
        // Add gitUrl
        // Add previewUrl
    },
    {
        id: 2,
        title: "B",
        description: "B",
        image: "/images/about-image.jpeg"
    },
    {
        id: 3,
        title: "C",
        description: "C",
        image: "/images/about-image.jpeg"
    },
    {
        id: 4,
        title: "D",
        description: "D",
        image: "/images/about-image.jpeg"
    },
    {
        id: 5,
        title: "E",
        description: "E",
        image: "/images/about-image.jpeg"
    },
    {
        id: 6,
        title: "F",
        description: "F",
        image: "/images/about-image.jpeg"
    }
]


const ProjectsSection = () => {
    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image} 
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection
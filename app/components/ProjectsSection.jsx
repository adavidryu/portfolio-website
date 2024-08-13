import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "AI Customer Service Chatbot",
        description: "Next.js, React, OpenAI, Vercel",
        image: "/images/projects/project1.png",
        // Add tag ["", ""]
        // Add gitUrl
        // Add previewUrl
    },
    {
        id: 2,
        title: "Inventory Management System",
        description: "Next,js, React, Firebase, GCP",
        image: "/images/projects/project2.png",
        gitUrl: "https://github.com/adavidryu/inventory-management",
        previewUrl: "https://inventory-management-lyart-xi.vercel.app/",
    },
    {
        id: 3,
        title: "H.AI.R",
        description: "An AI-powered hair type classifier and product recommendation. Built for a hackathon where my team achieved top 20 out of 550+ teams.",
        image: "/images/about-image.jpeg",
        gitUrl: "https://github.com/skandrigi/hshackathon1",
    },
    // {
    //     id: 4,
    //     title: "AI Flashcard SaaS",
    //     description: "D",
    //     image: "/images/about-image.jpeg"
    // },
    // {
    //     id: 5,
    //     title: "E",
    //     description: "E",
    //     image: "/images/about-image.jpeg"
    // },
    {
        id: 6,
        title: "My Modified Infiniti Q50",
        description: "My pride and joy.",
        image: "/images/projects/project4.jpg"
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
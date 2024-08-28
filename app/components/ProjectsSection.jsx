import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "AI Flashcard SaaS",
        description: "Next, React, OpenAI, Stripe, Clerk, Firebase",
        image: "/images/flashycard.png",
        gitUrl: "https://github.com/adavidryu/ai-flashcards",
        previewUrl: "https://ai-flashcards-seven.vercel.app/",
    },
    {
        id: 2,
        title: "AI Customer Service Chatbot",
        description: "Next, React, OpenAI, AWS, EC2",
        image: "/images/projects/chatbot.png",
        gitUrl: "https://github.com/adavidryu/ai-customer-service",
        previewUrl: "http://18.119.129.122/",
        // Add tag ["", ""]
    },
    {
        id: 3,
        title: "H.AI.R",
        description: "An AI-powered hair type classifier and product recommendation. Built for a hackathon where my team achieved top 20 out of 550+ teams.",
        image: "/images/projects/hair.png",
        gitUrl: "https://github.com/skandrigi/hshackathon1",
        previewUrl: "https://www.youtube.com/watch?v=sYmPFrH5e7A",
    },
    {
        id: 4,
        title: "Inventory Management System",
        description: "Next, React, Firebase",
        image: "/images/projects/inventory.png",
        gitUrl: "https://github.com/adavidryu/inventory-management",
        previewUrl: "https://inventory-management-lyart-xi.vercel.app/",
    },
    // {
    //     id: 5,
    //     title: "E",
    //     description: "E",
    //     image: "/images/about-image.jpeg"
    // },
    {
        id: 6,
        title: "My Modified Infiniti Q50",
        description: "From power modifications to looks, this is my constantly evolving hands-on project.",
        image: "/images/projects/car.jpg",
        gitUrl: "",
        previewUrl: "",
    }
]


const ProjectsSection = () => {
    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 md:grid-cols-2">
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
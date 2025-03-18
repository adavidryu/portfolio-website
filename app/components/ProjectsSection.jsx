"use client"

import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'

const projectsData = [
    {
        id: 1,
        title: "AI Flashcard SaaS",
        description: "Next, React, OpenAI, Stripe, Clerk, Firebase",
        image: "/images/flashycard.png",
        gitUrl: "https://github.com/adavidryu/ai-flashcards",
        previewUrl: "https://ai-flashcards-seven.vercel.app/",
        tags: ["AI", "SaaS", "Next.js", "OpenAI"],
        featured: true
    },
    {
        id: 2,
        title: "AI Customer Service Chatbot",
        description: "Next, React, OpenAI, AWS, EC2",
        image: "/images/projects/chatbot.png",
        gitUrl: "https://github.com/adavidryu/ai-customer-service",
        previewUrl: "http://18.119.129.122/",
        tags: ["AI", "AWS", "Chatbot", "Next.js"],
        featured: true
    },
    {
        id: 3,
        title: "H.AI.R",
        description: "An AI-powered hair type classifier and product recommendation. Built for a hackathon where my team achieved top 20 out of 550+ teams.",
        image: "/images/projects/hair.png",
        gitUrl: "https://github.com/skandrigi/hshackathon1",
        previewUrl: "https://www.youtube.com/watch?v=sYmPFrH5e7A",
        tags: ["AI", "Computer Vision", "Hackathon", "Python"],
        featured: true
    },
    {
        id: 4,
        title: "Inventory Management System",
        description: "Next, React, Firebase",
        image: "/images/projects/inventory.png",
        gitUrl: "https://github.com/adavidryu/inventory-management",
        previewUrl: "https://inventory-management-lyart-xi.vercel.app/",
        tags: ["Next.js", "Firebase", "CRUD", "React"],
        featured: false
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
        tags: ["Automotive", "Modification", "DIY"],
        featured: false
    }
]

const ProjectsSection = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    
    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'featured', label: 'Featured' },
        { id: 'ai', label: 'AI Projects' },
        { id: 'web', label: 'Web Apps' }
    ];

    const filteredProjects = projectsData.filter(project => {
        if (activeFilter === 'all') return true;
        if (activeFilter === 'featured') return project.featured;
        if (activeFilter === 'ai') return project.tags.includes('AI');
        if (activeFilter === 'web') return project.tags.includes('Next.js') || project.tags.includes('React');
        return true;
    });

    return (
        <section id="projects" className="py-20 bg-gradient-to-b from-[#121212] to-[#1a1a1a]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        My Projects
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A collection of my work showcasing my skills in software development, AI, and more.
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeFilter === filter.id
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                                    : 'bg-[#2a2a2a] text-gray-400 hover:text-white hover:bg-[#3a3a3a]'
                            }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                imgUrl={project.image}
                                gitUrl={project.gitUrl}
                                previewUrl={project.previewUrl}
                                tags={project.tags}
                                featured={project.featured}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
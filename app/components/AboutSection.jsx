"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import { motion } from 'framer-motion'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                    { name: "JavaScript", level: 90 },
                    { name: "Next.js", level: 85 },
                    { name: "Python", level: 80 },
                    { name: "C++", level: 75 },
                    { name: "Node.js", level: 85 },
                    { name: "Tailwind", level: 90 },
                    { name: "Git", level: 85 },
                    { name: "HTML/CSS", level: 95 },
                    { name: "React", level: 90 }
                ].map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-[#2a2a2a] p-4 rounded-xl hover:bg-[#3a3a3a] transition-colors duration-300"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-white">{skill.name}</span>
                            <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <div className="space-y-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-[#2a2a2a] p-6 rounded-xl"
                >
                    <h3 className="text-xl font-bold text-white mb-2">Texas A&M University</h3>
                    <p className="text-gray-400">BS Computer Science</p>
                    <p className="text-sm text-purple-300 mt-2">Expected Graduation: 2027</p>
                </motion.div>
            </div>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    { name: "HTML & CSS Specialist", issuer: "W3Schools" },
                    { name: "JavaScript Specialist", issuer: "W3Schools" }
                ].map((cert, index) => (
                    <motion.div
                        key={cert.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-[#2a2a2a] p-6 rounded-xl hover:bg-[#3a3a3a] transition-colors duration-300"
                    >
                        <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                        <p className="text-sm text-gray-400">{cert.issuer}</p>
                    </motion.div>
                ))}
            </div>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#121212]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-3xl" />
                        <div className="relative rounded-2xl overflow-hidden border border-purple-500/20">
                            <Image
                                src="/images/about-image.jpeg"
                                alt="About Me"
                                width={500}
                                height={300}
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                About Me
                            </h2>
                            <div className="space-y-4 text-gray-400">
                                <p>
                                    I&apos;m currently learning to be well versed in full-stack development. 
                                    Constantly learning and building.
                                </p>
                                <p>
                                    Something that piques my interest is augmented reality and it&apos;s potential 
                                    to integrate into society.
                                </p>
                                <p>
                                    Fun fact: I am South Korean and I&apos;ve been to over 15 countries. 
                                    I love experiencing others&apos; cultures and sharing my own.
                                </p>
                            </div>
                        </div>

                        {/* Tab Buttons */}
                        <div className="flex flex-wrap gap-4">
                            {TAB_DATA.map((tabData) => (
                                <TabButton
                                    key={tabData.id}
                                    selectTab={() => handleTabChange(tabData.id)}
                                    active={tab === tabData.id}
                                >
                                    {tabData.title}
                                </TabButton>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <motion.div
                            key={tab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {TAB_DATA.find((t) => t.id === tab).content}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
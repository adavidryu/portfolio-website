"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Python</li>
                <li>C++</li>
                <li>Node.js</li>
                <li>Next.js</li>
                <li>Bootstrap</li>
                <li>Git</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Bachelor of Science (2027) Texas A&M University</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>HTML & CSS Specialist</li>
            </ul>
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
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/about-image.jpeg" width={500} height={300} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base md:text-lg">
                    I&apos;m currently learning to be well versed in full-stack development. Constantly learning and building.<br></br><br></br>Something that piques my interest is augmented reality and it&apos;s potential to integrate into society.<br></br><br></br>Fun fact: I am South Korean and I&apos;ve been to over 15 countries. I love experiencing others&apos; cultures and sharing my own.
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab=== "skills"}>
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab=== "education"}>
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab=== "certifications"}>
                        {" "}
                        Certifications{" "}
                    </TabButton>
                </div>
                <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
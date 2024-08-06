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
                <li>JavaScript.js</li>
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
            <Image src="/images/about-image.jpeg" width={500} height={500} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base md:text-lg">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum culpa quas repellendus expedita sunt optio consectetur quibusdam sed dolore dolor. Quae necessitatibus iusto harum earum natus corrupti minima delectus beatae.
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
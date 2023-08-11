"use client";

import Button from "@/components/button/Button";
import ContentSection from "@/components/ContentSection";
import List from "@/components/List";
import {useRef} from "react";
import compassIcon from "/public/compass.svg";
import htmlIcon from "/public/html.svg";
import cssIcon from "/public/css3.svg";
import jsIcon from "/public/javascript.svg";
import tsIcon from "/public/typescript.svg";
import reactIcon from "/public/reactjs.svg";
import nextIcon from "/public/nextjs.svg";
import tailwindIcon from "/public/tailwind.svg";
import scssIcon from "/public/scss.svg";
import javaIcon from "/public/java.svg";
import kotlinIcon from "/public/kotlin.svg";
import pythonIcon from "/public/python.svg";
import cppIcon from "/public/cpp.svg";
import mongoIcon from "/public/mongodb.svg";
import redisIcon from "/public/redis.svg";
import angularIcon from "/public/angular.svg";
import {Divider, Spacer} from "@nextui-org/react";
import TechStack from "@/components/TechStack";
import ContactButton from "@/components/nav/contact/ContactButton";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
    const projectRef = useRef<HTMLDivElement>(null)

    return (
        <main>
            <div
                className='pt-32 min-h-screen align-middle'
                style={{
                    backgroundImage: 'url(static/mesh-567.png)'
                }}
            >
                <div className='p-24 phone:p-6 flex justify-center'>
                    <div>
                        <h1 className={`text-7xl phone:text-5xl text-left font-black mb-3 tracking-wide text-white`}>hey,<br/> i&apos;m
                            Ajani.
                        </h1>
                        <p className={`text-xl phone:text-lg text-left max-w-xl tracking-wide phone:max-w-[15rem] mb-6 text-white`}>I&apos;m
                            a
                            full stack software engineer. I have a passion for creating all sorts of software but I
                            enjoy
                            web development the most.</p>
                        <Button
                            icon={compassIcon}
                            label='Explore'
                            width={10}
                            height={3}
                            onClick={() => {
                                projectRef.current?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }}
                        />
                        <Spacer y={12}/>
                        <TechStack items={[
                            {
                                label: "HTML",
                                icon: htmlIcon
                            },
                            {
                                label: "CSS3",
                                icon: cssIcon
                            },
                            {
                                label: "JavaScript",
                                icon: jsIcon
                            },
                            {
                                label: "TypeScript",
                                icon: tsIcon
                            },
                            {
                                label: "ReactJS",
                                icon: reactIcon
                            },
                            {
                                label: "Next.js",
                                icon: nextIcon
                            },
                            {
                                label: "TailwindCSS",
                                icon: tailwindIcon
                            },
                            {
                                label: "SCSS",
                                icon: scssIcon
                            },
                            {
                                label: "Java",
                                icon: javaIcon
                            },
                            {
                                label: "Kotlin",
                                icon: kotlinIcon
                            },
                            {
                                label: "Python",
                                icon: pythonIcon
                            },
                            {
                                label: "C/C++",
                                icon: cppIcon
                            },
                        ]}/>
                    </div>
                </div>
            </div>
            <div ref={projectRef}>
                <ContentSection
                    title='my projects'
                    id='projects'
                >
                    <div className='w-full mt-12 p-3 grid grid-cols-1 gap-y-12'>
                        <ProjectCard
                            title="Robertify"
                            description="Robertify is a music bot written completely in Java and Kotlin using the Java Discord API (JDA)."
                            thumbnail="https://i.robertify.me/images/k59gh.png"
                            href="/robertify"
                            demo="https://robertify.me"
                            stack={[javaIcon, kotlinIcon, reactIcon, nextIcon, tsIcon, tailwindIcon, scssIcon, mongoIcon, redisIcon]}
                        />
                        <Divider />
                        <ProjectCard
                            title="Green's Restaurant & Pub Management Dashboard"
                            description="This website was aimed to manage the day-to-day stock, employee and invoice operations at a small business known as Green's Restaurant & Pub."
                            thumbnail="https://i.imgur.com/q8pQXZq.png"
                            href="/greens-pub"
                            stack={[reactIcon, nextIcon, tsIcon, tailwindIcon, scssIcon, mongoIcon]}
                        />
                        <Divider />
                        <ProjectCard
                            title="The Car Mart"
                            description="The Car Mart is an imaginary business place dedicated to selling cars."
                            thumbnail="https://i.imgur.com/8x2AYKJ.png"
                            href="/car-mart"
                            stack={[angularIcon, tsIcon, tailwindIcon, scssIcon, mongoIcon, redisIcon]}
                        />
                    </div>
                </ContentSection>
            </div>
            <ContentSection
                title='my skills'
                id='skills'
                description='With only 3 years of coding experience (written 2023), I have ammassed fluency in several programming languages and frameworks. Such tools can be found below'
            >
                <Spacer y={6}/>
                <div className='flex space-x-6'>
                    <List
                        heading='programming languages'
                        items={[
                            'Java',
                            'Kotlin',
                            'JavaScript',
                            'TypeScript',
                            'Python',
                            'C/C++',
                            'Rust (Beginner)',
                            'SQL'
                        ]}
                    />
                    <List
                        heading='frameworks & libraries'
                        items={[
                            'ReactJS',
                            'Next.js',
                            'NestJS',
                            'Express',
                            'TailwindCSS',
                            'Sass',
                            'Java Spring',
                            'Ktor'
                        ]}
                    />
                </div>
            </ContentSection>
            <ContentSection
                title='contact me'
                id='contact'
                description="Don't be shy, I'm always open to new opportunities. If you'd like to get in touch, feel free to send me an email."
            >
                <ContactButton variant="shadow"/>
            </ContentSection>
            <Spacer y={16} />
        </main>
    )
}

'use client'

import Link from "next/link";
import HyperLink from "@/components/HyperLink";
import React, {Fragment, useCallback, useMemo, useState} from "react";
import {Navbar as NextNavbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar"
import {Switch} from "@nextui-org/switch";
import {useTheme} from "next-themes";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "@/components/icons/MoonIcon";
import {Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger} from "@nextui-org/dropdown";
import {Button} from "@nextui-org/react";
import HamburgerIcon from "@/components/icons/HamburgerIcon";
import ToolsIcon from "@/components/icons/ToolsIcon";
import SkillIcon from "@/components/icons/SkillIcon";
import DocumentIcon from "@/components/icons/DocumentIcon";
import {useRouter} from "next/navigation";
import ContactModal from "@/components/nav/contact/ContactModal";
import ChatIcon from "@/components/icons/ChatIcon";

export default function Navbar() {
    const {theme, setTheme} = useTheme()
    const router = useRouter()
    const [contactModalOpen, setContactModalOpen] = useState(false);

    const darkModeSwitch = useMemo(() => (
        <Switch
            aria-label="Dark mode switch"
            isSelected={theme === "dark"}
            thumbIcon={({isSelected}) =>
                isSelected
                    ? (<MoonIcon width={12}/>)
                    : (<SunIcon width={12}/>)
            }
            onValueChange={value => setTheme(value ? "dark" : "light")}
        />
    ), [setTheme, theme])

    const downloadResume = useCallback(() => {
        const resumeUrl = 'files/Ajani Green Resume.pdf'
        const aTag = document.createElement("a")
        aTag.href = resumeUrl
        aTag.setAttribute('download', 'Ajani Green Resume.pdf')
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }, [])

    return (
        <Fragment>
            <NextNavbar
                shouldHideOnScroll
                classNames={{
                    base: `dark:bg-black/70 dark:text-white`
                }}
            >
                <NavbarBrand>
                    <Link href='/' className='font-black text-xl tracking-[.125em] self-center'><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Ajani</span></Link>
                </NavbarBrand>
                <NavbarContent className="gap-12 tablet:hidden" justify="end">
                    <NavbarItem>
                        <HyperLink href='/#projects' label='projects'
                                   className="font-light text-xl tracking-wide self-center !no-underline"/>
                    </NavbarItem>
                    <NavbarItem>
                        <HyperLink href='/#skills' label='skills'
                                   className="font-light text-xl tracking-wide self-center !no-underline"/>
                    </NavbarItem>
                    <NavbarItem>
                        <p
                            className='hover:text-primary transition-faster cursor-pointer tracking-wide font-light text-xl self-center'
                            onClick={_ => downloadResume()}
                        >resume</p>
                    </NavbarItem>
                    <NavbarItem>
                        <p
                            className='hover:text-primary transition-faster cursor-pointer tracking-wide font-light text-xl self-center'
                            onClick={_ => setContactModalOpen(true)}
                        >contact</p>
                    </NavbarItem>
                    <NavbarItem>
                        {darkModeSwitch}
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent className="hidden tablet:flex" justify="end">
                    <Dropdown
                        className="phone:w-64 w-96 bg-neutral-100/70 dark:bg-black/70 backdrop-blur-md border-1 dark:border-white/20 border-black/50"
                    >
                        <NavbarItem>
                            <DropdownTrigger>
                                <Button
                                    isIconOnly
                                    variant="light"
                                    startContent={<HamburgerIcon fill={theme === "dark" ? "#fff" : "#000"}/>}
                                />
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu
                            aria-label="Mobile Navigation Dropdown"
                            itemClasses={{
                                base: `
                                data-[hover=true]:bg-primary/20
                                py-4
                            `
                            }}
                            onAction={key => {
                                switch (key) {
                                    case "projects": {
                                        router.push("/#projects")
                                        break;
                                    }
                                    case "skills": {
                                        router.push("/#skills")
                                        break;
                                    }
                                    case "resume": {
                                        downloadResume()
                                        break;
                                    }
                                    case "contact": {
                                        setContactModalOpen(true)
                                        break;
                                    }
                                }
                            }}
                        >
                            <DropdownSection showDivider>
                                <DropdownItem
                                    key="projects"
                                    startContent={<ToolsIcon width={20}/>}
                                    description="See all the projects I've been working on."
                                >
                                    Projects
                                </DropdownItem>
                                <DropdownItem
                                    key="skills"
                                    startContent={<SkillIcon width={38}/>}
                                    description="View all the skills I have to offer."
                                >
                                    Skills
                                </DropdownItem>
                                <DropdownItem
                                    key="resume"
                                    startContent={<DocumentIcon width={30}/>}
                                    description="Download my resume."
                                >
                                    Resume
                                </DropdownItem>
                                <DropdownItem
                                    key="contact"
                                    startContent={<ChatIcon width={30}/>}
                                    description="Reach out to me."
                                >
                                    Contact Me
                                </DropdownItem>
                            </DropdownSection>
                            <DropdownItem
                                isReadOnly
                                key="dark_switch"
                            >
                                {darkModeSwitch}
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                </NavbarContent>
            </NextNavbar>
            <ContactModal modalOpen={contactModalOpen} setModalOpen={setContactModalOpen} />
        </Fragment>
    )
}
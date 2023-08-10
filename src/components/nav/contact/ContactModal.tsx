"use client"

import {Dispatch, SetStateAction} from "react";
import MailIcon from "@/components/icons/MailIcon";
import HyperLink from "@/components/HyperLink";
import {Spacer} from "@nextui-org/react";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";
import GenericModal from "@/components/GenericModal";
import {useTheme} from "next-themes";

type Props = {
    modalOpen: boolean,
    setModalOpen: Dispatch<SetStateAction<boolean>>
}

export default function ContactModal({modalOpen, setModalOpen}: Props) {
    const {theme} = useTheme()

    return (
        <GenericModal
            title="Contact Me"
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
        >
            <div>
                <div className='flex gap-2'>
                    <MailIcon
                        fill={theme === "dark" ? "#fff" : "#000"}
                        width={28}
                    />
                    <p className="font-bold text-3xl self-center">Email</p>
                </div>
                <HyperLink href="mailto:ajani.green@outlook.com" label="ajani.green@outlook.com"></HyperLink>
            </div>
            <Spacer y={6}/>
            <div>
                <div className='flex gap-2'>
                    <LinkedInIcon
                        fill={theme === "dark" ? "#fff" : "#000"}
                        width={28}
                    />
                    <p className="font-bold text-3xl self-center">LinkedIn</p>
                </div>
                <HyperLink href="https://www.linkedin.com/in/ajani-green-83b469225/"
                           label="Ajani Green"></HyperLink>
            </div>
            <Spacer y={6}/>
            <div>
                <div className='flex gap-2'>
                    <GitHubIcon
                        fill={theme === "dark" ? "#fff" : "#000"}
                        width={28}
                    />
                    <p className="font-bold text-3xl self-center">GitHub</p>
                </div>
                <HyperLink href="https://github.com/bombies" label="bombies"></HyperLink>
            </div>
            <Spacer y={6}/>
        </GenericModal>
    )
}
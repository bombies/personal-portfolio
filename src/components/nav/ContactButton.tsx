"use client";

import {useState} from "react";
import {Button, Spacer} from "@nextui-org/react";
import GenericModal from "@/components/GenericModal";
import HyperLink from "@/components/HyperLink";
import mailIcon from "/public/mail.svg";
import linkedinIcon from "/public/linkedin.svg";
import githubIcon from "/public/github.svg";
import GenericImage from "@/components/GenericImage";

type Props = {
    variant?: "light" | "shadow" | "flat" | "solid" | "bordered" | "faded" | "ghost"
}

export default function ContactButton({variant}: Props) {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Button
                className='font-light text-xl text-white tracking-wide'
                variant={variant || "light"}
                color="primary"
                onPress={() => setModalOpen(true)}
            >contact</Button>
            <GenericModal
                title="Contact Me"
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            >
                <div>
                    <div className='flex gap-2'>
                        <GenericImage src={mailIcon} width={2} className='self-center' />
                        <p className="font-bold text-3xl self-center">Email</p>
                    </div>
                    <HyperLink href="mailto:ajani.green@outlook.com" label="ajani.green@outlook.com"></HyperLink>
                </div>
                <Spacer y={6} />
                <div>
                    <div className='flex gap-2'>
                        <GenericImage src={linkedinIcon} width={2} className='self-center' />
                        <p className="font-bold text-3xl self-center">LinkedIn</p>
                    </div>
                    <HyperLink href="https://www.linkedin.com/in/ajani-green-83b469225/" label="Ajani Green"></HyperLink>
                </div>
                <Spacer y={6} />
                <div>
                    <div className='flex gap-2'>
                        <GenericImage src={githubIcon} width={2} className='self-center' />
                        <p className="font-bold text-3xl self-center">GitHub</p>
                    </div>
                    <HyperLink href="https://github.com/bombies" label="bombies"></HyperLink>
                </div>
                <Spacer y={6} />
            </GenericModal>
        </>
    )
}
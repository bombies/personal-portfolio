"use client";

import {useState} from "react";
import {Button} from "@nextui-org/react";
import ContactModal from "@/components/nav/contact/ContactModal";

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
            <ContactModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        </>
    )
}
"use client";

import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalProps} from "@nextui-org/modal";
import React, {JSX} from "react";
import clsx from "clsx";

type Props = {
    title: string
    footerContent?: JSX.Element
} & React.PropsWithChildren & ModalProps

export default function GenericModal({title, children, footerContent, ...modalProps}: Props) {
    return (
        <Modal
            {...modalProps}
            size="2xl"
            className={clsx(
                modalProps.className,
            )}
            showCloseButton={true}
            placement={modalProps.placement ?? "center"}
            backdrop="blur"
        >
            <ModalContent>
                <ModalHeader>
                    <p className="font-semibold text-2xl">{title}</p>
                </ModalHeader>
                <ModalBody>
                    <div className=" p-6">
                        {children}
                    </div>
                </ModalBody>
                {
                    footerContent &&
                    <ModalFooter>
                        {footerContent}
                    </ModalFooter>
                }
            </ModalContent>
        </Modal>
    );
}
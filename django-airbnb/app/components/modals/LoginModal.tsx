'use client';

import Modal from "./Modal";

import {useState} from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
    const loginModal = useLoginModal()

    const content = (
        <>
            <form className="space-y-4">
                <input placeholder="Enter your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-200 rounded-xl" />
                <input placeholder="Enter your password" type="password" className="w-full h-[54px] px-4 border border-gray-200 rounded-xl" />
                <CustomButton 
                    label="Log in"
                />
            </form>
        </>
    )

    return(
        <Modal 
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log in"
            content={content}
        />
    )
}

export default LoginModal;

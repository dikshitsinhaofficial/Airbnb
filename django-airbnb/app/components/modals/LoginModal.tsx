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
                <input Placeholder="Enter your e-mail address" type="email" className="w-full h-[54px] px-4 border-gray-100 rounded-xl" />
                <input Placeholder="Enter your password" type="password" className="w-full h-[54px] px-4 border-gray-100 rounded-xl" />
                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    Login In Error
                </div>
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

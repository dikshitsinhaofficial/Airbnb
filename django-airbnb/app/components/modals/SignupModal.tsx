'use client';

import Modal from "./Modal";

import {useState} from "react";
import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";

const SignupModal = () => {
    const signupModal = useSignupModal()

    const content = (
        <>
            <form className="space-y-4">
                <input placeholder="Enter your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-200 rounded-xl" />
                <input placeholder="Enter new password" type="password" className="w-full h-[54px] px-4 border border-gray-200 rounded-xl" />
                <input placeholder="Confirm password" type="password" className="w-full h-[54px] px-4 border border-gray-200 rounded-xl" />
                <CustomButton 
                    label="Sign up"
                />
            </form>
        </>
    )

    return(
        <Modal 
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Sign up"
            content={content}
        />
    )
}

export default SignupModal;

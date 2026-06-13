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
                <input Placeholder="Enter your e-mail address" type="email" className="w-full h-[54px] px-4 border-gray-100 rounded-xl" />
                <input Placeholder="Enter new password" type="password" className="w-full h-[54px] px-4 border-gray-100 rounded-xl" />
                <input Placeholder="Confrim password" type="password" className="w-full h-[54px] px-4 border-gray-100 rounded-xl" />

                
                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    Sign up Error
                </div>
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

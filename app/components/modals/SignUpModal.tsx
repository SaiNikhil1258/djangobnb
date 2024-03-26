"use client";

import Modal from "./Modal";

import { useState } from "react";
import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";

const SignupModal = () => {
  const signupModal = useSignupModal();

  const content = (
    <>
      <form className="space-y-4">
        <input
          placeholder="Enter you email"
          type="email"
          className="w-full pl-4 h-[54px] border border-gray-300 rounded-xl"
        />
        <input
          placeholder="Enter you password"
          type="password"
          className="w-full pl-4 h-[54px] border border-gray-300 rounded-xl"
        />
        <input
          placeholder="Repeat password"
          type="password"
          className="w-full pl-4 h-[54px] border border-gray-300 rounded-xl"
        />
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          The error message
        </div>
        <CustomButton
          label="submit"
          onClick={() => {
            console.log("test");
          }}
        />
      </form>
    </>
  );

  return (
    <Modal
      isOpen={signupModal.isOpen}
      close={signupModal.close}
      label="signup"
      content={content}
    />
  );
};

export default SignupModal;

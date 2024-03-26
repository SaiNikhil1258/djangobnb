"use client";

import Modal from "./Modal";

import { useState } from "react";
import useLoginModal from "@/app/hooks/UseLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
  const loginModal = useLoginModal();

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
      isOpen={loginModal.isOpen}
      close={loginModal.close}
      label="Log In"
      content={content}
    />
  );
};

export default LoginModal;

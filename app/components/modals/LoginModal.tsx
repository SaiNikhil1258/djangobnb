"use client";

import Modal from "./Modal";

import { useState } from "react";
import useLoginModal from "@/app/hooks/UseLoginModal";
import CustomButton from "../forms/CustomButton";
import { useRouter } from "next/navigation";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [password, setPassword] = useState("");

  const submitLogin = async () => {
    const formData = {
      email: email,
      password: password,
    };
    const response = await apiService.postWithoutToken(
      "/api/auth/login/",
      JSON.stringify(formData)
    );
    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);
      loginModal.close();
      router.push("/");
    } else {
      setErrors(response.non_field_errors);
    }
  };
  const content = (
    <>
      <form action={submitLogin} className="space-y-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter you email"
          type="email"
          className="w-full pl-4 h-[54px] border border-gray-300 rounded-xl"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter you password"
          type="password"
          className="w-full pl-4 h-[54px] border border-gray-300 rounded-xl"
        />
        {errors.map((error, index) => {
          return (
            <div
              key={`error_${index}`}
              className="p-5 bg-airbnb text-white rounded-xl opacity-80"
            >
              {error}
            </div>
          );
        })}
        <CustomButton label="submit" onClick={submitLogin} />
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

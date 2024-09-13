"use client";
import React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignUp = () => {
  const [userDatail, setUserDatail] = useState({});
  const { push } = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDatail({ ...userDatail, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    push("/login");
    console.log(userDatail);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const res = await axios.post("http://localhost:8000/sign-up", {
      userName: userDatail.email,
      password: userDatail.password,
    });
    console.log(res);
  };

  return (
    <form className="flex gap-4" onSubmit={handleSubmit}>
      <h1 className="font-bold text-2xl">Sign Up</h1>
      <input
        className="bg-gray-200"
        type="text"
        placholder="email"
        name="email"
        onChange={handleChange}
      />
      <input
        className="bg-gray-200"
        type="text"
        placholder="password"
        name="password"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
    </form>
  );
};
export default SignUp;

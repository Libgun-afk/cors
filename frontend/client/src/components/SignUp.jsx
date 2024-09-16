"use client";
import React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const SignUp = () => {
  const [userDatail, setUserDatail] = useState({});
  const { push } = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDatail({ ...userDatail, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefualt();
    push("/login");
    console.log(userDatail);
  };

  return (
    <div className=" flex gap-4">
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

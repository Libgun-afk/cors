/** @format */

"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";

export const LogIn = () => {
  const [userDatail, setUserDatail] = useState({});
  const { push } = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDatail({ ...userDatail, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventdatail();
    await push("/home");
    console.log(userDatail);
  };

  const handleClick = async (event) => {
    event.preventdatail();
    await push("/Home");
    console.log(userDatail);
  };

  return (
    <form onSubmit={handleSubmit} className=" flex gap-4">
      <h1 className="font-bold text-2xl">Log In</h1>
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
      <button onClick={handleClick} type="submit">
        Log In
      </button>
    </form>
  );
};

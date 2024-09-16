/** @format */

"use client";
import React, { useState } from "react";

const LogIn = () => {
  const [userDatail, setUserDatail] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDatail({ ...userDatail, [name]: value });
  };

  const handleClick = async (event) => {
    await push("/Home");
    event.preventdatail();
    console.log(userDatail);
  };

  return (
    <div className=" flex gap-4">
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
    </div>
  );
};

export default LogIn;

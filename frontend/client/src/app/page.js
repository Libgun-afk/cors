/** @format */

import Link from "next/link";

export default function Home() {
  const routers = [
    {
      title: "LogIn",
      href: "/login",
    },
    {
      title: "SignUp",
      href: "/signup",
    },
  ];
  return (
    <div className="flex w-full h-full justify-center ">
      <div className="flex flex-col bg-red-300 w-[500px] justify-center items-center">
        <div className=" flex gap-10 font-bold w-[300px] h-[500px] justify-center items-center text-2xl">
          {routers.map(({ href, title }) => (
            <Link href={href} key={title}>
              {title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

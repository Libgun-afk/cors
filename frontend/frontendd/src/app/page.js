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
    <div className="flex flex-col ">
      <div className=" flex gap-10 font-bold text-2xl">
        {routers.map(({ href, title }) => (
          <Link href={href} key={title}>
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  //{ name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        <span className="hover:text-gray-600 border-0 transition ease-in-out duration-300">0</span>
        <span className="hover:text-gray-600 border-0 transition ease-in-out duration-300">x</span>
        <span className="hover:text-gray-600 border-0 transition ease-in-out duration-300">b</span>
        <span className="hover:text-gray-600 border-0 transition ease-in-out duration-300">y</span>
        <span className="hover:text-gray-600 border-0 transition ease-in-out duration-300">t</span>
        <span className="hover:text-gray-600 border-0 transition ease-in-out duration-300">3</span>
        <span className="hover:text-gray-600 border-0 transition ease-in-out duration-300">z</span>
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Hi, my name is Theekshana Fernando, I'm building software products.
        </h2>
      </div>
    </div>
  );
}

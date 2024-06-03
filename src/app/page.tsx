"use client";

import { useEffect, useState } from "react";
import { homeMessages, fontStyles } from "./lib/messages";
import { doRandomise } from "./lib/utilities";

export default function Home() {
  const [message, setMessage] = useState(0);
  const [font, setFont] = useState(0);

  useEffect(() => {
    let interval1: undefined | NodeJS.Timeout;
    let interval2: undefined | NodeJS.Timeout;

    const startInterval = () => {
      interval1 = doRandomise(homeMessages.length, setMessage, 10000); // Set up the first interval
      interval2 = doRandomise(fontStyles.length, setFont, 10000); // Set up the second interval
    };

    setTimeout(() => {
      doRandomise(homeMessages.length, setMessage);
      doRandomise(fontStyles.length, setFont);
      startInterval();
    }, 7500);

    return () => {
      clearInterval(interval1); // Clean up the interval when the component unmounts
      clearInterval(interval2);
    };
  }, []);

  return (
    <>
      <section className="flex flex-column flex-wrap z-10 w-full h-screen items-start justify-start justify-items-start p-16 bg-custom-blue bg-gradient-to-b from-midBlue to-deepBlue to-100%">
        <div className="flex flex-row flex-wrap relative mt-56 h-auto w-full">
          <h1 className="w-full h-full mr-auto font-orbitron font-normal text-6xl tracking-wider lg:text-left sm:text-center sm:mx-auto">
            Welcome to BlueOrbital
          </h1>
          <h2
            className={`w-auto h-full ${fontStyles[font]} text-5xl font-light leading-normal tracking-tight lg:typewriter lg:pl-3 lg:border-t-0 sm:text-center sm:mx-auto sm:border-t-2`}
          >
            {homeMessages[message]}
          </h2>
        </div>
      </section>
      <section className="flex flex-row z-10 w-full h-screen items-start justify-start justify-items-start p-16">
        <div className="w-3/5"></div>
        <article className="w-2/5">
          <h2 className="mb-5">Impossible, Made Possible</h2>
          <p className="mb-2">
            This is web design. The limit is your imagination.
          </p>
          <p className="mb-2">
            No more theme restrictions, no more searching for the right color scheme. Get it
            done properly; get it your way. 
          </p>
          <p className="mb-2">
            Through the latest frontend
            technologies, anything is possible.
          </p>
        </article>
      </section>
    </>
  );
  /* <section className="z-10 h-screen w-full max-w-5xl items-start justify-between font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-centre border-b">
        Our site is currently under development, but we are not far off now... 
      </p>
    </section> */

  /*
    <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Docs{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Find in-depth information about Next.js features and API.
        </p>
      </a>

      <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Learn{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Learn about Next.js in an interactive course with&nbsp;quizzes!
        </p>
      </a>

      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Templates{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Explore starter templates for Next.js.
        </p>
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Deploy{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
          Instantly deploy your Next.js site to a shareable URL with Vercel.
        </p>
      </a>
    </div> */
}

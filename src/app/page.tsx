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
      <section className="flex flex-row z-10 w-full h-auto items-start justify-start justify-items-start p-16">
        <div className="w-3/5 h-fit">
          <div className="w-3/4 h-128 rounded bg-gradient-to-br from-midBlue to-midGreyBlue before:animate-fade-in before:block before:h-128 before:rounded before:bg-gradient-to-br before:from-lightBlue before:to-midBlue before:transition before:duration-1000 before:hover:opacity-0">
          </div>
        </div>
        <article className="w-2/5 h-fit">
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
}

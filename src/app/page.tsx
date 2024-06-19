"use client";

import React, { useEffect, useState } from "react";
import { homeMessages, fontStyles } from "./lib/staticArrays";
import { doRandomise, renderLineBreaks } from "./lib/utilities";
import ColourBox from "./lib/colour-box";

export default function Home() {
  const [message, setMessage] = useState(0);
  const [font, setFont] = useState(0);
  const [userInput, setUserInput] = useState({
    title: `Fully dynamic, customised to your taste.`,
    para: `Dreaming is easy, but making it a reality is challenging.\n
We can design and develop the website you've been looking for; Whether you know exactly what you're looking, or are still needing inspiration.\n
Going digital can be difficult, let us help and we can make it easy.`,
  });

  useEffect(() => {
    let interval1: undefined | ReturnType<typeof setTimeout>;
    let interval2: undefined | ReturnType<typeof setTimeout>;

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
      <section className="flex flex-column flex-wrap z-10 w-full h-screen items-start justify-start justify-items-start p-20 bg-gradient-to-b from-midBlue to-deepBlue to-100%">
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
      <section className="flex flex-row z-10 w-full h-auto items-start justify-start justify-items-start px-16 pt-40 pb-12">
        <ColourBox width="w-2/5" height="h-128"></ColourBox>
        <article className="w-2/5 h-fit ml-auto">
          <h2 className="mb-5">Impossible, Made Possible.</h2>
          <p className="mb-2">
            This is web design. The limit is your imagination.
          </p>
          <p className="mb-2">
            No more theme restrictions, no more searching for the right color
            scheme. Get it done properly; get it your way.
          </p>
          <p className="mb-2">
            Through the latest frontend technologies, anything is possible.
          </p>
        </article>
      </section>
      <section className="flex flex-row flex-wrap z-10 w-full h-auto items-start justify-items-end px-16 pt-40 pb-12 bg-gradient-to-b from-deepBlue to-midBlue">
        <div className="flex w-full h-fit items-stretch flex-nowrap justify-between">
          <div className="w-2/5 h-auto min-h-fit">
            <h2 className="mb-5 h-fit p-4 -ml-4">{userInput.title}</h2>
          </div>
          <div className="flex justify-end w-2/5 min-h-fit h-auto ml-auto">
            <textarea
              className="w-full min-h-fit mb-5 p-4 text-5xl leading-normal font-light text-wrap overflow-hidden"
              value={userInput.title}
              onChange={(e): void => {
                setUserInput({
                  ...userInput,
                  title: e.target.value,
                });
              }}
            ></textarea>
          </div>
        </div>
        <div className="flex w-full h-fit items-stretch">
          <div className="w-2/5 h-fit p-4 -ml-4">{renderLineBreaks(userInput.para)}</div>
          <div className="flex justify-end w-2/5 min-h-fit h-auto ml-auto">
            <textarea
              className="w-full h-full mb-5 p-4 font-light text-wrap overflow-hidden"
              value={userInput.para}
              onChange={(e) => {
                setUserInput({
                  ...userInput,
                  para: e.target.value,
                });
              }}
            ></textarea>
          </div>
        </div>
      </section>
      <section className="flex flex-row flex-wrap z-10 w-full h-auto items-start justify-items-end px-16 pt-40 pb-12 bg-midBlue">
      </section>
    </>
  );
}

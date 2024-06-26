"use client";

import { useState } from "react";
import Image from 'next/image';
import search from "../../../public/Icons/search.svg";
import refresh from "../../../public/Icons/refresh.svg";
import TextSlider from "../lib/text-slider";

export default function Services() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [doShuffle, setDoShuffle] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const repeat = 13; //Number of rows of text to display - will change depending on screen size

  //Disables button for initial load to prevent spam
  setTimeout(() => {
    setIsDisabled(false);
  }, 7000)

  //Triggers shuffle state change + disables button if shuffling aniamtion is active
  const handleClick = ():void => {
    setDoShuffle(true);
    setIsDisabled(true);
    setTimeout(() => {
      console.log("turning off shuffle");
      setIsDisabled(false)
      setDoShuffle(false);
    }, 7000);
  };

  return (
    <>
      <section className="flex flex-column flex-wrap z-10 w-full h-screen max-h-screen overflow-clip items-start justify-start justify-items-start pt-20 bg-gradient-to-b from-midBlue to-deepBlue to-100%">
        <div className="flex flex-nowrap flex-row w-full h-content mx-16">
          <div className="inline min-w-12 self-stretch pr-4">
            <button
              disabled={isDisabled}
              onClick={handleClick}
              className="h-full w-full pb-6 pt-2"
            >
              <Image
                priority
                height={64}
                width={64}
                src={refresh}
                alt="Search our services here"
              />
            </button>
          </div>
          <div className="input-with-icon ml-4 mb-4 px-4 py-2 w-full max-h-20">
            <Image
              priority
              className="h-full max-h-16 pr-4 w-auto"
              height={48}
              width={48}
              src={search}
              alt="Search our services here"
            />
            <input 
              className="input-with-icon-child w-full text-title max-h-16 font-thin"
              value={searchValue}
              onChange={(e):void => {
                setSearchValue(e.target.value)
              }}
            >
            </input>
          </div>
        </div>
        <TextSlider repeat={repeat} shuffle={doShuffle} search={searchValue}/>
      </section>
      <section className="flex flex-row flex-wrap z-10 w-full h-screen max-h-screen overflow-clip py-20 px-16 bg-gradient-to-b from-deepBlue to-midBlue to-100%">
        <div className="border-lightBlue border flex-1 mt-8"></div>
      </section>
    </>
  );
}

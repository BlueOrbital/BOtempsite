"use client";

import { useState } from "react";
import Image from 'next/image';
import search from "../../../public/Icons/search.svg";
import TextSlider from "../lib/text-slider";

export default function Services() {
  const [searchValue, setSearchValue] = useState("");
  const repeat = 13;

  return (
    <section className="flex flex-column flex-wrap z-10 w-full h-screen max-h-screen overflow-clip items-start justify-start justify-items-start pt-20 bg-gradient-to-b from-midBlue to-deepBlue to-100%">
      <div className="input-with-icon mx-16 mb-4 px-4 py-2 w-full max-h-20">
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
      <TextSlider repeat={repeat}/>
    </section>
  );
}

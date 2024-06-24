import { fadeTransitionTimerSelector, fadeTransitionDelaySelector, homeMessages } from "./staticArrays";
import { reorderList } from "./utilities";
import React, { useEffect, useState } from "react";
import type { JSX } from "react";

interface TSProps {
  repeat: number;
  shuffle: boolean;
  search: string;
}

type PrintDivReturn = { 
  jsx:JSX.Element[], 
  currentList:Array<string[]> 
}

type Content = {
  jsx: undefined | Array<JSX.Element>, 
  currentList: undefined | Array<string[]>,
}


export default function TextSlider(
  props: TSProps,
): React.FunctionComponentElement<JSX.Element> {
  const [content, setContent] = useState<Content>({jsx:undefined, currentList:undefined});
  const [initialLoad, setInitialLoad] = useState(true);

  const TransitionSettings = (direction: "in"|"out"):{duration:string, delay:string, opacity:string} => {
    let duration:string;
    let delay:string;
    let opacity:string;
    if (direction === 'in') {
      duration = fadeTransitionTimerSelector[Math.floor(Math.random()*2)];
      delay = fadeTransitionDelaySelector[Math.floor(Math.random()*4)+4]
      initialLoad ? opacity = 'opacity-0' : opacity = `opacity-100`;
    } else if (direction === 'out') {
      duration = fadeTransitionTimerSelector[Math.floor(Math.random()*2)];
      delay = fadeTransitionDelaySelector[Math.floor(Math.random()*4)];
      opacity = `opacity-0`;
    } else {
      throw ((error:Error) => {
        console.log(`Issue with animation type: ${error}`);
      });
    }
    return {
      duration: duration,
      delay: delay,
      opacity: opacity,
    }
  }


  const checkMatch = (search:boolean, searchParam:string, referenceParam:string, givenOpacity:string | null, givenDuration:string | null, givenDelay:string | null):{opacity:string|null, duration:string|null, delay:string|null} => {
    const loopDur = referenceParam.length - searchParam.length + 1;
    let match = false;
    console.log(search);
    if (!search) {
      return {
        opacity: givenOpacity,
        duration: givenDuration,
        delay: givenDelay,
      }
    } else {
      for (let i = 0; i < loopDur; i++) { //Appears to be out by 1 ? i.e last letters don't work ?
        const referenceSection = referenceParam.slice(i, searchParam.length+i);
        if (referenceSection.toLowerCase() === searchParam.toLowerCase()) {
          match = true;
        }
      }
    }
    return match ? {
      opacity: givenOpacity,
      duration: "duration-500",
      delay: "delay-0" }:{
      opacity: "opacity-10",
      duration: "duration-500",
      delay: "delay-0",
    }
  }


  const printDiv = (search:boolean, repeat: number, content: undefined | Array<string[]>, direction: "in"|"out"):PrintDivReturn => {
    const element: JSX.Element[] = [];
    let list: Array<string[]>;
    // console.log(search);
    if (content === undefined) {
      list = [];
    } else {
      list = content;
    }
    for (let i = 0; i < repeat - 1; i++) {
      if (content === undefined) {
        list.push(reorderList(homeMessages));
      }
      element.push(
        <div
          key={`#div${element.length}${i}`}
          className="first:-mt-10 flex flex-row flex-nowrap h-fit w-auto overflow-clip"
        >
          {list[i].map((message: string, index: number) => (
            <React.Fragment key={`${element.length}-${i}-index-${index}`}>
              {index % 3 == 1 && (
                <h2
                  className={`inline mx-2 font-thin min-w-fit overflow-clip transition-opacity ${checkMatch(search,props.search,list[i][index],TransitionSettings(direction).opacity,null, null).opacity} ${checkMatch(search,props.search,list[i][index],null,TransitionSettings(direction).duration,null).duration} ${checkMatch(search,props.search,list[i][index],null,null,TransitionSettings(direction).delay).delay}`}
                >
                  {message}
                </h2>
              )}
              {index % 3 === 2 && (
                <h2
                  className={`inline mx-2 font-light min-w-fit overflow-clip transition-opacity ${checkMatch(search,props.search,list[i][index],TransitionSettings(direction).opacity,null, null).opacity} ${checkMatch(search,props.search,list[i][index],null,TransitionSettings(direction).duration,null).duration} ${checkMatch(search,props.search,list[i][index],null,null,TransitionSettings(direction).delay).delay}`}
                >
                  {message}
                </h2>
              )}
              {index % 3 === 0 && (
                <h2
                  className={`inline mx-2 font-extralight min-w-fit overflow-clip transition-opacity ${checkMatch(search,props.search,list[i][index],TransitionSettings(direction).opacity,null, null).opacity} ${checkMatch(search,props.search,list[i][index],null,TransitionSettings(direction).duration,null).duration} ${checkMatch(search,props.search,list[i][index],null,null,TransitionSettings(direction).delay).delay}`}
                >
                  {message}
                </h2>
              )}
            </React.Fragment>
          ))}
        </div>,
      );
    }
    return {
      "jsx": element,
      "currentList": list, 
    }
  };

  //These two useEffect handle refreshing of the DOM when the user hits the refresh function
  //The first manages the content refresh when refresh is clicked and pre-loads initial content w/ opacity 0
  useEffect((): void => {
    if (initialLoad) {
      setContent(printDiv(false, props.repeat, undefined,"in"));
      setInitialLoad(false);
    } else if (props.shuffle) {
      setContent({
        ...content,
        jsx: printDiv(false, props.repeat, content.currentList, "out").jsx
      });
      setTimeout(() => {
        console.log("Ran timeout");
        setContent(printDiv(false, props.repeat, undefined, "in"));
      }, 4500);
    }
  }, [props.repeat, props.shuffle]);

  // This useEffect runs when initialLoad change sets opacity to 1 i.e. only runs once. 
  // This triggers the intial opacity transition 0-1 as setState runs async within useEffect, thus I used a conditional.
  useEffect((): void => {
    if (content.currentList !== undefined) {
      setContent({
        ...content,
        jsx: printDiv(false, props.repeat, content.currentList, "in").jsx
      });
    }
  }, [initialLoad]);

  //This use effect handles refreshing of the DOM when the user searches 
  useEffect((): void => {
    if (content.currentList !== undefined) {
      setContent({
        ...content,
        jsx: printDiv(true, props.repeat, content.currentList, "in").jsx
      });
    }
  }, [props.search]);


  return (
    <>
      {content !== undefined && (
        <div className="relative -left-11 flex flex-row flex-wrap content-start items-start align-top h-fit w-auto mx-auto justify-evenly overflow-y-clip overflow-x-visible">
          {content.jsx}
        </div>
      )}
    </>
  );
}

import { fadeTransitionTimerSelector, fadeTransitionDelaySelector, textSliderMessages } from "./staticArrays";
import { reorderList } from "./utilities";
import React, { useCallback, useEffect, useReducer, useState} from "react";
import type { JSX } from "react";

interface TSProps {
  repeat: number,
  shuffle: boolean,
  search: null | string,
}

type PrintDivReturn = { 
  jsx: JSX.Element[], 
  currentList: string[][],
}

type Content = {
  initialLoad: boolean,
  animationMode: boolean,
  jsx: undefined | JSX.Element[], 
  currentList: undefined | string[][],
}

type ContentReducerAction = 
| { type: "TOGGLE_INITIAL"; payload: boolean}
| { type: "CHANGE_MODE"; payload: boolean }
| { type: "LOAD"; payload: {  
    jsx: JSX.Element[], 
    currentList: string[][],
  }}
| { type: "UPDATE_JSX"; payload: JSX.Element[] };


const contentReducer = (state:Content, action:ContentReducerAction) => {
  switch (action.type) {
    case "TOGGLE_INITIAL":
      return {...state, initialLoad: action.payload};
    case "CHANGE_MODE":
      return { ...state, animationMode: action.payload };
    case "LOAD":
      return {...state, jsx: action.payload.jsx, currentList:action.payload.currentList};
    case "UPDATE_JSX":
      return { ...state, jsx: action.payload };
    default:
      throw new Error("Unhandled action type");
  }
}


export default function TextSlider(
  props: TSProps,
): React.FunctionComponentElement<JSX.Element> {
  const [content, dispatch] = useReducer(contentReducer, {
    initialLoad: true,
    animationMode: true,
    jsx: undefined,
    currentList: undefined
  });
  const [initialAnimation, setInitialAnimation] = useState(true);

  const TransitionSettings = useCallback((direction: "in"|"out"):{duration:string, delay:string, opacity:string} => {
    let duration:string;
    let delay:string;
    let opacity:string;
    if (direction === 'in') {
      duration = fadeTransitionTimerSelector[Math.floor(Math.random()*2)];
      delay = fadeTransitionDelaySelector[Math.floor(Math.random()*4)+4]
      content.initialLoad ? opacity = 'opacity-0' : opacity = `opacity-100`;
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
  },[content.initialLoad]);

  const checkMatch = useCallback((search:boolean, referenceParam:string, givenOpacity:string | null, givenDuration:string | null, givenDelay:string | null):{opacity:string|null, duration:string|null, delay:string|null} => {
    if (!search || props.search === null) {
      return {
        opacity: givenOpacity,
        duration: givenDuration,
        delay: givenDelay,
      }
    }
    const loopDur = referenceParam.length - props.search.length + 1;
    let match = false;
    for (let i = 0; i < loopDur; i++) { //Appears to be out by 1 ? i.e last letters don't work ?
      const referenceSection = referenceParam.slice(i, props.search.length+i);
      if (referenceSection.toLowerCase() === props.search.toLowerCase()) {
        match = true;
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
  },[props.search]);

  const printDiv = useCallback((search:boolean, repeat: number, reset:boolean, direction: "in"|"out"):PrintDivReturn => {
    const element: JSX.Element[] = [];
    let list: Array<string[]>;
    if (direction === "in" && search) {
      dispatch({type: "CHANGE_MODE", payload: false});
    } else {
      dispatch({type: "CHANGE_MODE", payload: true});
    }
    if (reset || content.currentList === undefined) {
      list = [];
    } else {
      list = content.currentList;
    }
    for (let i = 0; i < repeat - 1; i++) {
      if (reset || content.currentList === undefined) {
        list.push(reorderList(textSliderMessages));
      }
      element.push(
        <div
          key={`#div${element.length}${i}`}
          className="first:-mt-10 flex flex-row flex-nowrap h-fit w-auto overflow-clip"
        >
          {list[i].map((message: string, index: number) => (
            <React.Fragment key={`${element.length}-${i}-index-${index}`}>
              {index % 3 === 1 && (
                <a 
                  href={"#"}
                  className={`inline mx-2 min-w-fit overflow-clip transition-opacity ${checkMatch(search,list[i][index],TransitionSettings(direction).opacity,null, null).opacity} ${checkMatch(search,list[i][index],null,TransitionSettings(direction).duration,null).duration} ${checkMatch(search,list[i][index],null,null,TransitionSettings(direction).delay).delay}`}
                >
                  <h2 className="font-thin">
                    {message}
                  </h2>
                </a>
              )}
              {index % 3 === 2 && (
                <a 
                  href={"#"}
                  className={`inline mx-2 min-w-fit overflow-clip transition-opacity ${checkMatch(search,list[i][index],TransitionSettings(direction).opacity,null, null).opacity} ${checkMatch(search,list[i][index],null,TransitionSettings(direction).duration,null).duration} ${checkMatch(search,list[i][index],null,null,TransitionSettings(direction).delay).delay}`}
                >
                  <h2 className="font-light">
                    {message}
                  </h2>
                </a>
              )}
              {index % 3 === 0 && (
                <a 
                  href={"#"}
                  className={`inline mx-2 min-w-fit minoverflow-clip transition-opacity ${checkMatch(search,list[i][index],TransitionSettings(direction).opacity,null, null).opacity} ${checkMatch(search,list[i][index],null,TransitionSettings(direction).duration,null).duration} ${checkMatch(search,list[i][index],null,null,TransitionSettings(direction).delay).delay}`}
                >
                  <h2 className="font-extralight">
                    {message}
                  </h2>
                </a>
              )}
            </React.Fragment>
          ))}
        </div>,
      );
    }
    content.initialLoad ? dispatch({type: "TOGGLE_INITIAL", payload:false}) : null;
    return {
      "jsx": element,
      "currentList": list,
    }
  }, [content.initialLoad, content.currentList, checkMatch, TransitionSettings]);

  useEffect((): void => {
    if (content.initialLoad) {
      console.log("ranIf1");
      dispatch({type: "LOAD", payload: printDiv(false, props.repeat, true, "in")});
    } else if (initialAnimation) {
      console.log("ranIf3");
      setTimeout(() => { //Gives time for the first to load
        dispatch({type: "UPDATE_JSX", payload: printDiv(false, props.repeat, false, "in").jsx});
      }, 500);
    } else if (props.shuffle && !content.animationMode) {
      console.log("ranIf2");
      dispatch({type: "UPDATE_JSX", payload: printDiv(false, props.repeat, false, "out").jsx});
      setTimeout(() => {
        dispatch({type: "LOAD", payload: printDiv(false, props.repeat, true, "in")});
      }, 4500);
    } else if (!props.shuffle && !content.animationMode){
      console.log("ranIf4");
      dispatch({type: "UPDATE_JSX", payload: printDiv(true, props.repeat, false, "in").jsx});
    }
  }, [props.repeat, content.initialLoad, props.shuffle, props.search, content.animationMode, printDiv, initialAnimation]);

  useEffect((): void => {
    console.log(content.animationMode);
    if (initialAnimation) {
      console.log("starting anim mode1");
      setTimeout(() => {
        console.log("timeout anim mode1");
        setInitialAnimation(false);
        dispatch({type: "CHANGE_MODE", payload: false});
      }, 6750)
    } else if (content.animationMode && !initialAnimation) {
      console.log("starting anim mode2");
      setTimeout(() => {
        console.log("timeout anim mode2");
        dispatch({type: "CHANGE_MODE", payload: false});
      }, 10000)
    }
  }, [content.animationMode, initialAnimation]);

  return (
    <>
      {content.jsx !== undefined && (
        <div className="relative -left-11 flex flex-row flex-wrap content-start items-start align-top h-fit w-auto mx-auto justify-evenly overflow-y-clip overflow-x-visible">
          {content.jsx}
        </div>
      )}
    </>
  );
}

import { fadeInAnimationSelector, fadeOutAnimationSelector, homeMessages } from "./staticArrays";
import { reorderList } from "./utilities";
import React, { useEffect, useState } from "react";
import type { JSX } from "react";

interface TSProps {
  repeat: number;
  shuffle: boolean;
}

type PrintDivReturn = { 
  jsx:JSX.Element[], 
  currentList:Array<string[]> 
}

type Content = {
  jsx: undefined | Array<JSX.Element>, 
  currentList: undefined | Array<string[]>,
}

const Animate = (direction: "in"|"out"):string => {
  let animation:string; 
  if (direction === 'in') {
    animation = `${fadeInAnimationSelector[Math.floor(Math.random() * (fadeInAnimationSelector.length-1))]} opacity-0`
  } else if (direction === 'out') {
    animation = `${fadeOutAnimationSelector[Math.floor(Math.random() * (fadeOutAnimationSelector.length-1))]} opacity-1`
  } else {
    throw ((error:Error) => {
      console.log(`Issue with animation type: ${error}`);
    });
  }
  return animation;
}

export default function TextSlider(
  props: TSProps,
): React.FunctionComponentElement<JSX.Element> {
  const [content, setContent] = useState<Content>({jsx:undefined, currentList:undefined});
  const [initialLoad, setInitialLoad] = useState(true);

  const printDiv = (repeat: number, content: undefined | Array<string[]>, direction: "in"|"out"):PrintDivReturn => {
    const element: JSX.Element[] = [];
    let list: Array<string[]>;
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
              {index % 2 !== 0 && (
                <h2
                  className={`${Animate(direction)} inline mx-2 font-thin min-w-fit overflow-clip}`}
                >
                  {message}
                </h2>
              )}
              {index % 2 === 0 && (
                <h2
                  className={`${Animate(direction)} inline mx-2 font-light min-w-fit overflow-clip}`}
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

  useEffect((): void => {
    if (initialLoad) {
      setInitialLoad(false);
      setContent(printDiv(props.repeat, undefined,"in"));
    } else {
      setContent({
        ...content,
        jsx: printDiv(props.repeat, content.currentList, "out").jsx
      });
      setTimeout(() => {
        console.log("Ran timeout");
        setContent(printDiv(props.repeat, undefined, "in"));
      }, 4500);
    }
  }, [props.repeat, props.shuffle]);

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

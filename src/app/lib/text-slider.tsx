import { fadeAnimationSelector, homeMessages } from "./staticArrays";
import { reorderList } from "./utilities";
import React, { useEffect, useState } from "react";
import type { JSX } from "react";

interface TSProps {
  repeat: number;
}

export default function TextSlider(
  props: TSProps,
): React.FunctionComponentElement<JSX.Element> {
  const [content, setContent] = useState<Array<undefined | JSX.Element>>([]);
  const printDiv = (repeat: number): Array<JSX.Element> => {
    const element: Array<JSX.Element> = [];
    for (let i = 0; i < repeat - 1; i++) {
      const reorderedList = reorderList(homeMessages);
      element.push(
        <div
          key={`#div${element.length}${i}`}
          className="first:-mt-10 flex flex-row flex-nowrap h-fit w-auto overflow-clip"
        >
          {reorderedList.map((message: string, index: number) => (
            <React.Fragment key={`${element.length}-${i}-index-${index}`}>
              {index % 2 !== 0 && (
                <h2
                  className={`${
                    fadeAnimationSelector[Math.floor(Math.random() * 4)]
                  } opacity-0 inline mx-2 font-thin min-w-fit overflow-clip}`}
                >
                  {message}
                </h2>
              )}
              {index % 2 === 0 && (
                <h2
                  className={`${fadeAnimationSelector[Math.floor(Math.random() * 4)]} opacity-0 inline mx-2 font-light min-w-fit overflow-clip}`}
                >
                  {message}
                </h2>
              )}
            </React.Fragment>
          ))}
        </div>,
      );
    }
    return element;
  };

  useEffect((): void => {
    return setContent(printDiv(props.repeat));
  }, [props.repeat]);

  return (
    <>
      {content !== undefined && (
        <div className="flex flex-row flex-wrap content-start items-start align-top h-fit w-auto mx-auto justify-evenly overflow-clip">
          {content}
        </div>
      )}
    </>
  );
}

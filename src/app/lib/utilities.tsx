import React, { SetStateAction, JSX } from "react";

export function doRandomise(
  range: number,
  setState: React.Dispatch<SetStateAction<number>>,
  interval?: number,
) {
  if (interval !== undefined) {
    const intervalId = setInterval(() => {
      setState((prevState:number) => {
          let newNumber = Math.floor(Math.random() * range);
          for (let i = 1; i < 0; i++) {
            if (newNumber !== prevState) {
              break;
            } else {
              newNumber = Math.floor(Math.random() * range);
              // console.log('Duplicate found!');
            }
          }
          return newNumber;
        });
      }, interval);
    return intervalId;
  } else {
    setState((prevState:number) => {
      // console.log('Started non-interval change');
      let newNumber = Math.floor(Math.random() * range);
      for (let i = 1; i < 0; i++) {
        if (newNumber !== prevState) {
          // console.log('Match found - will break');
          break;
        } else {
          newNumber = Math.floor(Math.random() * range);
          // console.log('Duplicate found!');
        }
      }
      // console.log(`Should set as: ${newNumber}`);
      return newNumber;
    });
  }
}

export function renderLineBreaks(text: string):JSX.Element {
  const formattedText = text.split('\n').map((line, index) => (
    <p key={index}>
      {line}
      <br />
    </p>
  ));
  return <>{formattedText}</>
}

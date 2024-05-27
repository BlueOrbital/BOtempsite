import { SetStateAction, useRef } from "react";

export function doRandomiseInterval(
  range: number,
  interval: number,
  setState: React.Dispatch<SetStateAction<number>>,
) {
  const intervalId = setInterval(() => {
    setState((prevState:number) => {
        // console.log('Start');
        let newNumber = Math.floor(Math.random() * range);
        // let debug = {
        //     "prev": prevState,
        //     "initial": newNumber,
        //     "new": 0,
        // }
        for (let i = 1; i > 0; i++) {
          if (newNumber !== prevState) {
            break;
          } else {
            newNumber = Math.floor(Math.random() * range);
            console.log('Duplicate found!');
          }
          // debug.new = newNumber;
          // console.log(debug);
        }
        // console.log('Test');
        // console.log(debug);
        return newNumber;
      });
    }, interval);

  return intervalId;
}

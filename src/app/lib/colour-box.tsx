import { useState } from "react";
import { toDynamicColors, fromDynamicColors, beforeFromDynamicColors, beforeToDynamicColors, afterToDynamicColors } from "./staticArrays";

export default function colourBox():React.ReactElement {
    const [colorTo, setColorTo] = useState({init:'to-midGreyBlue', before:'before:to-midblue'});
    const [colorFrom, setColorFrom] = useState({init:'from-midBlue', before:'before:from-lightGreyBlue'});
    const [afterBlock, setAfterBlock] = useState({clicked:false, to:'after:to-midGreyBlue', from:'after:from-midBlue', animation:'after:animate-none'})

    // const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>):void => {
    const handleClick = ():void => {
        const rand1 = Math.floor(Math.random() * 30);
        const rand2 = Math.floor(Math.random() * 30);
        const rand3 = Math.floor(Math.random() * 30);
        const rand4 = Math.floor(Math.random() * 30);

        // if (event.target instanceof HTMLElement) {
        //     const targetElement = event.target;
        //     console.log('ran');
        //     targetElement.classList.remove('animate');
        //     void targetElement.offsetWidth; // trigger a reflow
        //     targetElement.classList.add('animate');
        // }

        setAfterBlock({
            ...afterBlock,
            clicked: true,
            animation: 'after:animate-fade-out',
        });
        setColorTo({
            init: toDynamicColors[rand1],
            before: beforeToDynamicColors[rand2],
        });
        setColorFrom({
            init: fromDynamicColors[rand3],
            before: beforeFromDynamicColors[rand4],
        });
        setTimeout(() => {
            setAfterBlock({
                clicked: false,
                to: afterToDynamicColors[rand1],
                from: afterToDynamicColors[rand3],
                animation: 'after:animate-none',
            }) 
        }, 1500);
    }

    return (
        <div onClick={handleClick} className={`w-3/4 h-128 rounded bg-gradient-to-br ${colorTo.init} ${colorFrom.init} before:animate-fade-in before:block before:h-128 before:rounded before:bg-gradient-to-br ${colorTo.before} ${colorFrom.before} before:opacity-100 before:transition before:duration-1000 before:hover:opacity-0 ${afterBlock.clicked ? `after:block after:relative after:-top-128 after:h-128 after:rounded after:bg-gradient-to-br ${afterBlock.from} ${afterBlock.to} ${afterBlock.animation}` : `after:hidden`}`}></div>
    );
}
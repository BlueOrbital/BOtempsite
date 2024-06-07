import { useState } from "react";
import { toDynamicColors, fromDynamicColors, beforeFromDynamicColors, beforeToDynamicColors, afterToDynamicColors, afterFromDynamicColors } from "./staticArrays";

interface CBProps {
    width: string;
    height: string; 
}

export default function ColourBox(props: CBProps):React.FunctionComponentElement<JSX.Element> {
    const [colorTo, setColorTo] = useState({init:'to-midGreyBlue', before:'before:to-midblue'});
    const [colorFrom, setColorFrom] = useState({init:'from-midBlue', before:'before:from-lightGreyBlue'});
    const [afterBlock, setAfterBlock] = useState({clicked:false, to:'after:to-midGreyBlue', from:'after:from-midBlue'})

    const handleClick = ():void => {
        const rand1 = Math.floor(Math.random() * 30);
        const rand2 = Math.floor(Math.random() * 30);
        const rand3 = Math.floor(Math.random() * 30);
        const rand4 = Math.floor(Math.random() * 30);

        setAfterBlock({
            ...afterBlock,
            clicked: true,
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
                from: afterFromDynamicColors[rand3],
            })
        }, 1500);
    }

    return (
        <div onClick={handleClick} className={`${props.width} ${props.height} rounded bg-gradient-to-br ${colorTo.init} ${colorFrom.init} before:block before:animate-fade-in before:${props.height} before:rounded before:bg-gradient-to-br ${colorTo.before} ${colorFrom.before} before:opacity-100 before:transition before:duration-1000 before:hover:opacity-0 ${afterBlock.clicked ? `after:block after:relative after:-top-128 after:${props.height} after:rounded after:bg-gradient-to-br ${afterBlock.from} ${afterBlock.to} after:animate-fade-out after:z-50` : `after:animate-none`}`}></div>
    );
}
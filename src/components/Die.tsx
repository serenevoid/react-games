import { MouseEventHandler } from "react";

interface props {
    key: string;
    value: string;
    isHeld: boolean;
    toggleHold: MouseEventHandler;
}

const Die = (props: props) => {
    return (
        <div className={props.isHeld ? "die held" : "die"} onClick={props.toggleHold}>
            <h2>{props.value}</h2>
        </div>
    )
}

export default Die;

import { MouseEventHandler } from "react";

interface props {
    key: string;
    value: string;
    swap: MouseEventHandler;
}

const Sliding_Cell = (props: props) => {
    return (
        <div className={props.value !== "0" ? "slide_cell" : "slide_cell empty_cell"} onClick={props.swap}>
            <h2>{props.value != "0" ? props.value : ""}</h2>
        </div>
    )
}

export default Sliding_Cell;

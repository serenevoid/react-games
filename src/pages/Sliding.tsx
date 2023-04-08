import React from "react";
import Sliding_Cell from "../components/Sliding_Cell";

const Sliding = () => {

    const [cellValues, setCellValues] = React.useState([0]);
    const [cells, setCells] = React.useState([<Sliding_Cell key="0" value="0" swap={() => swap(0)} />]);
    const [complete, setComplete] = React.useState(false);

    React.useEffect(() => {
        setGame();
    }, []);

    function setGame() {
        let temp = [];
        for (let i = 1; i < 16; i++) {
            temp.push(i);
        }
        temp.sort(() => Math.random() - 0.5);
        temp.push(0);
        // Check if the random matrix formed is solvable or else make it solvable
        let solvable = 0;
        for (let i = 0; i < temp.length; i++) {
            for (let j = i + 1; j < temp.length; j++) {
                if (temp[i] > temp[j]) {
                    solvable += 1;
                }
            }
        }
        if (solvable % 2 == 0) {
            let tmp = temp[1];
            temp[1] = temp[2];
            temp[2] = tmp;
        }
        setCellValues(temp);
        setComplete(false);
    }

    function swap(key: number) {
        let cell_index = 0;
        let empty_index = 0;
        for (let i = 0; i < cellValues.length; i++) {
            let cell = cellValues[i];
            if (cell == 0) empty_index = i;
            if (cell == key) cell_index = i;
        }
        if (((cell_index) === (empty_index - 4)) ||
            ((cell_index) === (empty_index + 4)) ||
            ((cell_index) === (empty_index - 1)) ||
            ((cell_index) === (empty_index + 1))) {
            let clone = [...cellValues];
            let temp = clone[cell_index];
            clone[cell_index] = clone[empty_index];
            clone[empty_index] = temp;
            setCellValues(clone);
        }
    }

    React.useEffect(() => {
        const cells_temp = cellValues.map(cell => {
            return <Sliding_Cell key={cell.toString()} value={cell.toString()} swap={() => swap(cell)} />;
        });
        setCells(cells_temp);
        let finalValues = [];
        for (let i = 1; i < 16; i++) {
            finalValues.push(i);
        }
        finalValues.push(0);
        if (cellValues.toString() === finalValues.toString()) {
            setComplete(true);
        }
    }, [cellValues]);

    return (
        <div className={complete ? "container correct": "container"}>
            <h1>
                Sliding Puzzle
            </h1>
            <p>
                Move the blocks one at a time.
            </p>
            <div className="slide_box" id="box">
                {cells}
            </div>
            <div
                className="button new_game"
                onClick={setGame}
            >
                New Game
            </div>
        </div>
    )
}

export default Sliding;

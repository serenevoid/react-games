import React from "react";
import "../style.css";
import Die from "../components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

const Tenzies = () => {

    const [dieValues, setDieValues] = React.useState(rollDice());
    const [tenzies, setTenzies] = React.useState(false);
    const [visitors, setVisitors] = React.useState(0);

    React.useEffect(() => {
        if (dieValues.every(die => die.isHeld)) {
            const first = dieValues[0].value;
            const allSameValues = dieValues.every(die => die.value === first);
            if (allSameValues) {
                setTenzies(true);
            }
        }
    }, [dieValues]);

    React.useEffect(() => {
        fetch("https://api.countapi.xyz/hit/sv_tenzies/deployed")
            .then(res => res.json())
            .then(res => {
                setVisitors(res.value);
            })
    }, []);

    function generateDie() {
        return {
            id: nanoid(),
            value: Math.ceil(Math.random() * 6),
            isHeld: false
        };
    }

    function rollDice() {
        const newValues = [];
        for (let i = 0; i < 10; i++) {
            newValues.push(generateDie());
        }
        return newValues;
    }

    function roll() {
        if (!tenzies) {
            setDieValues(currentValues => {
                return currentValues.map(die => {
                    if (!die.isHeld) {
                        return generateDie();
                    } else
                        return die;
                });
            });
        }
    }

    function reset() {
        setDieValues(rollDice());
        setTenzies(false);
    }

    function toggleHold(key: string) {
        setDieValues(dieValues => dieValues.map(die => {
            if (die.id === key) {
                die.isHeld = !die.isHeld;
            }
            return die;
        }));
    }

    const dice = dieValues.map(die => {
        return <Die key={die.id} value={die.value.toString()} isHeld={die.isHeld} toggleHold={() => toggleHold(die.id)} />
    })

    return (
        <div className="container">
            <h1>Tenzies</h1>
            <p>
                Roll until all slots have the same number. <br />
                Click a slot to freeze it.
            </p>
            <div className="die_container">
                {dice}
            </div>
            <div
                className={tenzies ? "button new_game" : "button"}
                onClick={tenzies ? reset : roll}
            >
                {tenzies ? "New Game" : "Roll"}
            </div>
            <p>Total Visitors: {visitors}</p>
            {tenzies && <Confetti />}
        </div>
    )

}

export default Tenzies;

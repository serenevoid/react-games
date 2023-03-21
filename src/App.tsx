import "./style.css";
import Die from "./components/Die";

const App = () => {
    return (
        <div className="container">
            <div className="die_container">
                <Die value="1"/>
                <Die value="2"/>
                <Die value="3"/>
                <Die value="3"/>
                <Die value="4"/>
                <Die value="3"/>
                <Die value="5"/>
                <Die value="6"/>
                <Die value="4"/>
                <Die value="5"/>
            </div>
        </div>
    )
}

export default App;

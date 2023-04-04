import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tenzies from "./pages/Tenzies";
import Sliding from "./pages/Sliding";
import "./style.css";
import React from "react";

const App = () => {

    const [visitors, setVisitors] = React.useState();

    React.useEffect(() => {
        if (window.location.hostname === "localhost")
            return;
        fetch("https://api.countapi.xyz/hit/sv_react_games")
            .then(res => res.json())
            .then(res => {
                setVisitors(res.value);
            })
    }, []);

    return (
        <div>
            <Router>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/tenzies" element={<Tenzies />} />
                    <Route path="/sliding-numbers" element={<Sliding />} />
                </Routes>
            </Router>
            <br />
            <div className="container stats">
                Total Visitors: {visitors}
            </div>
        </div>
    )

}

export default App;

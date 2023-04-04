import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tenzies from "./pages/Tenzies";
import Sliding from "./pages/Sliding";
import "./style.css";

const App = () => {

    return (
        <div>
            <Router>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/tenzies" element={<Tenzies />} />
                    <Route path="/sliding-numbers" element={<Sliding />} />
                </Routes>
            </Router>
        </div>
    )

}

export default App;

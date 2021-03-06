import "./App.css";
import Login from "./component/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </div>
    );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import Board from "./Components/Board/Board";

function App() {
    const [pieces, setPieces] = useState();

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("board.json");
            const pieces = await response.json();
            setPieces(pieces);
        }
        fetchData();
    }, []);

    return (
        <div className="App">
            <Board pieces={pieces} />
        </div>
    );
}

export default App;

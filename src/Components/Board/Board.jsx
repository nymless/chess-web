import { useState } from "react";
import Square from "../Square/Square";
import "./Board.css";
import useMapPiecesToBoard from "./hook/useMapPiecesToBoard";
import useCreateInitBoard from "./hook/useCreateInitBoard";
import PropTypes from "prop-types";

function Board(props) {
    const initBoard = useCreateInitBoard();
    const [board, setBoard] = useState(initBoard);
    useMapPiecesToBoard(props.pieces, setBoard);

    return (
        <div className="Board">
            <div className="Squares">
                {board.map((rowSquare, rowIndex) => {
                    return rowSquare.map((code, index) => {
                        const isWhite = (rowIndex + 1 + (index + 1)) % 2 === 0;
                        return (
                            <Square
                                key={String(rowIndex) + String(index)}
                                code={code}
                                isWhite={isWhite}
                            />
                        );
                    });
                })}
            </div>
        </div>
    );
}

Board.propTypes = {
    pieces: PropTypes.objectOf(PropTypes.string),
};

export default Board;

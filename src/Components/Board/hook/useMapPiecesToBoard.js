import { useEffect } from "react";

const codes = {
    pnw: "\u2659",
    rkw: "\u2656",
    ktw: "\u2658",
    bpw: "\u2657",
    qnw: "\u2655",
    kgw: "\u2654",
    pnb: "\u265F",
    rkb: "\u265C",
    ktb: "\u265E",
    bpb: "\u265D",
    qnb: "\u265B",
    kgb: "\u265A",
};

const files = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
};

const ranks = {
    1: 7,
    2: 6,
    3: 5,
    4: 4,
    5: 3,
    6: 2,
    7: 1,
    8: 0,
};

function useMapPiecesToBoard(pieces, setBoard) {
    useEffect(() => {
        if (pieces) {
            const newBoard = new Array(8);
            for (let i = 0; i < 8; i++) {
                newBoard[i] = new Array(8).fill("");
            }
            for (const [key, value] of Object.entries(pieces)) {
                const file = key[0];
                const rank = key[1];
                const code = codes[value];
                const i = ranks[rank];
                const j = files[file];
                newBoard[i][j] = code;
            }
            setBoard(newBoard);
        }
    }, [pieces, setBoard]);
}

export default useMapPiecesToBoard;

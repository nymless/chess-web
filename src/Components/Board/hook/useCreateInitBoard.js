function useCreateInitBoard() {
    const initBoard = new Array(8);
    for (let i = 0; i < 8; i++) {
        initBoard[i] = new Array(8).fill("");
    }
    return initBoard;
}

export default useCreateInitBoard;

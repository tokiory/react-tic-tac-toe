import {SquareValue} from "@/components/board/Board.types.ts";

const WINNER_BOARD = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

export default function(board: SquareValue[]) {
    for (const winComposition of WINNER_BOARD) {
        const isWin = board
            .filter((_, idx) => winComposition.includes(idx))
            .every(character => character === board[winComposition[0]]);

        if (isWin && board[winComposition[0]]) {
            return board[winComposition[0]];
        }
    }

    return null;
}
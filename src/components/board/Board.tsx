import styles from './Board.module.scss';
import {Square} from "@/components/square/Square.tsx";
import {useState} from "react";
import {SquareValue} from "@/components/board/Board.types.ts";
import winner from "@/utils/winner.ts";

function Board() {
    const [board, setBoard] = useState(
        Array.from({length: 9}, () => null) as Array<SquareValue>
    );

    const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');


    // Данная штука вычисляется без useState, ибо React каждый раз прогоняет функцию компонента
    // при изменении других стейтов.
    const playerWon = winner(board);
    let status;

    if (playerWon) {
        status = 'Победитель: ' + playerWon;
    } else if (!board.includes(null)) {
        status = 'Ничья!';
    } else {
        status = 'Следующий игрок: ' + currentPlayer;
    }


    const togglePlayer = () => {
        if (currentPlayer === 'X') {
            setCurrentPlayer('O');
        } else {
            setCurrentPlayer('X');
        }
    };

    const handleClick = (idx: number) => {
        if (board[idx] || playerWon) {
            return;
        }

        const tmpBoard = [...board];
        tmpBoard[idx] = currentPlayer;
        setBoard(tmpBoard);
        togglePlayer();
    };


    return (
        <div className={styles.board}>
            <div className={styles.status}>{status}</div>
            <div className={styles.game}>
                {
                    board.map((cell, idx) => (
                        <Square value={cell} onClick={() => handleClick(idx)} />
                    ))
                }
            </div>
        </div>
    )
}

export {Board};
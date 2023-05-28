import {SquareValue} from "@/components/board/Board.types.ts";

export interface SquareProps {
    value: SquareValue;
    onClick: () => void;
}

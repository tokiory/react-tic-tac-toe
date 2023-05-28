import classes from "./square.module.scss";
import {SquareProps} from "./Square.types.ts";

function Square({value, onClick}: SquareProps) {
    return (
        <div onClick={onClick} className={classes.square}>
            {value}
        </div>
    );
}

export {Square};
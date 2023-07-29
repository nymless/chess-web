import { memo } from "react";
import classNames from "classnames";
import "./Square.css";
import PropTypes from "prop-types";

const Square = memo(
    function Square(props) {
        const className = classNames("Square", {
            "Square-white": props.isWhite,
        });
        return <div className={className}>{props.code}</div>;
    },
    (prev, next) => {
        return prev.code === next.code;
    }
);

Square.propTypes = {
    isWhite: PropTypes.bool.isRequired,
    code: PropTypes.string,
};

export default Square;

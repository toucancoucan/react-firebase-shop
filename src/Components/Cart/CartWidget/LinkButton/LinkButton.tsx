import React from "react";
import {Link} from "react-router-dom";
import combineClassNames from "../../../../Utility/сombineClassNames";
import styles from "./LinkButton.module.scss";


type mapStateToProps = {
    url: string,
    text: string,
    color: "violet" | "dark"
    className?: string,
    onClick?: () => void
}

type propsType = mapStateToProps;

let LinkButton: React.FC<propsType> = (props) => {
    return (
        <Link onClick={props.onClick} to={props.url}
              className={combineClassNames(styles.button, props.className, props.color === "violet" ? styles.violet : styles.dark)}>
            {props.text}
        </Link>
    )
}

export default LinkButton;

import React from "react";
import styles from "./BlackButton.module.scss"
import combineClassNames from "../../../Functions/сombineClassNames";


type mapStateToProps = {
    text: string,
    className?: string,
    onClick?: () => void,
    type: "button" | "submit" | "reset" | undefined
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let BlackButton: React.FC<propsType> = (props) => {
    return (
        <button type={props.type} className={combineClassNames(props.className, styles.button)}
                onClick={() => props.onClick?.()}>
            {props.text}
        </button>
    )
}

export default BlackButton;

import React from "react";
import styles from "./Tooltip.module.scss";
import combineClassNames from "../../../Functions/сombineClassNames";

type mapStateToProps = {
    className: string,
    text: string,
    isGreen?: boolean
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let Tooltip: React.FC<propsType> = (props) => {
    return (
        <span className={
            combineClassNames(styles.tooltip, `${props.isGreen ? styles.greenTooltip : ''}`, props.className)}>
            {props.text}
        </span>
    )
}

export default Tooltip;

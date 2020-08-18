import React from "react";
import styles from "./SpinnerArrow.module.scss"
import LeftRightArrow from "../../Common/Arrows/LeftRightArrow";
import combineClassNames from "../../../Utility/сombineClassNames";

type mapStateToPropsType = {
    forwardOrBackward: "forward" | "backward"
}
type mapDispatchToPropsType = {
    changeItem: (value: number) => void
}
type propsType = mapStateToPropsType & mapDispatchToPropsType;

let SpinnerArrow: React.FC<propsType> = (props) => {
    const isForward = props.forwardOrBackward === "forward";
    let orientationStyle = isForward ? styles.forward : styles.backward;

    return (
        <LeftRightArrow forwardOrBackward={props.forwardOrBackward}
                        className={combineClassNames(styles.icon, orientationStyle)} changeItem={props.changeItem}/>

    )
}

export default SpinnerArrow;
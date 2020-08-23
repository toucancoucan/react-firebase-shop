import React from "react";
import styles from "./LeftRightArrow.module.scss"
import combineClassNames from "../../../Functions/сombineClassNames";
import {IconContext} from "react-icons";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io/index";

type mapStateToPropsType = {
    forwardOrBackward: "forward" | "backward"
    className: string
}
type mapDispatchToPropsType = {
    changeItem: (value: number) => void
}

type propsType = mapStateToPropsType & mapDispatchToPropsType;


let LeftRightArrow: React.FC<propsType> = (props) => {
    const isForward = props.forwardOrBackward === "forward";
    const onClick = () => {
        props.changeItem(isForward ? 1 : -1);
    }


    let orientationStyle = isForward ? styles.forward : styles.backward;
    return (
        <button onClick={onClick} className={combineClassNames(styles.wrap, orientationStyle)}>
            <IconContext.Provider value={{className: props.className}}>
                {isForward ? <IoIosArrowForward/> : <IoIosArrowBack/>}
            </IconContext.Provider>
        </button>
    )
}

export default LeftRightArrow;
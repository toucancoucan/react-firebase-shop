import React from "react";
import {IconContext} from "react-icons";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import styles from "./CarouselArrow.module.scss";
import combineClassNames from "../../../Utility/сombineClassNames";
import {getTextColorStyle} from "../ItemCarousel/ItemCarousel";

type mapStateToPropsType = {
    forwardOrBackward: "forward" | "backward"
    color: "white" | "black" | undefined
}
type mapDispatchToPropsType = {
    changeItem: (value: number) => void
}

type propsType = mapStateToPropsType & mapDispatchToPropsType;


let CarouselArrow: React.FC<propsType> = (props) => {
    const isForward = props.forwardOrBackward === "forward"
    const onClick = () => {
        props.changeItem(isForward ? 1 : -1);
    }


    let orientationStyle = isForward ? styles.forward : styles.backward;
    return (
        <button onClick={onClick} className={combineClassNames(styles.wrap, orientationStyle)}>
            <IconContext.Provider value={{className: combineClassNames(styles.icon, getTextColorStyle(props.color))}}>
                {isForward ? <IoIosArrowForward/> : <IoIosArrowBack/>}
            </IconContext.Provider>
        </button>
    )
}

export default CarouselArrow;
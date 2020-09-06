import React from "react";
import styles from "./CarouselArrow.module.scss";
import LeftRightArrow from "../../../Common/Arrows/LeftRightArrow";
import combineClassNames from "../../../../Functions/сombineClassNames";
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
    return (
        <LeftRightArrow forwardOrBackward={props.forwardOrBackward}
                        className={combineClassNames(styles.icon, getTextColorStyle(props.color))}
                        changeItem={props.changeItem}/>
    )
}

export default CarouselArrow;
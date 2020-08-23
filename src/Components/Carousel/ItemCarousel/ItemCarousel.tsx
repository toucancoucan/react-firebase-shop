import React, {useState} from "react";
import styles from "./ItemCarousel.module.scss"
import {CarouselItemType} from "../../../Reducers/CarouselReducer";
import combineClassNames from "../../../Functions/сombineClassNames";
import {Link} from "react-router-dom";
import routes from "../../../Constants/Routes";

type mapStateToPropsType = CarouselItemType
type mapDispatchToPropsType = {}

type propsType = mapStateToPropsType & mapDispatchToPropsType;


let ItemCarousel: React.FC<propsType> = (props) => {
    const [show, setShow] = useState(false);
    const [prevPhotoUrl, setPrevPhotoUrl] = useState("");

    if (prevPhotoUrl !== props.photoUrl) {
        setPrevPhotoUrl(props.photoUrl)
        setShow(true)
    }

    const animationStyle: any = {};
    animationStyle[styles.show] = show;


    return (
        <div onTransitionEnd={() => setShow(false)} className={combineClassNames(styles.item, animationStyle)}>

            <div className={combineClassNames(styles.wrapper, getTextColorStyle(props.stringColor))}>
                <div
                    className={combineClassNames(styles.subString, getPositionStyle(props.position))}>{props.subString}</div>
                <div
                    className={combineClassNames(styles.headlineString, getPositionStyle(props.position))}>{props.headlineString}</div>
                <Link to={routes.shop} className={combineClassNames(styles.button, getPositionStyle(props.position))}>
                    SHOP NOW
                </Link>
            </div>
            <img className={styles.photo} src={props.photoUrl} alt={props.altPhoto}/>
        </div>
    )
}

export let getTextColorStyle = (value: "white" | "black" | undefined): string => {
    if (value === "white") return styles.whiteText;
    return styles.blackText;
}

let getPositionStyle = (value: "left" | "center" | "right"): string => {
    switch (value) {
        case "left":
            return styles.leftPosition;
        case "center":
            return styles.centerPosition;
        case "right":
            return styles.rightPosition;

    }
}

export default ItemCarousel;
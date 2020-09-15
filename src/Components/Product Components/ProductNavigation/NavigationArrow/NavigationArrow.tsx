import React from "react";
import styles from "./NavigationArrow.module.scss";
import {IoIosArrowForward} from "react-icons/all";

type mapStateToProps = {}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let NavigationArrow: React.FC<propsType> = (props) => {
    return (
        <IoIosArrowForward className={styles.icon}/>
    )
}

export default NavigationArrow;

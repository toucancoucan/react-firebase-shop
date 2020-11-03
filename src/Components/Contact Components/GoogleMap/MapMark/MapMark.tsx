import React from "react";
import styles from "./MapMark.module.scss";

type mapStateToProps = { lat: number, lng: number }

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let MapMark: React.FC<propsType> = (props) => {
    return (
        <div className={styles.wrapper}>
            NL
        </div>
    )
}

export default MapMark;

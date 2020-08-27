import React from "react";
import styles from "./Preloader.module.scss";

let Preloader: React.FC = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.ldsRoller}>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    )
}

export default Preloader;

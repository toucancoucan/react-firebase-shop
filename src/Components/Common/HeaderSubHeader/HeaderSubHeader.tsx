import React from "react";
import styles from './HeaderSubHeader.module.scss'


type propsType = {
    mainText: string;
    subText: string;
};

let HeaderSubHeader: React.FC<propsType> = (props) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.main}>
                {props.mainText}
            </div>
            <div className={styles.sub}>
                {props.subText}
            </div>
            <div className={styles.line}>

            </div>
        </div>
    )
}

export default HeaderSubHeader;
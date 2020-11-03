import React from "react";
import styles from './HeaderSubHeader.module.scss'


type propsType = {
    mainText: string
    subText: string
    drawLine?: boolean

};

let HeaderSubHeader: React.FC<propsType> = ({mainText, subText, drawLine = true}) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.main}>
                {mainText}
            </div>
            <div className={styles.sub}>
                {subText}
            </div>
            {drawLine && <div className={styles.line}/>}
        </div>
    )
}

export default HeaderSubHeader;
import React from "react";
import styles from "./NotFoundScreen.module.scss";
import {MdErrorOutline} from "react-icons/all";

type mapStateToProps = {}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let NotFoundScreen: React.FC<propsType> = () => {
    return (
        <div className={styles.notFoundWrapper}>
            <MdErrorOutline className={styles.errorIcon}/>
            <div className={styles.bigText}>ERROR 404</div>
            <div className={styles.subText}>PAGE NOT FOUND</div>
        </div>
    )
}

export default NotFoundScreen;

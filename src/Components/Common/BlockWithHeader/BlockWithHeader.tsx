import React from "react";
import styles from "./BlockWithHeader.module.scss";

type mapStateToProps = {
    header: string,
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let BlockWithHeader: React.FC<propsType> = (props) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.header}>
                {props.header}
            </div>
            <div className={styles.container}>
                {props.children}
            </div>
        </div>
    )
}

export default BlockWithHeader;

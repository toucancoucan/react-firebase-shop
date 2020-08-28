import React from "react";
import styles from "./FooterBlock.module.scss";
import combineClassNames from "../../../Functions/сombineClassNames";

type mapStateToProps = {
    header: string,
    className?: string
}


type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let FooterBlock: React.FC<propsType> = (props) => {
    return (
        <div className={combineClassNames(styles.wrap, props.className)}>
            <div className={styles.header}>
                {props.header}
            </div>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}

export default FooterBlock;

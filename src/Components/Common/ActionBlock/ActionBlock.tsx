import React from "react";
import styles from "./ActionBlock.module.scss";
import combineClassNames from "../../../Functions/сombineClassNames";

type mapStateToProps = {
    color: "green" | "red",
    text: string,
    showButton?: boolean,
    button?: JSX.Element
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let ActionBlock: React.FC<propsType> = (props) => {
    return (
        <div className={combineClassNames(styles.container, styles[props.color])}>
            <div className={styles.wrap}>
                <div className={styles.text}>
                    {props.text}
                </div>
                {props.showButton && props.button}
            </div>
        </div>
    )
}

export default ActionBlock;

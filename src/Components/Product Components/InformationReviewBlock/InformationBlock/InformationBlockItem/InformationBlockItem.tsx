import React from "react";
import styles from "./InformationBlockItem.module.scss";

type mapStateToProps = {
    parameter: string,
    value: string
}


type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let InformationBlockItem: React.FC<propsType> = (props) => {
    return (
        <div className={styles.wrapper}>
            <div>
                {props.parameter}
            </div>
            <div>
                {props.value}
            </div>
        </div>
    )
}

export default InformationBlockItem;

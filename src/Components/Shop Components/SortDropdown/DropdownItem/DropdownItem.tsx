import React from "react";
import styles from "./DropdownItem.module.scss";
import combineClassNames from "../../../../Functions/сombineClassNames";

type mapStateToProps = {
    text: string,
    isActive: boolean,
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let DropdownItem: React.FC<propsType> = (props) => {
    return (
        <div className={combineClassNames(styles.wrap, props.isActive ? styles.isActive : '')}>
            {props.text}
        </div>
    )
}

export default DropdownItem;

import React from "react";
import styles from "./DropdownItem.module.scss";
import combineClassNames from "../../../../Functions/сombineClassNames";

type mapStateToProps = {
    text: string,
    isActive: boolean,
}

type mapDispatchToProps = {
    onClick: () => void
}

type propsType = mapStateToProps & mapDispatchToProps;

let DropdownItem: React.FC<propsType> = (props) => {
    return (
        <button onClick={props.onClick}
                className={combineClassNames(styles.wrap, props.isActive ? styles.isActive : '')}>
            {props.text}
        </button>
    )
}

export default DropdownItem;

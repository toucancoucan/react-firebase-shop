import React from "react";
import styles from "./DescriptionBlock.module.scss";
import combineClassNames from "../../../../Functions/сombineClassNames";

type mapStateToProps = {
    className?: string,
}
type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let DescriptionBlock: React.FC<propsType> = (props) => {
    return (
        <div className={combineClassNames(styles.wrap, props.className)}>

        </div>
    )
}

export default DescriptionBlock;

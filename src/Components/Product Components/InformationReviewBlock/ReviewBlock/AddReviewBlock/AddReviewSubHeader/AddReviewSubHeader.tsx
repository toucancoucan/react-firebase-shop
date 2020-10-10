import React from "react";
import styles from "./AddReviewSubHeader.module.scss";

type mapStateToProps = {
    text: string
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let AddReviewSubHeader: React.FC<propsType> = (props) => {
    return (
        <div className={styles.subHeader}>
            {props.text}
        </div>
    )
}

export default AddReviewSubHeader;

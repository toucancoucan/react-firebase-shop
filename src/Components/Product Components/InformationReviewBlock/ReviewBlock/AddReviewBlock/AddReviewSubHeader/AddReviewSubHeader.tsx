import React from "react";
import styles from "./AddReviewSubHeader.module.scss";
import {FieldError} from "react-hook-form";

type mapStateToProps = {
    text: string,
    errorText: string,
    showError: FieldError | undefined
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let AddReviewSubHeader: React.FC<propsType> = (props) => {
    return (
        <div className={styles.subHeader}>
            {props.text}
            {props.showError && <span className={styles.errorText}>{props.errorText}</span>}
        </div>
    )
}

export default AddReviewSubHeader;

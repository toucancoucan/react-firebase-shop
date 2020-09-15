import React from "react";
import styles from "./NavigationLink.module.scss";
import {Link} from "react-router-dom";
import combineClassNames from "../../../../Functions/сombineClassNames";

type mapStateToProps = {
    text: string,
    url: string,
    disabled?: boolean
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let NavigationLink: React.FC<propsType> = (props) => {
    return (
        <Link to={props.url} className={combineClassNames(styles.link, `${props.disabled ? styles.disabled : ''}`)}>
            {props.text}
        </Link>
    )
}

export default NavigationLink;

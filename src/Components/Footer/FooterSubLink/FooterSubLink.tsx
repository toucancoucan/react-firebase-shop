import React from "react";
import styles from "./FooterSubLink.module.scss";
import {Link} from "react-router-dom";

type mapStateToProps = {
    url: string,
    text: string
}


type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let FooterSubLink: React.FC<propsType> = (props) => {
    return (
        <Link className={styles.link} to={props.url}>
            {props.text}
        </Link>
    )
}

export default FooterSubLink;

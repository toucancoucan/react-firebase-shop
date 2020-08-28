import React from "react";
import FooterBlock from "../FooterBlock/FooterBlock";
import {Link} from "react-router-dom";
import styles from "./FooterBlockLinks.module.scss";

type mapStateToProps = {
    header: string,
    links: Array<[string, string]>,
    className?: string
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let FooterBlockLinks: React.FC<propsType> = (props) => {
    return (
        <FooterBlock className={props.className} header={props.header}>
            {props.links.map(e => {
                return <Link to={e[1]}>
                    <div className={styles.link}>
                        {e[0]}
                    </div>
                </Link>
            })}
        </FooterBlock>
    )
}

export default FooterBlockLinks;

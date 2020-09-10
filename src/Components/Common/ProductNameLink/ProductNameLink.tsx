import React from "react";
import styles from "./ProductNameLink.module.scss";
import routes from "../../../Constants/Routes";
import {Link} from "react-router-dom";
import combineClassNames from "../../../Functions/сombineClassNames";

type mapStateToProps = {
    productName: string,
    fontSize?: string,
    onClick?: () => void,
    className?: string
}


type propsType = mapStateToProps;

let ProductNameLink: React.FC<propsType> = (props) => {
    return (
        <Link onClick={props.onClick} to={routes.product(props.productName)}>
            <div className={combineClassNames(styles.name, props.className)} style={{fontSize: props.fontSize}}>
                {props.productName}
            </div>
        </Link>
    )
}

export default ProductNameLink;

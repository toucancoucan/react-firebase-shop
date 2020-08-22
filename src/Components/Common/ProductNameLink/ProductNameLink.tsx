import React from "react";
import styles from "./ProductNameLink.module.scss";
import routes from "../../../Utility/Routes";
import {Link} from "react-router-dom";

type mapStateToProps = {
    productName: string,
    fontSize: string,
    onClick?: () => void
}


type propsType = mapStateToProps;

let ProductNameLink: React.FC<propsType> = (props) => {
    return (
        <Link onClick={props.onClick} to={routes.product(props.productName)}>
            <div className={styles.name} style={{fontSize: props.fontSize}}>
                {props.productName}
            </div>
        </Link>
    )
}

export default ProductNameLink;

import React from "react";
import styles from "./ProductNavigation.module.scss";
import NavigationArrow from "./NavigationArrow/NavigationArrow";
import NavigationLink from "./NavigationLink/NavigationLink";
import routes from "../../../Constants/Routes";

type mapStateToProps = {
    category: string,
    name: string
}

type propsType = mapStateToProps;

let ProductNavigation: React.FC<propsType> = (props) => {
    return (
        <div className={styles.productNavigationWrap}>
            <div className={styles.linkWrap}>
                <NavigationLink text={"NO LABEL"} url={routes.home}/>
                <NavigationArrow/>
                <NavigationLink text={"SHOP"} url={routes.shop}/>
                <NavigationArrow/>
                <NavigationLink text={props.category} url={routes.category(props.category)}/>
                <NavigationArrow/>
                <NavigationLink text={props.name} url={routes.product(props.name)} disabled={true}/>
            </div>
        </div>
    )
}

export default ProductNavigation;

import React from "react";
import styles from "./Sidebar.module.scss";
import BlockWithHeader from "../../Common/BlockWithHeader/BlockWithHeader";
import CategoriesBlock from "./CategoriesBlock/CategoriesBlock";

type mapStateToProps = {}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let Sidebar: React.FC<propsType> = (props) => {
    return (
        <div className={styles.sideBar}>
            <BlockWithHeader header={"SEARCH"}>

            </BlockWithHeader>
            <CategoriesBlock/>
            <BlockWithHeader header={"CART"}>

            </BlockWithHeader>
        </div>
    )
}

export default Sidebar;

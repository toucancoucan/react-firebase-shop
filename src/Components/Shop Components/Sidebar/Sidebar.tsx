import React from "react";
import styles from "./Sidebar.module.scss";
import BlockWithHeader from "../../Common/BlockWithHeader/BlockWithHeader";
import CategoriesBlock from "./CategoriesBlock/CategoriesBlock";
import SearchBlock from "./SearchBlock/SearchBlock";

type mapStateToProps = {}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let Sidebar: React.FC<propsType> = (props) => {
    return (
        <div className={styles.sideBar}>
            <SearchBlock/>
            <CategoriesBlock/>
            <BlockWithHeader header={"CART"}>

            </BlockWithHeader>
            <BlockWithHeader header={"RECENTLY VIEWED"}>

            </BlockWithHeader>
        </div>
    )
}

export default Sidebar;

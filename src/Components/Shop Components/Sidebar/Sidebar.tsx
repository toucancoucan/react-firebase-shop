import React from "react";
import styles from "./Sidebar.module.scss";
import CategoriesBlock from "./CategoriesBlock/CategoriesBlock";
import SearchBlock from "./SearchBlock/SearchBlock";
import CartBlock from "./CartBlock/CartBlock";
import FilterPriceBlock from "./FilterPriceBlock/FilterPriceBlock";
import RecentlyViewedBlock from "./RecentlyViewedBlock/RecentlyViewedBlock";
import combineClassNames from "../../../Functions/сombineClassNames";

type mapStateToProps = {
    className?: string
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let Sidebar: React.FC<propsType> = (props) => {
    return (
        <div className={combineClassNames(styles.sideBar, props.className)}>
            <SearchBlock/>
            <CategoriesBlock/>
            <CartBlock/>
            <FilterPriceBlock/>
            <RecentlyViewedBlock/>
        </div>
    )
}

export default Sidebar;

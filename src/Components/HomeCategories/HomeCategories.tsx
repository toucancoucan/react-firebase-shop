import React, {useEffect} from "react";
import styles from "./HomeCategories.module.scss";
import {connect} from "react-redux";
import {rootState} from "../../Reducers/store";
import {fetchAndSetHomeCategoryItems, homeCategoryItemType} from "../../Reducers/HomeCategoriesReducer";
import CategoryItem from "./CategoryItem/CategoryItem";

type mapStateToProps = {
    items: Array<homeCategoryItemType> | null
}

type mapDispatchToProps = {
    fetchAndSetHomeCategoryItems: () => void
}

type propsType = mapDispatchToProps & mapStateToProps;

let _HomeCategories: React.FC<propsType> = (props) => {
    useEffect(() => {
        if (props.items == null)
            props.fetchAndSetHomeCategoryItems()
    })

    let items = props.items?.slice(0, 3)

    return (
        <div className={styles.row}>
            {items?.map((element, index) => {
                return <CategoryItem key={index} photoUrl={element.photoUrl}
                                     category={element.category}/>
            })}
        </div>
    )
}

const mapStateToProps = (state: rootState): mapStateToProps => {
    return {
        items: state.HomeCategoriesReducer.categoryItems
    }
};


let HomeCategories = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps,
    {fetchAndSetHomeCategoryItems})(_HomeCategories)

export default HomeCategories;

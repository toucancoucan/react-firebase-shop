import React, {useRef, useState} from "react";
import styles from "./SortDropdown.module.scss";
import combineClassNames from "../../../Functions/сombineClassNames";
import DropdownItem from "./DropdownItem/DropdownItem";
import {IoMdArrowDropdown} from "react-icons/all";
import {rootState} from "../../../Reducers/store";
import {connect} from "react-redux";
import {setFilterSort, SortType} from "../../../Reducers/FilterSortReducer";
import useClickOutsideElement from "../../Common/Hooks/useClickOutsideElement";

type mapStateToProps = {
    activeSortType: SortType
}

type mapDispatchToProps = {
    setFilterSort: (item: SortType) => void
}

type propsType = mapStateToProps & mapDispatchToProps;

let _SortDropdown: React.FC<propsType> = (props) => {
    const [expandDropdown, changeExpandDropdown] = useState<boolean>(false);
    const node = useRef<HTMLDivElement>(null);
    useClickOutsideElement(node, changeExpandDropdown)
    type optionItem = {
        text: string,
        sortType: SortType
    }

    const options: Array<optionItem> = [
        {text: "Default sorting", sortType: SortType.Default},
        {text: "Sort by rating", sortType: SortType.Rating},
        {text: "Sort by price: low to high", sortType: SortType.PriceLowToHigh},
        {text: "Sort by price: high to low", sortType: SortType.PriceHighToLow},
    ];


    let dropdownItems: Array<JSX.Element> = [];
    let activeText: string = '';
    options.forEach((item) => {
        let isActive = item.sortType === props.activeSortType;
        dropdownItems.push(<DropdownItem onClick={() => props.setFilterSort(item.sortType)} text={item.text}
                                         isActive={isActive} key={item.sortType}/>)
        if (isActive) activeText = item.text;
    })

    return (
        <div className={styles.dropdown} ref={node}>
            <button className={styles.button} onClick={() => changeExpandDropdown(!expandDropdown)}>
                {activeText}
                <IoMdArrowDropdown className={styles.caret}/>
            </button>
            <div className={combineClassNames(styles.expandableBlock, {"hidden": !expandDropdown})}>
                {dropdownItems}
            </div>
        </div>
    )
}

const mapStateToProps = (state: rootState): mapStateToProps => {
    return {
        activeSortType: state.FilterSortReducer.sortType
    }
};

let SortDropdown = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps,
    {setFilterSort})(_SortDropdown);

export default SortDropdown;

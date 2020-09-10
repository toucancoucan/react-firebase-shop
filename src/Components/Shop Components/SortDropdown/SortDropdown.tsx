import React, {useState} from "react";
import styles from "./SortDropdown.module.scss";
import combineClassNames from "../../../Functions/сombineClassNames";
import DropdownItem from "./DropdownItem/DropdownItem";
import {IoMdArrowDropdown} from "react-icons/all";

type mapStateToProps = {}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let SortDropdown: React.FC<propsType> = (props) => {
    const [expandDropdown, changeExpandDropdown] = useState<boolean>(false);
    return (
        <div className={styles.dropdown}>
            <button className={styles.button} onClick={() => changeExpandDropdown(!expandDropdown)}>
                Default Sorting
                <IoMdArrowDropdown className={styles.caret}/>
            </button>
            <div className={combineClassNames(styles.expandableBlock, {"hidden": !expandDropdown})}>
                <DropdownItem text={"Default sorting"} isActive={true}/>
                <DropdownItem text={"Sort by rating"} isActive={false}/>
                <DropdownItem text={"Sort by price: low to high"} isActive={false}/>
                <DropdownItem text={"Sort by price: high to low"} isActive={false}/>
            </div>
        </div>
    )
}

export default SortDropdown;

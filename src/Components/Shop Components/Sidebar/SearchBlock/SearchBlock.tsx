import React from "react";
import BlockWithHeader from "../../../Common/BlockWithHeader/BlockWithHeader";
import {rootState} from "../../../../Reducers/store";
import {connect} from "react-redux";
import {setFilterNameSearch} from "../../../../Reducers/FilterSortReducer";
import styles from "./SearchBlock.module.scss"

type mapStateToProps = {
    inputValue: string
}

type mapDispatchToProps = {
    setFilterNameSearch: (item: string) => void
}

type propsType = mapStateToProps & mapDispatchToProps;

let _SearchBlock: React.FC<propsType> = (props) => {
    return (
        <BlockWithHeader header={"SEARCH BY NAME"}>
            <input placeholder={"Search products..."}
                   className={styles.input}
                   value={props.inputValue}
                   onChange={(e) => {
                       props.setFilterNameSearch(e.target.value)
                   }}/>
        </BlockWithHeader>
    )
}

const mapStateToProps = (state: rootState,): mapStateToProps => {
    return {
        inputValue: state.FilterSortReducer.nameSearch
    }
};


let SearchBlock = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps, {setFilterNameSearch})(_SearchBlock)

export default SearchBlock;

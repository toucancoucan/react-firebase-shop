import React from "react";
import InputRange from "react-input-range";
import BlockWithHeader from "../../../Common/BlockWithHeader/BlockWithHeader";
import "./SliderStyles.scss";
import {priceFilterType, setFilterMinmaxPrice} from "../../../../Reducers/FilterSortReducer";
import {rootState} from "../../../../Reducers/store";
import {connect} from "react-redux";
import styles from "./FilterPriceBlock.module.scss"

type mapStateToProps = priceFilterType;

type mapDispatchToProps = {
    setFilterMinmaxPrice: (item: priceFilterType) => void
}

type propsType = mapStateToProps & mapDispatchToProps;

let _FilterPriceBlock: React.FC<propsType> = (props) => {
    return (
        <BlockWithHeader header={"FILTER BY PRICE"}>
            <div className={styles.margin}>
                <InputRange
                    maxValue={100}
                    minValue={0}
                    value={{min: props.min, max: props.max}}
                    step={5}
                    formatLabel={value => `${value}$`}
                    onChange={value => props.setFilterMinmaxPrice(value as priceFilterType)}/>
            </div>
        </BlockWithHeader>
    )
}

const mapStateToProps = (state: rootState): mapStateToProps => {
    return {
        max: state.FilterSortReducer.priceFilter.max,
        min: state.FilterSortReducer.priceFilter.min,
    }
};


let FilterPriceBlock = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps,
    {setFilterMinmaxPrice})(_FilterPriceBlock)

export default FilterPriceBlock;

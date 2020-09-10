import React from "react";
import {shopItemType} from "../../../../Reducers/ShopReducer";
import BlockWithHeader from "../../../Common/BlockWithHeader/BlockWithHeader";
import {rootState} from "../../../../Reducers/store";
import {connect} from "react-redux";
import {createSelector} from "reselect";
import getItemById from "../../../../Functions/getItemById";

type mapStateToProps = {
    items: Array<shopItemType>
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let _RecentlyViewedBlock: React.FC<propsType> = (props) => {
    return (
        <BlockWithHeader header={"RECENTLY VIEWED"}>
            <div style={{backgroundColor: "red", height: "12rem", width: "100%"}}>

            </div>
        </BlockWithHeader>
    )
}

let getItems = (state: rootState): Array<shopItemType> => state.ShopReducer.items;
let getHistory = (state: rootState): Array<number> => state.RecentlyViewedReducer.viewedHistory;
let getRecentlyViewedItems = createSelector([getItems, getHistory],
    (items: Array<shopItemType>, history: Array<number>): Array<shopItemType> => {
        let res: Array<shopItemType> = [];
        for (let i = 0; i < history.length; i++) {
            res.push(getItemById(history[i], items))
        }
        return res;
    });


const mapStateToProps = (state: rootState): mapStateToProps => {
    return {
        items: getRecentlyViewedItems(state)
    }
};


let RecentlyViewedBlock = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps, {})(_RecentlyViewedBlock)

export default RecentlyViewedBlock;

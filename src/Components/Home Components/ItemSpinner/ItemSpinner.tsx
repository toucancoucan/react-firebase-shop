import React, {useState} from "react";
import {connect} from "react-redux";
import {rootState} from "../../../Reducers/store";
import {shopItemType} from "../../../Reducers/ShopReducer";
import CONSTANTS from "../../../Constants/CONSTANTS";
import styles from "./ItemSpinner.module.scss"
import ItemCard from "../../Common/ItemCard/ItemCard";
import SpinnerArrow from "./SpinnerArrow/SpinnerArrow";
import combineClassNames from "../../../Functions/сombineClassNames";
import {getRandomItems} from "../../../Functions/getRandomItems";
import {createSelector} from "reselect";

type mapStateToPropsType = {
    items: Array<shopItemType>
}
type mapDispatchToPropsType = {}

type propsType = mapStateToPropsType & mapDispatchToPropsType;

let _ItemSpinner: React.FC<propsType> = (props) => {
    const [randomItems, setRandomItems] = useState<Array<shopItemType>>([]);
    const [showAnimation, changeShowAnimation] = useState<boolean>(false);


    const moveSpinnerItems = (val: number): void => {
        let res = randomItems.slice();
        if (val === 1) res.push(...res.splice(0, 1));
        else res.unshift(...res.splice(-1, 1));
        changeShowAnimation(true)
        setRandomItems(res)
    }

    if (randomItems[0] === undefined && props.items[0] !== undefined)
        setRandomItems(getRandomItems(props.items, CONSTANTS.ITEMS_SPINNER.ITEMS_QUANTITY));

    let itemsContent = randomItems.map((value,) => {
        return <ItemCard key={value.id} saleTag={value.saleTag}
                         category={value.category} name={value.name}
                         oldPrice={value.oldPrice} photoUrl={value.photoUrl}
                         price={value.price} id={value.id}
        />
    })


    return (
        <div className={styles.wrap}>
            <div className={styles.arrowWrap}>
                <SpinnerArrow forwardOrBackward={"backward"} changeItem={() => {
                    moveSpinnerItems(-1)
                }}/>
            </div>
            <div onAnimationEnd={() => changeShowAnimation(false)}
                 className={combineClassNames(styles.container, showAnimation ? styles.animation : "")}>
                {itemsContent}
            </div>
            <div className={styles.arrowWrap}>
                <SpinnerArrow forwardOrBackward={"forward"} changeItem={() => {
                    moveSpinnerItems(1)
                }}/>
            </div>
        </div>
    )
}

let getItems = (state: rootState): Array<shopItemType> => state.ShopReducer.items;

let getItemsForSpinner = createSelector([getItems],
    (items: Array<shopItemType>): Array<shopItemType> => items);

const mapStateToProps = (state: rootState): mapStateToPropsType => {
    return {
        items: getItemsForSpinner(state)
    }
};


let ItemSpinner = connect<mapStateToPropsType, mapDispatchToPropsType, any, any>(mapStateToProps,
    {},)(_ItemSpinner);

export default ItemSpinner;
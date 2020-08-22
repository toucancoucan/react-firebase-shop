import React, {useState} from "react";
import {connect} from "react-redux";
import {rootState} from "../../Reducers/store";
import {shopItemType} from "../../Reducers/ShopReducer";
import CONSTANTS from "../../Utility/CONSTANTS";
import styles from "./ItemSpinner.module.scss"
import ItemCard from "../Common/ItemCard/ItemCard";
import SpinnerArrow from "./SpinnerArrow/SpinnerArrow";
import combineClassNames from "../../Utility/сombineClassNames";

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
        setRandomItems(getRandomItems(props.items));

    let itemsContent = randomItems.map((value, index) => {
        return <ItemCard key={value.id}
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

let getRandomItems = (items: Array<shopItemType>) => {
    return items.sort(() => 0.5 - Math.random()).slice(0, CONSTANTS.ITEMS_SPINNER.ITEMS_QUANTITY);
}


const mapStateToProps = (state: rootState): mapStateToPropsType => {
    return {
        items: state.ShopReducer.items
    }
};

let ItemSpinner = connect<mapStateToPropsType, mapDispatchToPropsType, any, any>(mapStateToProps, {},)(_ItemSpinner);

export default ItemSpinner;
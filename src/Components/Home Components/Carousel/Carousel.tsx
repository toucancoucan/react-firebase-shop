import React, {useEffect} from "react";
import {connect} from "react-redux";
import {rootState} from "../../../Reducers/store";
import {
    CarouselItemType,
    CarouselStateType,
    changeActiveCarouselItem,
    fetchAndSetCarouselItems
} from "../../../Reducers/CarouselReducer";
import styles from "./Carousel.module.scss";
import CarouselArrow from "./CarouselArrow/CarouselArrow";
import ItemCarousel from "./ItemCarousel/ItemCarousel";
import CONSTANTS from "../../../Constants/CONSTANTS";

type mapStateToPropsType = CarouselStateType
type mapDispatchToPropsType = {
    changeActiveCarouselItem: (value: number) => void
    fetchAndSetCarouselItems: () => void,
}

type propsType = mapStateToPropsType & mapDispatchToPropsType;


let _Carousel: React.FC<propsType> = (props) => {

    useEffect(() => {
        if (props.fetchedItems == null)
            props.fetchAndSetCarouselItems()
        const timer = setTimeout(() => {
            props.changeActiveCarouselItem(1);
        }, CONSTANTS.CAROUSEL.ITEM_CHANGE_SPEED);
        return () => clearTimeout(timer);
    })
    let item: CarouselItemType | undefined = props.fetchedItems?.[props.activeItemId];
    let CarouselContent = item ? <ItemCarousel headlineString={item.headlineString} subString={item.subString}
                                               position={item.position} photoUrl={item.photoUrl}
                                               altPhoto={item.altPhoto} stringColor={item.stringColor}/> : null

    return (
        <div className={styles.carousel}>
            <CarouselArrow color={item?.stringColor} forwardOrBackward={"backward"}
                           changeItem={props.changeActiveCarouselItem}/>
            <CarouselArrow color={item?.stringColor} forwardOrBackward={"forward"}
                           changeItem={props.changeActiveCarouselItem}/>
            {CarouselContent}
        </div>
    )
}
const mapStateToProps = (state: rootState): mapStateToPropsType => {
    return {
        activeItemId: state.CarouselReducer.activeItemId,
        fetchedItems: state.CarouselReducer.fetchedItems,
        itemsQuantity: state.CarouselReducer.itemsQuantity
    }
};


let Carousel = connect<mapStateToPropsType, mapDispatchToPropsType, any, any>(mapStateToProps,
    {changeActiveCarouselItem, fetchAndSetCarouselItems})(_Carousel);

export default Carousel;
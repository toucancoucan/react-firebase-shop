import React from "react";
import {rootState} from "../../../../Reducers/store";
import {connect} from "react-redux";
import InformationBlockItem from "./InformationBlockItem/InformationBlockItem";
import styles from "./InformationBlock.module.scss"

type mapStateToProps = {
    infoObject: {
        [key: string]: string;
    }
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;


let _InformationBlock: React.FC<propsType> = ({infoObject}) => {

    let elementsArray: Array<JSX.Element> = [];
    for (const [key, value] of Object.entries(infoObject)) {
        elementsArray.push(<InformationBlockItem key={key} parameter={key} value={value}/>)
    }
    return (
        <div className={styles.wrapper}>
            {elementsArray}
        </div>
    )
}

const mapStateToProps = (state: rootState): mapStateToProps => {
    return {
        infoObject: state.ProductReducer.item.additionalInfo
    }
};


let InformationBlock = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps, {})(_InformationBlock);

export default InformationBlock;

import React from "react";
import {connect} from "react-redux";
import {rootState} from "../../Reducers/store";

type mapStateToPropsType = {

}
type mapDispatchToPropsType = {

}

type propsType = mapStateToPropsType & mapDispatchToPropsType;


let _Carousel:React.FC<propsType> = (props)=>{
    return(
        <div>

        </div>
    )
}
const mapStateToProps = (state: rootState): mapStateToPropsType => {
    return {

    }
};

let Carousel = connect<mapStateToPropsType, mapDispatchToPropsType, any, any>(mapStateToProps)(_Carousel);

export default Carousel;
import React from "react";
import styles from "./PhotoThumbnail.module.scss";
import {rootState} from "../../../../../Reducers/store";
import {connect} from "react-redux";
import {changeActiveIndexPhoto} from "../../../../../Reducers/ProductReducer";
import combineClassNames from "../../../../../Functions/сombineClassNames";

type mapStateToProps = {
    photoUrl: string,
    photoIndex: number,
    isSelected: boolean
}

type mapDispatchToProps = {
    changeActiveIndexPhoto: (item: number) => void
}

type propsType = mapStateToProps & mapDispatchToProps;

let _PhotoThumbnail: React.FC<propsType> = (props) => {
    return (
        <button onClick={() => props.changeActiveIndexPhoto(props.photoIndex)} className={styles.button}>
            <img src={props.photoUrl} alt={props.photoUrl}
                 className={combineClassNames(styles.img, `${props.isSelected ? '' : styles.brightened}`)}/>
        </button>
    )
}

const mapStateToProps = (state: rootState, ownProps: mapStateToProps): mapStateToProps => {
    return ownProps
};


let PhotoThumbnail = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps, {changeActiveIndexPhoto})(_PhotoThumbnail)

export default PhotoThumbnail;

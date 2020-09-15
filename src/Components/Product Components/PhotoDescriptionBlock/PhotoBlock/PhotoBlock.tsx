import React from "react";
import styles from "./PhotoBlock.module.scss";
import combineClassNames from "../../../../Functions/сombineClassNames";
import {rootState} from "../../../../Reducers/store";
import {connect} from "react-redux";
import PhotoThumbnail from "./PhotoThumbnail/PhotoThumbnail";
import {SideBySideMagnifier} from "react-image-magnifiers";


type ownProps = {
    className?: string,
}

type mapStateToProps = {
    photoUrlArray: Array<string>,
    activePhotoIndex: number,
} & ownProps

type mapDispatchToProps = {}


type propsType = mapStateToProps & mapDispatchToProps;

let _PhotoBlock: React.FC<propsType> = (props) => {
    return (
        <div className={combineClassNames(styles.wrap, props.className)}>
            <div className={styles.column}>
                {props.photoUrlArray.map((e, i) => <PhotoThumbnail key={i} photoUrl={e} photoIndex={i}
                                                                   isSelected={i === props.activePhotoIndex}/>)}
            </div>
            <div>
                <SideBySideMagnifier imageSrc={props.photoUrlArray[props.activePhotoIndex]} alwaysInPlace={true}/>
                {/*<img src={props.photoUrlArray[props.activePhotoIndex]}*/}
                {/*     alt={props.photoUrlArray[props.activePhotoIndex]} className={styles.photo}/>*/}
            </div>
        </div>
    )
}

const mapStateToProps = (state: rootState, ownProps: ownProps): mapStateToProps => {
    return {
        activePhotoIndex: state.ProductReducer.activePhotoIndex,
        photoUrlArray: [state.ProductReducer.item.photoUrl, ...state.ProductReducer.item.additionalPhotosUrl],
        className: ownProps.className
    }
};


let PhotoBlock = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps, {})(_PhotoBlock)

export default PhotoBlock;

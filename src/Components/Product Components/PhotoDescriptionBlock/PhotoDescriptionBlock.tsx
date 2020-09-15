import React from "react";
import styles from "./PhotoDescriptionBlock.module.scss";
import PhotoBlock from "./PhotoBlock/PhotoBlock";
import DescriptionBlock from "./DescriptonBlock/DescriptionBlock";

type mapStateToProps = {
    photoUrlArray: Array<string>,
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let PhotoDescriptionBlock: React.FC<propsType> = (props) => {
    return (
        <div className={styles.blockWrap}>
            <PhotoBlock className={styles.photoBlock}/>
            <DescriptionBlock/>
        </div>
    )
}

export default PhotoDescriptionBlock;

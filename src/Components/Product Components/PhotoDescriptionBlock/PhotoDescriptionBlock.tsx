import React from "react";
import styles from "./PhotoDescriptionBlock.module.scss";
import PhotoBlock from "./PhotoBlock/PhotoBlock";
import DescriptionBlock from "./DescriptonBlock/DescriptionBlock";

type mapStateToProps = {
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let PhotoDescriptionBlock: React.FC<propsType> = (props) => {
    return (
        <div className={styles.blockWrap}>
            <PhotoBlock className={styles.photoBlock}/>
            <DescriptionBlock className={styles.descriptionBlock}/>
        </div>
    )
}

export default PhotoDescriptionBlock;

import React from "react";
import styles from "./LogoRow.module.scss";
import LogoBlock from "./LogoBlock/LogoBlock";
import {logoRowPhotos} from "../../Constants/photoUrls";

type mapStateToProps = {
    photos: logoRowPhotos
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let LogoRow: React.FC<propsType> = (props) => {
    return (
        <div className={styles.wrap}>
            <LogoBlock photoUrl={props.photos.logo1}/>
            <LogoBlock photoUrl={props.photos.logo2}/>
            <LogoBlock photoUrl={props.photos.logo3}/>
            <LogoBlock photoUrl={props.photos.logo4}/>
            <LogoBlock photoUrl={props.photos.logo5}/>
        </div>
    )
}

export default LogoRow;

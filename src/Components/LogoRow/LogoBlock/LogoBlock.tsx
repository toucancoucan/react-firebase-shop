import React from "react";
import styles from "./LogoBlock.module.scss";

type mapStateToProps = {
    photoUrl: string
}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

let LogoBlock: React.FC<propsType> = (props) => {
    return (
        <div className={styles.wrap}>
            <img className={styles.img} src={props.photoUrl} alt={props.photoUrl}/>
        </div>
    )
}

export default LogoBlock;

import React from "react";
import styles from "./Header.module.scss"
import ProfileNavRowContainer from "../Common/ProfileNavRow/ProfileNavRowContainer";


let Header: React.FC = () => {

    return (
        <div className={styles.header}>
            <ProfileNavRowContainer/>
        </div>
    )
};


export default Header;
import React from "react";
import styles from "./Header.module.scss"
import ProfileNavRowContainer from "../Common/ProfileNavRow/ProfileNavRowContainer";


let Header: React.FC = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <ProfileNavRowContainer/>
                </div>
            </div>
        </div>
    )
};


export default Header;
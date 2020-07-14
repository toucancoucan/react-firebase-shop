import React from "react";
import styles from "./Header.module.scss"
import ProfileNavRow from "../ProfileNavRow/ProfileNavRow";


let Header: React.FC = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <ProfileNavRow/>
                </div>
            </div>
        </div>
    )
};


export default Header;
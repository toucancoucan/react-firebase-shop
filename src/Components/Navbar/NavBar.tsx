import React from "react";
import styles from "./NavBar.module.scss";
import Logo from "./Logo";
import NavBarLink from "./NavBarLink/NavBarLink";
import NavBarIcon from "./NavBarIcon/NavBarIcon";


let NavBar: React.FC = () => {
    return (
        <nav className={styles.navBarWrapper}>
            <div className={styles.container}>
                <div className={styles.navBar}>
                    <Logo url={'/home'}/>
                    <NavBarLink url={'/home'} title={'home'}/>
                    <NavBarLink url={'/shop'} title={'shop'}/>
                    <NavBarLink url={'/contact'} title={'contact'}/>
                    <NavBarLink url={'/blog'} title={'blog'}/>

                    <NavBarIcon type={"search"}/>
                    <NavBarIcon type={"cart"}/>
                    <NavBarIcon type={"menu"}/>


                </div>
            </div>
        </nav>
    )
};


export default NavBar;
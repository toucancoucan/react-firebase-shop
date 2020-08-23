import React, {useEffect, useState} from "react";
import styles from "./NavBar.module.scss";
import Logo from "./Logo";
import NavBarLink from "./NavBarLink/NavBarLink";
import NavBarIcon from "./NavBarIcon/NavBarIcon";
import NavBarCartIcon from "./ConnectedToCartSize/NavBarCartIcon/NavBarCartIcon";
import NavBarSearch from "./NavBarSearch/NavBarSearch";
import combineClassNames from "../../Functions/сombineClassNames";
import ProfileNavRow from "./ProfileNavRow/ProfileNavRow";
import Header from "./Header/Header";
import MobileCartButton from "./ConnectedToCartSize/MobileCartButton/MobileCartButton";
import routes from "../../Constants/Routes";

import {NavBarStateType} from "../../Reducers/NavBarReducer";
import CartWidget from "../Cart/CartWidget/CartWidget";

export type mapStateToPropsType = NavBarStateType;

export type mapDispatchToPropsType = {
    changeShowSearch: () => void
    changeShowCartWidget: () => void
    changeShowMenu: () => void
    getSearchValue: (data: any) => void
}

type propsType = mapStateToPropsType & mapDispatchToPropsType;


let _NavBar: React.FC<propsType> = (props) => {

    let searchBar = <NavBarSearch blur={props.changeShowSearch} onSubmit={(data) => {
        props.getSearchValue(data)
    }}/>

    let searchContent = props.showSearch ? searchBar
        : <NavBarIcon type={"search"} clickAction={props.changeShowSearch}/>

    const [isPaddingCollapsed, setCollapsedPadding] = useState(false);
    const handleScroll = () => {
        if (window.pageYOffset > 0)
            setCollapsedPadding(true);
        else
            setCollapsedPadding(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    let HeaderLinksArray =
        <>
            <NavBarLink url={routes.home} title={'home'}/>
            <NavBarLink url={routes.shop} title={'shop'}/>
            <NavBarLink url={routes.contact} title={'contact'}/>
            <NavBarLink url={routes.blog} title={'blog'}/>
        </>

    return (
        <>
            <Header/>
            <header className={styles.navBarWrapper}>
                <nav className={styles.navbarContainer}>
                    <div className={styles.navBarDesktop}>
                        <Logo url={routes.home} isPaddingCollapsed={isPaddingCollapsed}/>
                        {HeaderLinksArray}
                        <div className={styles.iconWrap}>
                            {searchContent}
                            <NavBarCartIcon clickAction={props.changeShowCartWidget}/>
                        </div>
                    </div>
                    <div className={styles.navBarMobile}>
                        <Logo url={'/home'} isPaddingCollapsed={isPaddingCollapsed}/>
                        <div className={styles.iconWrap}>
                            <NavBarIcon type={"menu"} clickAction={props.changeShowMenu}/>
                        </div>
                    </div>
                </nav>
                <nav className={combineClassNames(styles.mobileMenu, {"hidden": !props.showMenu})}>
                    {searchBar}
                    {HeaderLinksArray}

                    <div className={styles.profileNavRowWrapper}>
                        <ProfileNavRow/>
                    </div>
                </nav>
                {props.showCart && <CartWidget/>}
            </header>
            <MobileCartButton url={routes.cart}/>
        </>
    )
};


export default _NavBar;
import React, {useEffect, useState} from "react";
import styles from "./NavBar.module.scss";
import Logo from "./Logo";
import NavBarLink from "./NavBarLink/NavBarLink";
import NavBarIcon from "./NavBarIcon/NavBarIcon";
import NavBarCartIcon from "./ConnectedToCartSize/NavBarCartIcon/NavBarCartIcon";
import NavBarSearch from "./NavBarSearch/NavBarSearch";
import combineClassNames from "../../Utility/сombineClassNames";
import ProfileNavRow from "./ProfileNavRow/ProfileNavRow";
import Header from "./Header/Header";
import MobileCartButton from "./ConnectedToCartSize/MobileCartButton/MobileCartButton";

import {NavBarStateType} from "../../Reducers/NavBarReducer";

export type mapStateToPropsType = NavBarStateType;

export type mapDispatchToPropsType = {
    changeShowSearch: () => void
    changeShowCartWidget: () => void
    changeShowMenu: () => void
    getSearchValue: (data: any) => void
}

type propsType = mapStateToPropsType & mapDispatchToPropsType;


let _NavBar: React.FC<propsType> = (props) => {

    let searchContent = props.showSearch ? <NavBarSearch blur={props.changeShowSearch} onSubmit={(data) => {
            props.getSearchValue(data)
        }}/>
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


    return (
        <>
            <Header/>
            <header className={styles.navBarWrapper}>
                <nav className={styles.container}>
                    <div className={styles.navBarDesktop}>
                        <Logo url={'/home'} isPaddingCollapsed={isPaddingCollapsed}/>
                        <NavBarLink url={'/home'} title={'home'}/>
                        <NavBarLink url={'/shop'} title={'shop'}/>
                        <NavBarLink url={'/contact'} title={'contact'}/>
                        <NavBarLink url={'/blog'} title={'blog'}/>

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
                    <NavBarSearch blur={props.changeShowSearch} onSubmit={(data) => {
                        props.getSearchValue(data)
                    }}/>
                    <NavBarLink url={'/home'} title={'home'}/>
                    <NavBarLink url={'/shop'} title={'shop'}/>
                    <NavBarLink url={'/contact'} title={'contact'}/>
                    <NavBarLink url={'/blog'} title={'blog'}/>
                    <div className={styles.profileNavRowWrapper}>
                        <ProfileNavRow/>
                    </div>
                </nav>
            </header>
            <MobileCartButton url={'/cart'}/>
        </>
    )
};


export default _NavBar;